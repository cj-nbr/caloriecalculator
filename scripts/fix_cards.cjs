const fs = require('fs');
let c = fs.readFileSync('src/layouts/ContentLayout.astro', 'utf8');

c = c.replace(
  '<a href="/" class="card p-4 hover:border-ink transition-colors block"><h3 class="font-bold text-ink text-base">BMI Calculator</h3><p class="text-sm text-mute mt-1">Check your Body Mass Index score.</p></a>',
  '<a href="/calories-burned-calculator/" class="card p-4 hover:border-ink transition-colors block"><h3 class="font-bold text-ink text-base">Calories Burned Calculator</h3><p class="text-sm text-mute mt-1">Find out how many calories you burn.</p></a>'
);

c = c.replace(
  '<a href="/" class="card p-4 hover:border-ink transition-colors block"><h3 class="font-bold text-ink text-base">Body Fat Calculator</h3><p class="text-sm text-mute mt-1">Estimate your body fat percentage.</p></a>',
  '<a href="/meal-calorie-calculator/" class="card p-4 hover:border-ink transition-colors block"><h3 class="font-bold text-ink text-base">Meal Calorie Calculator</h3><p class="text-sm text-mute mt-1">Calculate per-meal calories easily.</p></a>'
);

fs.writeFileSync('src/layouts/ContentLayout.astro', c);
console.log("Updated cards!");
