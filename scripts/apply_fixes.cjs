const fs = require('fs');

// FaqSection.astro
let faqCode = fs.readFileSync('src/components/FaqSection.astro', 'utf8');
faqCode = faqCode.replace(/title\?: string;/g, 'title?: string;\n  hideSidebar?: boolean;');
faqCode = faqCode.replace(/const \{ items, title = "Frequently asked questions" \} = Astro.props;/g, 'const { items, title = "Frequently asked questions", hideSidebar = false } = Astro.props;');
faqCode = faqCode.replace(/<aside class="hidden lg:block sticky top-24">/g, '{!hideSidebar && <aside class="hidden lg:block sticky top-24">');
faqCode = faqCode.replace(/<\/aside>\s*<\/div>/g, '</aside>}\n</div>');
fs.writeFileSync('src/components/FaqSection.astro', faqCode, 'utf8');

// calculadora-de-calorias.astro
let calcPageCode = fs.readFileSync('src/pages/country/spain/calculadora-de-calorias.astro', 'utf8');
calcPageCode = calcPageCode.replace(/<FaqSection/g, '<FaqSection hideSidebar={true}');
// Remove overclaims
calcPageCode = calcPageCode.replace(/una estimación más precisa/gi, 'una estimación basada en la ecuación de Mifflin-St Jeor');
calcPageCode = calcPageCode.replace(/la fórmula más precisa/gi, 'la fórmula de Mifflin-St Jeor');
calcPageCode = calcPageCode.replace(/fórmula más precisa/gi, 'fórmula de Mifflin-St Jeor');
calcPageCode = calcPageCode.replace(/más precisa/gi, 'basada en la ecuación de Mifflin-St Jeor');
calcPageCode = calcPageCode.replace(/cálculo exacto/gi, 'cálculo');
calcPageCode = calcPageCode.replace(/proporciones exactas/gi, 'proporciones');
calcPageCode = calcPageCode.replace(/estándar de oro/gi, 'estándar reconocido');
fs.writeFileSync('src/pages/country/spain/calculadora-de-calorias.astro', calcPageCode, 'utf8');

// CalculadoraCalorias.astro
let calcCode = fs.readFileSync('src/components/calculators/CalculadoraCalorias.astro', 'utf8');
// "Example values are pre-filled..."
calcCode = calcCode.replace(/Example values are pre-filled. Enter your own details for accurate results./g, 'Introduce tus propios datos para obtener resultados personalizados.');
// "Per day"
calcCode = calcCode.replace(/Per day/g, 'Por día');

// Fix the macro presentation to avoid universal/ideal claims
calcCode = calcCode.replace(/<h3 class="mb-4 text-lg font-semibold text-ink">Macronutrientes<\/h3>/g, 
  `<h3 class="mb-2 text-lg font-semibold text-ink">Macronutrientes</h3>\n      <p class="mb-4 text-xs text-mute">Nota: Estas proporciones son un punto de partida aproximado y no una recomendación médica universal.</p>`);

// Remove arbitrary pre-filled values
// Calories
calcCode = calcCode.replace(/<span id="result-calories"[^>]*>2,000<\/span>/g, '<span id="result-calories" class="text-display-md text-ink tracking-tight tabular-nums">-</span>');
// BMR
calcCode = calcCode.replace(/<span id="result-bmr"[^>]*>1,600<\/span>/g, '<span id="result-bmr" class="tabular-nums">-</span>');
// TDEE
calcCode = calcCode.replace(/<span id="result-tdee"[^>]*>2,000<\/span>/g, '<span id="result-tdee" class="tabular-nums">-</span>');
// Weekly
calcCode = calcCode.replace(/<span id="result-weekly"[^>]*>14,000<\/span>/g, '<span id="result-weekly" class="tabular-nums font-medium text-ink">-</span>');

// Prevent JS from auto-running on load and filling results, or just change inputs to empty
// Actually, JS already reads inputs and calculates immediately if values exist.
// Let's modify the JS so it doesn't show default result text inside the graph arc.
// And we also want to remove `checked` from Radio buttons if they are pre-filled?
// The user just said: "The calculator should not make users think these are their calculated results before entering their own data. Use empty/placeholder states where appropriate."
// By changing 2,000 to '-', if the JS runs it will overwrite it. 
// Let's just modify JS so `saveRecent` and `syncUrl` and textContent updates only happen on `input` change! 
// Wait, the original English calculator auto-calculates on load (because `init()` calls `calc()`).
// Let's stop `calc()` from being called initially unless URL params are present!
calcCode = calcCode.replace(/const urlParams = new URLSearchParams\(window\.location\.search\);/g, `const urlParams = new URLSearchParams(window.location.search);\n      let hasCalculated = false;`);

// Find where `calc()` is called manually:
calcCode = calcCode.replace(/calc\(\);/g, `if (urlParams.has('age')) calc();`);

// Wait, the event listeners call calc(): `root.addEventListener("input", calc);` this is fine.
calcCode = calcCode.replace(/root\!.addEventListener\("input", calc\);/g, `root!.addEventListener("input", () => { hasCalculated = true; calc(); });`);

// To avoid the `calc()` running at the end of the script:
// There is a line: `calc();` at the end of `init()`.
// I'll replace it with `if (window.location.search) calc();`

fs.writeFileSync('src/components/calculators/CalculadoraCalorias.astro', calcCode, 'utf8');

console.log("Fixes applied!");
