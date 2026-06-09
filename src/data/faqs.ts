import type { FaqItem } from "../lib/seo";

/**
 * Homepage FAQ — targets calorie-deficit, maintenance, and accuracy search
 * intent. Rendered on the homepage and emitted as FAQPage JSON-LD via
 * faqSchema() for rich results in Google.
 */
export const HOME_FAQS: FaqItem[] = [
  {
    q: "What is a calorie deficit calculator?",
    a: "A calorie deficit calculator works out how many calories you need to eat to lose weight. It first estimates your maintenance calories (your TDEE) and then subtracts a deficit, giving you a daily target that's lower than the calories you burn so your body uses stored fat for energy.",
  },
  {
    q: "How do I set a calorie deficit with this calculator?",
    a: "Enter your age, sex, height, weight, and activity level, then choose a weight-loss goal. The calculator instantly sets your deficit for you — a 'mild' goal uses about a 250-calorie deficit, 'weight loss' uses 500, and 'extreme' uses 1,000. The number it shows is the daily calorie target you eat to lose weight at that pace.",
  },
  {
    q: "How does the calorie deficit calculator work?",
    a: "It calculates your Basal Metabolic Rate with the Mifflin-St Jeor equation, multiplies it by an activity factor to find your TDEE (maintenance calories), then subtracts your chosen deficit. The result is the number of calories to eat each day to lose weight.",
  },
  {
    q: "What is the most accurate calorie calculator?",
    a: "The most accurate predictive calorie calculators use the Mifflin-St Jeor equation, which research has shown to be more reliable than the older Harris-Benedict formula for the general population. Our calculator uses Mifflin-St Jeor and is typically within about 10% of your true needs — track your results for 2–3 weeks and adjust to fine-tune.",
  },
  {
    q: "What should my calorie deficit be?",
    a: "For most people a deficit of 300–500 calories per day is ideal: it produces about 0.5–1 lb (0.25–0.45 kg) of fat loss per week and is sustainable. Larger deficits speed up loss but risk muscle loss and hunger. The calculator lets you pick the pace and shows the matching deficit.",
  },
  {
    q: "How can I set a calorie deficit for free?",
    a: "Use this free calorie deficit calculator — no sign-up or payment required. Enter your details, choose a weight-loss goal, and it shows your free daily calorie target and the exact size of your deficit in seconds.",
  },
  {
    q: "How much weight will I lose with this calorie calculator?",
    a: "Because roughly 3,500 calories equals a pound of fat, a 500-calorie daily deficit leads to about 1 lb of loss per week, and 1,000 calories per day to about 2 lb. The calculator shows your weekly target, and the weight loss calculator estimates how long it will take to reach a specific goal weight.",
  },
  {
    q: "What is my calorie deficit?",
    a: "Your calorie deficit is the gap between the calories you burn (your TDEE) and the calories you eat. For example, if your maintenance is 2,200 calories and you eat 1,700, your deficit is 500 calories per day. Enter your stats above and the calculator displays your personal deficit for each goal.",
  },
  {
    q: "How do I get into a calorie deficit?",
    a: "Eat fewer calories than you burn each day. You can do this by reducing portion sizes, prioritizing protein and vegetables, cutting liquid calories, and moving more. Use your calculated target as your daily ceiling and track your intake to stay consistently below maintenance.",
  },
  {
    q: "How many calories should I eat in a calorie deficit?",
    a: "Eat the target the calculator gives for your chosen weight-loss goal. As a safety floor, most experts advise not dropping below about 1,200 calories per day for women or 1,500 for men without medical supervision, to protect muscle and metabolism.",
  },
  {
    q: "How do I use the calorie calculator to lose weight?",
    a: "Enter your details, select a weight-loss goal, and the calculator gives you a daily calorie target below your maintenance level. Eat at or under that number consistently, prioritize protein, and recalculate every few kilos of weight change to keep losing.",
  },
  {
    q: "What is my calorie maintenance level?",
    a: "Your maintenance calories are your TDEE — the amount you can eat to keep your weight stable. The calculator shows this as the 'maintain weight' result. Eat above it to gain and below it to lose. Our maintenance calorie calculator finds the number from your BMR and activity level.",
  },
  {
    q: "How do I eat in a calorie deficit?",
    a: "Build meals around lean protein and fibre-rich foods that keep you full on fewer calories, watch portions of calorie-dense fats and oils, and limit sugary drinks and alcohol. Track your food against the daily target from the calculator so you stay below maintenance without feeling deprived.",
  },
  {
    q: "How do I do a calorie deficit calculation?",
    a: "Calorie deficit = maintenance calories − calories eaten. First find your maintenance (TDEE) using the calculator, decide how fast you want to lose (e.g. 500 calories/day for about 1 lb per week), then subtract that from maintenance to get your daily eating target. The tool does all of this automatically.",
  },
  {
    q: "How much should I eat according to the calorie calculator?",
    a: "Your ideal intake depends on your goal: eat at your TDEE to maintain, below it to lose, and above it to gain. Enter your details above and the calculator shows the exact daily calorie amount and macro breakdown for each goal.",
  },
  {
    q: "What is the best calorie deficit calculator?",
    a: "The best calorie deficit calculator is accurate, free, easy to use, and shows both your maintenance calories and goal-based targets with macros. Ours uses the science-backed Mifflin-St Jeor equation, runs privately in your browser, and is completely free.",
  },
  {
    q: "Can I use this calorie calculator for restaurant or fast-food meals?",
    a: "Yes. This tool calculates how many calories you should eat each day. To stay on track with restaurant or fast-food meals, check the calories on the menu or nutrition info and fit them within the daily target the calculator gives you.",
  },
  {
    q: "What should my daily calorie deficit be to lose weight?",
    a: "Aim for a daily deficit of 300–500 calories for steady, sustainable fat loss of around 0.5–1 lb per week. If you want faster results you can go up to 1,000 calories, but pair it with high protein and resistance training to protect muscle. The calculator sets the deficit for the pace you choose.",
  },
  {
    q: "Which calorie calculator is the most accurate?",
    a: "Calculators based on the Mifflin-St Jeor equation are the most accurate for everyday use, which is why we use it. No formula is perfect because individual metabolism varies, so use your result as a starting point and adjust based on real-world weight change over a few weeks.",
  },
  {
    q: "What exactly is a calorie deficit calculator and how do I read the result?",
    a: "It's a tool that tells you how many calories to eat to lose weight. The headline number is your daily calorie target; the deficit is how far below maintenance that target sits. Eat around that number each day, and the weekly figure shows your expected rate of fat loss.",
  },
];



/**
 * Food Calories Search FAQ — common "how many calories / how much protein"
 * questions. Emitted as FAQPage JSON-LD on /food-calories-search/.
 */
export const FOOD_FAQS: FaqItem[] = [
  { q: "How many calories are in a banana?", a: "A medium banana (about 118 g) has roughly 105 calories, with about 27 g of carbs, 1.3 g of protein, and very little fat. Search 'banana' above and set your quantity for an exact figure." },
  { q: "How many calories are in 100g of rice?", a: "Cooked white rice has about 130 calories per 100 g; cooked brown rice about 110–120. Uncooked (dry) rice is much higher — around 360 calories per 100 g — because it absorbs water when cooked." },
  { q: "How many calories are in an apple?", a: "A medium apple (about 182 g) contains roughly 95 calories, mostly from carbohydrates, plus about 4 g of fiber. Smaller apples have proportionally fewer." },
  { q: "How much protein is in an egg?", a: "One large egg (about 50 g) provides roughly 6 g of protein and about 72 calories. The protein is split between the white and the yolk." },
  { q: "How many calories are in milk?", a: "Whole milk has about 61 calories per 100 ml (≈150 per cup); 2% milk about 50 per 100 ml; skim milk about 34 per 100 ml. Search 'milk' and pick the type for exact values." },
  { q: "How many calories are in chicken breast?", a: "Cooked, skinless chicken breast has about 165 calories per 100 g, with roughly 31 g of protein and 3.6 g of fat — one of the highest-protein, lowest-fat foods available." },
  { q: "How many calories are in 100g of chicken?", a: "Around 165–190 calories per 100 g for cooked chicken breast, depending on preparation. Skin-on or fried chicken is higher in fat and calories." },
  { q: "How many calories should I eat per day?", a: "Most adults need 1,600–3,000 calories daily depending on age, sex, size, and activity. Use our calorie calculator to get a personalized number, then track foods here to stay on target." },
  { q: "How do I track calories in food?", a: "Search the food, enter how much you ate, and choose the unit (grams, cups, pieces, etc.). The tool scales the nutrition facts to your exact portion. Add up your foods across the day and compare to your calorie target." },
  { q: "How accurate is the food calorie data?", a: "Values come from trusted nutrition databases (USDA FoodData Central) and are reliable estimates. Actual values vary by brand, ripeness, cooking method, and portion size, so treat them as close approximations." },
  { q: "How many calories are in an avocado?", a: "A whole medium avocado (about 200 g) has roughly 320 calories, mostly from healthy fats, plus about 13 g of fiber. Per 100 g it's around 160 calories." },
  { q: "How much protein is in 100g of paneer or tofu?", a: "Firm tofu has about 8 g of protein per 100 g (~76 calories); paneer has about 18 g of protein per 100 g but is higher in calories (~265) and fat. Search either for exact figures." },
  { q: "How many calories are in a slice of bread?", a: "A standard slice of white or whole-wheat bread (about 30 g) has roughly 75–80 calories and 2–4 g of protein. Heartier or seeded breads can be higher." },
  { q: "What foods are highest in protein?", a: "Per calorie, lean meats (chicken breast, turkey), fish, egg whites, Greek yogurt, cottage cheese, tofu, lentils, and protein powder rank highest. Search any of them to compare protein per serving." },
  { q: "How many calories are in a tablespoon of olive oil?", a: "One tablespoon (about 14 g) of olive oil has roughly 120 calories, all from fat. Oils are the most calorie-dense foods, so small amounts add up quickly." },
  { q: "How do I convert food portions to grams?", a: "Use the unit selector — choose cups, tablespoons, ounces, pounds, pieces, or servings and the tool converts to grams automatically (volume units assume a water-like density, so liquids are most accurate)." },
];
