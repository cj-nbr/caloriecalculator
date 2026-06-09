/** site.ts — global site constants & navigation structure. */

export const SITE = {
  name: "Calorie Calculator Free",
  shortName: "CalorieCalculatorFree",
  domain: "caloriecalculatorfree.com",
  url: "https://caloriecalculatorfree.com",
  tagline: "Free Calorie Calculator for Accurate Daily Calorie Needs",
  description:
    "Free, science-based calorie calculator. Find your BMR, TDEE, and daily calorie needs for weight loss, gain, or maintenance — plus macros and 10+ health calculators.",
  locale: "en_US",
  twitter: "@caloriecalcfree",
  themeColor: "#0a0a0a",
} as const;

export interface NavLink {
  label: string;
  href: string;
  desc?: string;
}

/** Header dropdown groups. */
export const NAV: { label: string; href?: string; children?: NavLink[] }[] = [
  {
    label: "Calculators",
    children: [
      { label: "Calorie Calculator", href: "/", desc: "Daily calories for your goal" },
      { label: "TDEE Calculator", href: "/tdee-calculator/", desc: "Total daily energy expenditure" },
      { label: "BMR Calculator", href: "/bmr-calculator/", desc: "Basal metabolic rate" },
      { label: "BMI Calculator", href: "/bmi-calculator/", desc: "Body mass index" },
      { label: "Macro Calculator", href: "/macro-calculator/", desc: "Protein, carbs & fat split" },
      { label: "Body Fat Calculator", href: "/body-fat-calculator/", desc: "U.S. Navy method" },
      { label: "Ideal Weight", href: "/ideal-weight-calculator/", desc: "Healthy weight range" },
      { label: "Lean Body Mass", href: "/lean-body-mass-calculator/", desc: "Fat-free mass" },
      { label: "Protein Calculator", href: "/protein-calculator/", desc: "Daily protein target" },
      { label: "Water Intake", href: "/water-intake-calculator/", desc: "Daily hydration" },
      { label: "Weight Loss", href: "/weight-loss-calculator/", desc: "Plan & timeline" },
      { label: "Calories Burned", href: "/calories-burned-calculator/", desc: "Exercise calorie burn" },
    ],
  },
  {
    label: "Guides",
    children: [
      { label: "How Many Calories Should I Eat?", href: "/guides/how-many-calories-should-i-eat/" },
      { label: "Weight Loss Guide", href: "/guides/weight-loss-guide/" },
      { label: "Weight Gain Guide", href: "/guides/weight-gain-guide/" },
      { label: "Calorie Deficit Guide", href: "/guides/calorie-deficit-guide/" },
      { label: "Calorie Surplus Guide", href: "/guides/calorie-surplus-guide/" },
      { label: "Protein Guide", href: "/guides/protein-guide/" },
      { label: "Macro Guide", href: "/guides/macro-guide/" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "What is BMR?", href: "/resources/what-is-bmr/" },
      { label: "What is TDEE?", href: "/resources/what-is-tdee/" },
    ],
  },
  { label: "About", href: "/about/" },
];

/** Footer link groups. */
export const FOOTER: { title: string; links: NavLink[] }[] = [
  {
    title: "Calculators",
    links: [
      { label: "Calorie Calculator", href: "/" },
      { label: "BMI Calculator", href: "/bmi-calculator/" },
      { label: "BMR Calculator", href: "/bmr-calculator/" },
      { label: "TDEE Calculator", href: "/tdee-calculator/" },
      { label: "Macro Calculator", href: "/macro-calculator/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Weight Loss Guide", href: "/guides/weight-loss-guide/" },
      { label: "Protein Guide", href: "/guides/protein-guide/" },
      { label: "Macro Guide", href: "/guides/macro-guide/" },
      { label: "What is TDEE?", href: "/resources/what-is-tdee/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about/" },
      { label: "Contact", href: "/contact/" },
      { label: "Privacy Policy", href: "/privacy-policy/" },
      { label: "Terms", href: "/terms/" },
    ],
  },
  {
    title: "Tools",
    links: [
      { label: "Food Calories Search", href: "/food-calories-search/" },
      { label: "Calories Burned Calculator", href: "/calories-burned-calculator/" },
      { label: "Running Calorie Calculator", href: "/running-calorie-calculator/" },
      { label: "Walking Calorie Calculator", href: "/walking-calorie-calculator/" },
      { label: "Disclaimer", href: "/disclaimer/" },
    ],
  },
];
