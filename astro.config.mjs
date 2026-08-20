// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Tailwind CSS v4 is wired up via PostCSS (see postcss.config.mjs).
// The sitemap is maintained as a static file at public/sitemap.xml
// (served at /sitemap.xml) and referenced from robots.txt.
export default defineConfig({
  site: 'https://caloriecalculatorfree.com',
  build: {
    inlineStylesheets: 'auto',
  },
  redirects: {
    '/guides/calorie-calculator-for-men/': '/guides/how-many-calories-should-i-eat/',
    '/guides/calorie-calculator-for-women/': '/guides/how-many-calories-should-i-eat/',
    '/guides/calorie-calculator-by-age/': '/guides/how-many-calories-should-i-eat/',
    '/guides/calorie-calculator-accuracy/': '/guides/how-many-calories-should-i-eat/',
  },
});
