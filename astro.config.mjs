// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// Tailwind CSS v4 is wired up via PostCSS (see postcss.config.mjs),
// which is independent of Astro's bundled Vite version.
export default defineConfig({
  site: 'https://caloriecalculatorfree.com',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
