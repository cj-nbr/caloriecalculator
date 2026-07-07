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
      { label: "Pace Calculator", href: "/pace-calculator/", desc: "Running, walking, cycling pace" },
      { label: "Pregnancy Calculator", href: "/pregnancy-calculator/", desc: "Due date & conception" },
      { label: "Due Date Calculator", href: "/due-date-calculator/", desc: "Estimated delivery date" },
      { label: "One Rep Max Calculator", href: "/one-rep-max-calculator/", desc: "Estimate your 1RM" },
      { label: "Target Heart Rate Calculator", href: "/target-heart-rate-calculator/", desc: "Training heart rate zones" },
      { label: "Army Body Fat Calculator", href: "/army-body-fat-calculator/", desc: "U.S. Army tape test" },
    ],
  },
  {
    label: "Pregnancy",
    children: [
      { label: "Pregnancy Calculator", href: "/pregnancy-calculator/", desc: "Due date & conception" },
      { label: "Due Date Calculator", href: "/due-date-calculator/", desc: "Estimated delivery date" },
      { label: "Conception Calculator", href: "/pregnancy-conception-calculator/", desc: "Fertility window" },
    ],
  },
  {
    label: "Guides",
    children: [
      { label: "How Many Calories Should I Eat?", href: "/guides/how-many-calories-should-i-eat/" },
      { label: "Maintenance Calorie Calculator", href: "/guides/maintenance-calorie-calculator/" },
      { label: "Online Calorie Calculator", href: "/guides/online-calorie-calculator/" },
      { label: "TDEE Calculation Methods", href: "/guides/tdee-calculation/" },
      { label: "BMR equations", href: "/guides/bmr-equations/" },
      { label: "Calorie Calculator by Age", href: "/guides/calorie-calculator-by-age/" },
      { label: "Calorie Calculator for Women", href: "/guides/calorie-calculator-for-women/" },
      { label: "Calorie Calculator for Men", href: "/guides/calorie-calculator-for-men/" },
      { label: "Weight Loss Calorie Calculator", href: "/guides/weight-loss-calorie-calculator/" },
      { label: "Calorie Calculator Accuracy", href: "/guides/calorie-calculator-accuracy/" },
      { label: "BMR Calculator", href: "/guides/bmr-calculator/" },
      { label: "Weight Loss Guide", href: "/guides/weight-loss-guide/" },
      { label: "Weight Gain Guide", href: "/guides/weight-gain-guide/" },
      { label: "Calorie Deficit Guide", href: "/guides/calorie-deficit-guide/" },
      { label: "Calorie Surplus Guide", href: "/guides/calorie-surplus-guide/" },
      { label: "Protein Guide", href: "/guides/protein-guide/" },
      { label: "Protein Calories", href: "/guides/protein-calories/" },
      { label: "Macro Guide", href: "/guides/macro-guide/" },
    ],
  },
  {
    label: "Workouts",
    children: [
      { label: "Leg Workouts", href: "/workouts/leg-workouts/", desc: "Leg day routines and hamstring work" },
      { label: "Lying Leg Raises", href: "/workouts/lying-leg-raises/", desc: "Lower abs and core control" },
      { label: "Leg Curl Machine", href: "/workouts/leg-curl-machine/", desc: "Setup, form, benefits, and mistakes" },
      { label: "Leg Extension Machine", href: "/workouts/leg-curl-machine/leg-extension-machine/", desc: "Quad machine guide" },
      { label: "Chest Workouts", href: "/workouts/chest-workouts/", desc: "Push-up, press, flye, and chest training" },
      { label: "Back Workouts", href: "/workouts/back-workouts/", desc: "Rows, pulldowns, pull-ups, and posture" },
      { label: "Shoulder Workouts", href: "/workouts/shoulder-workouts/", desc: "Presses, raises, and shoulder stability" },
      { label: "Home Workouts", href: "/workouts/home-workouts/", desc: "No-equipment routines" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "What is BMR?", href: "/resources/what-is-bmr/" },
      { label: "What is TDEE?", href: "/resources/what-is-tdee/" },
      { label: "Mifflin-St Jeor Equation", href: "/resources/mifflin-st-jeor-equation/" },
      { label: "Calories Burned in a Day", href: "/resources/calories-burned-in-a-day/" },
      { label: "BMI Calculator Guide", href: "/resources/bmi-calculator/" },
      { label: "Body Fat Percentage", href: "/resources/body-fat-percentage/" },
{ label: "Macro Calculator Guide", href: "/resources/macro-calculator/" },
       { label: "Protein Calories Guide", href: "/guides/protein-calories/" },
       { label: "Weight Loss Calculator Guide", href: "/resources/weight-loss-calculator/" },
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
      { label: "TDEE Calculator", href: "/tdee-calculator/" },
      { label: "BMR Calculator", href: "/bmr-calculator/" },
      { label: "BMI Calculator", href: "/bmi-calculator/" },
      { label: "Macro Calculator", href: "/macro-calculator/" },
      { label: "Body Fat Calculator", href: "/body-fat-calculator/" },
      { label: "Calorie Deficit Calculator", href: "/calorie-deficit-calculator/" },
      { label: "Pace Calculator", href: "/pace-calculator/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "How Many Calories Should I Eat?", href: "/guides/how-many-calories-should-i-eat/" },
      { label: "Maintenance Calorie Calculator", href: "/guides/maintenance-calorie-calculator/" },
      { label: "Online Calorie Calculator", href: "/guides/online-calorie-calculator/" },
      { label: "Mifflin-St Jeor Equation", href: "/resources/mifflin-st-jeor-equation/" },
      { label: "Calories Burned in a Day", href: "/resources/calories-burned-in-a-day/" },
      { label: "TDEE Calculator Guide", href: "/resources/tdee-calculator/" },
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
      { label: "Age Calculator", href: "/age-calculator/" },
      { label: "Mortgage Calculator", href: "/mortgage-calculator/" },
      { label: "Disclaimer", href: "/disclaimer/" },
    ],
  },
];
