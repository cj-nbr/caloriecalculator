import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// Tailwind CSS v4 is wired up via PostCSS (see postcss.config.mjs).
// The sitemap is maintained as a static file at public/sitemap.xml
// (served at /sitemap.xml) and referenced from robots.txt.
export default defineConfig({
  site: 'https://caloriecalculatorfree.com',
  integrations: [sitemap({
    customPages: [
      'https://caloriecalculatorfree.com/country/%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8%EB%A5%BC%20%EC%9C%84%ED%95%9C%20%EC%B9%BC%EB%A1%9C%EB%A6%AC%20%EA%B3%84%EC%82%B0%EA%B8%B0.html',
      'https://caloriecalculatorfree.com/country/diet-recommended-calorie-guide.html',
      'https://caloriecalculatorfree.com/country/food-exercise-calorie-app.html',
      'https://caloriecalculatorfree.com/country/korean-community-calorie-calculator.html'
    ]
  })],
  prefetch: true,
  build: {
    inlineStylesheets: 'auto',
  },
  redirects: {
    '/guides/calorie-calculator-for-men/': '/guides/how-many-calories-should-i-eat/',
    '/guides/calorie-calculator-for-women/': '/guides/how-many-calories-should-i-eat/',
    '/guides/calorie-calculator-by-age/': '/guides/how-many-calories-should-i-eat/',
    
    '/sitemap.xml': '/sitemap-index.xml',
  },
});
