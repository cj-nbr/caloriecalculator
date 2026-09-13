import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// Tailwind CSS v4 is wired up via PostCSS (see postcss.config.mjs).
// The sitemap is maintained as a static file at public/sitemap.xml
// (served at /sitemap.xml) and referenced from robots.txt.
export default defineConfig({
  site: 'https://caloriecalculatorfree.com',
  trailingSlash: 'always',
  integrations: [sitemap({
    customPages: []
  })],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },
  build: {
    inlineStylesheets: 'auto',
  },
  redirects: {
    '/guides/calorie-calculator-for-men/': '/guides/how-many-calories-should-i-eat/',
    '/guides/calorie-calculator-for-women/': '/guides/how-many-calories-should-i-eat/',
    '/guides/calorie-calculator-by-age/': '/guides/how-many-calories-should-i-eat/',
    
    '/sitemap.xml': '/sitemap-index.xml',
    '/country/spain/calculadora-de-calorias-para-perder-peso-y-ganar-musculo/': '/country/spain/calculadora-de-calorias/',
    '/country/spain/calculadora-de-tmb-y-gasto-calorico/': '/country/spain/calculadora-de-calorias/',
    '/country/spain/calcular-calorias-de-alimentos-y-macros/': '/country/spain/calculadora-de-calorias/',
  },
});
