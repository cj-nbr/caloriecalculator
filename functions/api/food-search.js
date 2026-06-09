/**
 * Cloudflare Pages Function — /api/food-search
 * ---------------------------------------------------------------------------
 * Proxies USDA FoodData Central so the API key stays server-side, adds edge
 * caching, normalizes nutrients to a stable per-100g shape, and handles errors.
 *
 * Set a free API key as a secret/var named FDC_API_KEY in the Cloudflare Pages
 * project (Settings → Environment variables). Falls back to DEMO_KEY (heavily
 * rate-limited) so the tool still works before a key is configured.
 *
 * Get a free key: https://fdc.nal.usda.gov/api-key-signup.html
 * ---------------------------------------------------------------------------
 */

// USDA nutrientNumber -> our normalized field name.
const CORE = {
  "208": "calories",
  "203": "protein",
  "204": "fat",
  "205": "carbs",
  "291": "fiber",
  "269": "sugar",
  "307": "sodium",
  "306": "potassium",
  "601": "cholesterol",
  "606": "saturatedFat",
};

const VITAMINS = {
  "401": "Vitamin C",
  "320": "Vitamin A",
  "328": "Vitamin D",
  "323": "Vitamin E",
  "430": "Vitamin K",
  "415": "Vitamin B6",
  "418": "Vitamin B12",
  "417": "Folate",
};

const MINERALS = {
  "301": "Calcium",
  "303": "Iron",
  "304": "Magnesium",
  "305": "Phosphorus",
  "309": "Zinc",
};

function pickNutrients(foodNutrients = []) {
  const core = {};
  const vitamins = {};
  const minerals = {};
  for (const n of foodNutrients) {
    // Search API uses `nutrientNumber`; some shapes use `nutrient.number`.
    const num = String(n.nutrientNumber ?? n.number ?? n.nutrient?.number ?? "");
    const value = n.value ?? n.amount;
    const unit = (n.unitName ?? n.nutrient?.unitName ?? "").toLowerCase();
    if (value == null) continue;
    if (CORE[num] != null) core[CORE[num]] = value;
    else if (VITAMINS[num] != null) vitamins[VITAMINS[num]] = { value, unit };
    else if (MINERALS[num] != null) minerals[MINERALS[num]] = { value, unit };
  }
  return { core, vitamins, minerals };
}

function normalize(food) {
  const { core, vitamins, minerals } = pickNutrients(food.foodNutrients);
  return {
    fdcId: food.fdcId,
    description: (food.description || "").trim(),
    brandName: food.brandName || food.brandOwner || null,
    dataType: food.dataType || null,
    servingSize: food.servingSize || null,
    servingSizeUnit: food.servingSizeUnit || null,
    // USDA stores these per 100 g.
    per100g: {
      calories: core.calories ?? null,
      protein: core.protein ?? null,
      carbs: core.carbs ?? null,
      fat: core.fat ?? null,
      fiber: core.fiber ?? null,
      sugar: core.sugar ?? null,
      sodium: core.sodium ?? null,
      potassium: core.potassium ?? null,
      cholesterol: core.cholesterol ?? null,
      saturatedFat: core.saturatedFat ?? null,
    },
    vitamins,
    minerals,
  };
}

export async function onRequestGet(context) {
  const { request, env, waitUntil } = context;
  const url = new URL(request.url);
  const query = (url.searchParams.get("q") || "").trim().slice(0, 100);

  const json = (obj, status = 200, maxAge = 86400) =>
    new Response(JSON.stringify(obj), {
      status,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": `public, max-age=${maxAge}`,
      },
    });

  if (!query) {
    return json({ error: "Please enter a food to search for.", results: [] }, 400, 60);
  }

  // Edge cache keyed by the normalized query.
  const cache = caches.default;
  const cacheKey = new Request(
    `https://cache.local/food-search?v=2&q=${encodeURIComponent(query.toLowerCase())}`,
    request
  );
  const cached = await cache.match(cacheKey);
  if (cached) return cached;

  const apiKey = env.FDC_API_KEY || "DEMO_KEY";
  const endpoint =
    `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}` +
    `&query=${encodeURIComponent(query)}` +
    `&pageSize=10&dataType=Foundation,SR%20Legacy,Branded`;

  try {
    const res = await fetch(endpoint, { headers: { Accept: "application/json" } });
    if (!res.ok) {
      const status = res.status === 429 ? 429 : 502;
      const msg =
        res.status === 429
          ? "The nutrition service is busy right now. Please try again in a moment."
          : "We couldn't reach the nutrition database. Please try again shortly.";
      return json({ error: msg, results: [] }, status, 30);
    }
    const data = await res.json();
    const foods = Array.isArray(data.foods) ? data.foods : [];
    // Prioritize generic whole-food data (Foundation / SR Legacy) over branded
    // products so a search like "banana" returns raw banana, not banana chips.
    const rank = { Foundation: 0, "SR Legacy": 1, "Survey (FNDDS)": 2, Branded: 3 };
    const results = foods
      .map(normalize)
      .filter((f) => f.per100g.calories != null || f.per100g.protein != null)
      .sort((a, b) => (rank[a.dataType] ?? 5) - (rank[b.dataType] ?? 5))
      .slice(0, 8);

    if (results.length === 0) {
      return json(
        { error: `No nutrition data found for "${query}". Try a simpler term (e.g. "banana").`, results: [] },
        404,
        300
      );
    }

    const response = json({ query, results });
    waitUntil(cache.put(cacheKey, response.clone()));
    return response;
  } catch (err) {
    return json(
      { error: "Something went wrong fetching nutrition data. Please try again.", results: [] },
      500,
      30
    );
  }
}
