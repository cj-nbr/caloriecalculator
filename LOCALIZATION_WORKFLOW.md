# Internationalization (i18n) & Localization Workflow

This document outlines the standard procedure for creating localized/international calculator and SEO pages in this Astro project.

## 1. File Location
All translated static HTML pages must be placed inside the `public/country/` folder (e.g., `public/country/es/` for Spanish) so Astro serves them correctly without routing conflicts. **Never place them in the project root.**

## 2. Tech Stack & Styling
- Build these static pages using **plain HTML**.
- Use the **Tailwind CSS CDN** for styling.
- Ensure the design matches the main site's premium "Apple-like" aesthetic (radial gradients, clean spacing, modern cards, and animated hover states).

## 3. Sitemap Integration
Every new static page must be manually added to the `customPages` array inside `astro.config.mjs` (under the `@astrojs/sitemap` integration) so search engines can index them.
Example:
```javascript
sitemap({
  customPages: [
    'https://caloriecalculatorfree.com/country/es/calculadora-de-calorias.html'
  ]
})
```

## 4. SEO & Schema
- **robots.txt**: Ensure `public/robots.txt` allows crawling of the specific country paths (e.g., `Allow: /country/`).
- **Structured Data**: Inject translated JSON-LD structured data (FAQSchema, ArticleSchema, etc.) directly into the `<head>` of the HTML files.

## 5. Internal Linking
Every localized SEO article should cross-link to the main localized calculator page and other relevant local articles to build a strong, isolated internal SEO structure for that language.
