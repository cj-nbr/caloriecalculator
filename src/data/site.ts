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

export const ALL_CALCULATORS: NavLink[] = [
  { label: "Calorie Calculator", href: "/", desc: "Daily calories for your goal" },
  { label: "TDEE Calculator", href: "/tdee-calculator/", desc: "Total daily energy expenditure" },
  { label: "BMR Calculator", href: "/bmr-calculator/", desc: "Basal metabolic rate" },
  { label: "BMI Calculator", href: "/bmi-calculator/", desc: "Body mass index" },
  { label: "Macro Calculator", href: "/macro-calculator/", desc: "Protein, carbs & fat split" },
  { label: "Body Fat Calculator", href: "/body-fat-calculator/", desc: "U.S. Navy method" },
  { label: "Army Body Fat Calculator", href: "/army-body-fat-calculator/", desc: "U.S. Army tape test" },
  { label: "Ideal Weight", href: "/ideal-weight-calculator/", desc: "Healthy weight range" },
  { label: "Lean Body Mass", href: "/lean-body-mass-calculator/", desc: "Fat-free mass" },
  { label: "Protein Calculator", href: "/protein-calculator/", desc: "Daily protein target" },
  { label: "Water Intake", href: "/water-intake-calculator/", desc: "Daily hydration" },
  { label: "Weight Loss", href: "/weight-loss-calculator/", desc: "Plan & timeline" },
  { label: "Weight Gain", href: "/weight-gain-calculator/", desc: "Calorie surplus & timeline" },
  { label: "Calorie Deficit Calculator", href: "/calorie-deficit-calculator/", desc: "Daily deficit target" },
  { label: "Calories Burned", href: "/calories-burned-calculator/", desc: "Exercise calorie burn" },
  { label: "Running Calorie Calculator", href: "/running-calorie-calculator/", desc: "Calories burned running" },
  { label: "Walking Calorie Calculator", href: "/walking-calorie-calculator/", desc: "Calories burned walking" },
  { label: "Treadmill Calorie Calculator", href: "/treadmill-calorie-calculator/", desc: "Treadmill calorie burn" },
  { label: "Cycling Calories Calculator", href: "/cycling-calories-calculator/", desc: "Calories burned cycling" },
  { label: "Swimming Calories Calculator", href: "/swimming-calories-calculator/", desc: "Calories burned swimming" },
  { label: "Recipe Calorie Calculator", href: "/recipe-calorie-calculator/", desc: "Total & per-serving recipe calories" },
  { label: "Intermittent Fasting Calculator", href: "/intermittent-fasting-calculator/", desc: "Fasting window planner" },
  { label: "One Rep Max Calculator", href: "/one-rep-max-calculator/", desc: "Estimate your 1RM" },
  { label: "Target Heart Rate Calculator", href: "/target-heart-rate-calculator/", desc: "Training heart rate zones" },
  { label: "Alcohol Calories Calculator", href: "/alcohol-calories-calculator/", desc: "Calories in beer, wine & spirits" },
  { label: "Pace Calculator", href: "/pace-calculator/", desc: "Running, walking, cycling pace" },
  { label: "Pregnancy Calculator", href: "/pregnancy-calculator/", desc: "Due date & conception" },
  { label: "Due Date Calculator", href: "/due-date-calculator/", desc: "Estimated delivery date" },
  { label: "Conception Calculator", href: "/pregnancy-conception-calculator/", desc: "Fertility window" },
];

/** Header dropdown groups. */
export const NAV: { label: string; href?: string; children?: NavLink[] }[] = [
  {
    label: "Home",
    href: "/",

  },
  {
    label: "Guides",
    href: "/guides/",
    children: [
      { label: "How Many Calories Should I Eat?", href: "/guides/how-many-calories-should-i-eat/" },
        { label: "Body Recomposition Guide", href: "/guides/body-recomposition-guide/" },
        { label: "Best Free Calorie Calculator Apps", href: "/guides/best-free-calorie-calculator/" },
        { label: "Are Calorie Calculators Accurate?", href: "/guides/are-calorie-calculators-accurate/" },
      { label: "Maintenance Calorie Calculator", href: "/guides/maintenance-calorie-calculator/" },
      { label: "Maintenance Calories", href: "/guides/maintenance-calories/" },
      { label: "Online Calorie Calculator", href: "/guides/online-calorie-calculator/" },
      { label: "TDEE Calculation Methods", href: "/guides/tdee-calculation/" },
      { label: "What is TDEE?", href: "/guides/whats-my-tdee/" },
      { label: "BMR equations", href: "/guides/bmr-equations/" },
      { label: "Calculate Your BMR", href: "/guides/calculate-bmr/" },
      { label: "Metabolism Calculator", href: "/guides/metabolism-calculator/" },
      { label: "Calorie Calculator by Age", href: "/guides/calorie-calculator-by-age/" },
      { label: "Calorie Calculator for Women", href: "/guides/calorie-calculator-for-women/" },
      { label: "Calorie Calculator for Men", href: "/guides/calorie-calculator-for-men/" },
      { label: "Weight Loss Calorie Calculator", href: "/guides/weight-loss-calorie-calculator/" },
      { label: "Calorie Calculator Accuracy", href: "/guides/calorie-calculator-accuracy/" },
      { label: "BMR Calculator", href: "/guides/bmr-calculator/" },
      { label: "Weight Loss Guide", href: "/guides/weight-loss-guide/" },
      { label: "Weight Gain Guide", href: "/guides/weight-gain-guide/" },
      { label: "How to Gain Weight", href: "/guides/how-to-gain-weight/" },
      { label: "Calorie Deficit Guide", href: "/guides/calorie-deficit-guide/" },
      { label: "Calorie Surplus Guide", href: "/guides/calorie-surplus-guide/" },
      { label: "Protein Guide", href: "/guides/protein-guide/" },
      { label: "Protein Calories", href: "/guides/protein-calories/" },
      { label: "Protein to kcal", href: "/guides/protein-to-kcal/" },
      { label: "Macro Guide", href: "/guides/macro-guide/" },
      { label: "Intermittent Fasting for Beginners", href: "/guides/intermittent-fasting-for-beginners/" },
      { label: "Calorie Counting Recipes", href: "/guides/calorie-counting-recipes/" },
      { label: "Bike Calorie Calculator", href: "/guides/bike-calorie-calculator/" },
      { label: "Calories Burned Swimming", href: "/guides/calories-burned-swimming/" },
      { label: "Epley Formula", href: "/guides/epley-formula/" },
      { label: "Harris-Benedict Calculator", href: "/guides/harris-benedict-calculator/" },
      { label: "Harris-Benedict Revised", href: "/guides/harris-benedict-revised/" },
      { label: "Mifflin-St Jeor Stress Factors", href: "/guides/mifflin-st-jeor-stress-factors/" },
      { label: "Estimate Delivery Date", href: "/guides/estimate-delivery-date/" },
      { label: "Alcohol Calorie Counter", href: "/guides/alcohol-calorie-counter/" },
    ],
  },
  {
    label: "Workouts",
    href: "/workouts/",
    children: [
      { label: "Leg Workouts", href: "/workouts/leg-workouts/", desc: "Leg day routines and hamstring work" },
      { label: "Lying Leg Raises", href: "/workouts/lying-leg-raises/", desc: "Lower abs and core control" },
      { label: "Leg Curl Machine", href: "/workouts/leg-curl-machine/", desc: "Setup, form, benefits, and mistakes" },
      { label: "Leg Extension Machine", href: "/workouts/leg-curl-machine/leg-extension-machine/", desc: "Quad machine guide" },
      { label: "Chest Workouts", href: "/workouts/chest-workouts/", desc: "Push-up, press, flye, and chest training" },
      { label: "Back Workouts", href: "/workouts/back-workouts/", desc: "Rows, pulldowns, pull-ups, and posture" },
      { label: "Shoulder Workouts", href: "/workouts/shoulder-workouts/", desc: "Presses, raises, and shoulder stability" },
      { label: "Home Workouts", href: "/workouts/home-workouts/", desc: "No-equipment routines" },
      { label: "One Rep Max Calculator", href: "/one-rep-max-calculator/", desc: "Estimate your 1RM" },
      { label: "Target Heart Rate Calculator", href: "/target-heart-rate-calculator/", desc: "Training heart rate zones" },
      { label: "Army Body Fat Calculator", href: "/army-body-fat-calculator/", desc: "U.S. Army tape test" },
    ],
  },
  {
    label: "Resources",
    href: "/resources/",
    children: [
      { label: "What is BMR?", href: "/resources/what-is-bmr/" },
      { label: "What is TDEE?", href: "/resources/what-is-tdee/" },
      { label: "Mifflin-St Jeor Equation", href: "/resources/mifflin-st-jeor-equation/" },
      { label: "Mifflin-St Jeor for Women", href: "/resources/mifflin-st-jeor-women/" },
      { label: "Harris-Benedict Equation", href: "/resources/harris-benedict-equation/" },
      { label: "Calories Burned in a Day", href: "/resources/calories-burned-in-a-day/" },
      { label: "BMI Calculator Guide", href: "/resources/bmi-calculator/" },
      { label: "Body Fat Percentage", href: "/resources/body-fat-percentage/" },
      { label: "Army Tape Test", href: "/resources/army-tape-test/" },
      { label: "Macro Calculator Guide", href: "/resources/macro-calculator/" },
      { label: "Maintenance Calorie Calculator", href: "/resources/maintenance-calorie-calculator/" },
      { label: "Weight Loss Calculator Guide", href: "/resources/weight-loss-calculator/" },
      { label: "Lean Body Mass Guide", href: "/resources/lean-body-mass/" },
      { label: "Water Intake Calculator", href: "/resources/water-intake-calculator/" },
      { label: "Protein Calculator Guide", href: "/resources/protein-calculator/" },
      { label: "Protein to Calories", href: "/resources/protein-to-calories/" },
      { label: "Ideal Body Weight", href: "/resources/ideal-body-weight/" },
      { label: "Calorie Deficit Guide", href: "/resources/calorie-deficit-guide/" },
      { label: "Calorie Surplus Guide", href: "/resources/calorie-surplus-guide/" },
    ],
  },
  { label: "About", href: "/about/" },
];

/** Footer link groups. */
export const FOOTER: { title: string; links: NavLink[] }[] = [
      {
        title: "Company",
        links: [
          { label: "About", href: "/about/" },
          { label: "Editorial Policy", href: "/editorial-policy/" },
          { label: "Contact", href: "/contact/" },
          { label: "Privacy Policy", href: "/privacy-policy/" },
          { label: "Terms", href: "/terms/" },
          { label: "Disclaimer", href: "/disclaimer/" },
          { label: "HTML Sitemap", href: "/html-sitemap/" },
        ],
      },
  {
    title: "Tools",
    links: [
      { label: "Korean Calorie Calculator", href: "/country/%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8%EB%A5%BC%20%EC%9C%84%ED%95%9C%20%EC%B9%BC%EB%A1%9C%EB%A6%AC%20%EA%B3%84%EC%82%B0%EA%B8%B0.html" },
      { label: "Age Calculator", href: "/age-calculator/" },
      { label: "Mortgage Calculator", href: "/mortgage-calculator/" },
    ],
  },
];
