# Calorie Calculator Free

A premium, free calorie & nutrition calculator website — [caloriecalculatorfree.com](https://caloriecalculatorfree.com).

Built with **Astro**, **Tailwind CSS v4**, and **TypeScript**. Dark-mode-first, mobile-first, and fully static for top performance and SEO.

## Features

- **Calorie Calculator** — daily calorie targets for weight loss, gain, or maintenance (BMR, TDEE, macros)
- **11+ calculators** — BMI, BMR, TDEE, Macro, Body Fat, Lean Body Mass, Ideal Weight, Protein, Water Intake, Weight Loss
- **Exercise calorie calculators** — calories burned running, walking, and on the treadmill (MET-based)
- **Guides & resources** — calorie deficit/surplus, weight loss/gain, protein, macros, and more
- Dark mode with system detection + manual toggle
- Shareable result URLs, copy/print, recent calculations (localStorage)
- Full SEO: Open Graph, Twitter cards, canonical URLs, sitemap, and JSON-LD structured data (Organization, WebApplication, Breadcrumb, FAQPage, Article)

## Tech stack

- [Astro](https://astro.build) — static site generator
- [Tailwind CSS v4](https://tailwindcss.com) — via PostCSS
- TypeScript — shared calculation library (`src/lib/calculations.ts`)
- Self-hosted Geist fonts

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:4321)
npm run build    # build for production -> dist/
npm run preview  # preview the production build
npm run check    # type-check the project
```

## Project structure

```
src/
  components/     # UI + calculator components
  data/           # site config, nav, FAQ, exercise MET data
  layouts/        # Layout, CalculatorLayout, ContentLayout
  lib/            # calculations, unit conversions, SEO helpers
  pages/          # routes (calculators, guides, resources, info pages)
  styles/         # global.css (Tailwind v4 theme + design tokens)
public/           # favicon, OG image, robots.txt
```

## License

All rights reserved.
