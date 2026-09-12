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
  { label: "Protein Calculator", href: "/protein-calculator/", desc: "Daily protein target" },
  { label: "Calorie Deficit Calculator", href: "/calorie-deficit-calculator/", desc: "Daily deficit target" },
  { label: "Calories Burned", href: "/calories-burned-calculator/", desc: "Exercise calorie burn" },
  { label: "Running Calorie Calculator", href: "/running-calorie-calculator/", desc: "Calories burned running" },
  { label: "Walking Calorie Calculator", href: "/walking-calorie-calculator/", desc: "Calories burned walking" },
  { label: "Treadmill Calorie Calculator", href: "/treadmill-calorie-calculator/", desc: "Treadmill calorie burn" },
  { label: "Cycling Calories Calculator", href: "/cycling-calories-calculator/", desc: "Calories burned cycling" },
  { label: "Swimming Calories Calculator", href: "/swimming-calories-calculator/", desc: "Calories burned swimming" },
  { label: "Recipe Calorie Calculator", href: "/recipe-calorie-calculator/", desc: "Total & per-serving recipe calories" },
];

/** Header dropdown groups. */
export const NAV: { label: string; href?: string; children?: NavLink[] }[] = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guides/" },

  { label: "Resources", href: "/resources/" },
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
      { label: "Korean Calorie Calculator", href: "/country/korean-weight-loss-calorie-calculator/" },
      { label: "Spanish Calorie Calculator", href: "/country/spain/calculadora-de-calorias/" },
    ],
  },
];


