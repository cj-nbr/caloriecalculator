---
name: astro
description: Astro static site architecture, routing, layouts, components, scripts, islands, and build patterns.
---

Use this skill when editing or creating Astro projects.

## Project structure

Prefer this structure:

```text
src/
  components/
  layouts/
  pages/
  lib/
  data/
  styles/
public/
```

- Put shared UI components in `src/components`.
- Put reusable page shells in `src/layouts`.
- Put route pages in `src/pages`.
- Put pure utilities and formulas in `src/lib`.
- Put static content, navigation, FAQs, and site constants in `src/data`.
- Put global Tailwind/CSS tokens in `src/styles/global.css`.

## Astro patterns

- Use frontmatter for imports, data, SEO, and route metadata.
- Use `<Layout>` for global head/body structure.
- Use `<slot />` for default content and named slots for optional sections.
- Prefer static generation for marketing pages, guides, resources, and calculators.
- Use client-side `<script>` only for interactivity that cannot be static.
- Keep calculation logic in TypeScript modules, not duplicated inside components.
- Use `is:inline` only for scripts that must run verbatim before hydration or before first paint.

## Routing

- File path determines route path.
- Use trailing slash consistency for SEO routes.
- Use canonical URLs for important pages.
- Keep route slugs human-readable and keyword-focused.

## Astro scripts

- Prefer shared libraries for logic.
- Keep DOM selectors scoped to the component root when possible.
- Guard DOM access with `document.getElementById`.
- Avoid framework assumptions unless the project already uses React, Vue, Svelte, or Solid.
- Use TypeScript in Astro scripts when the project already uses TypeScript.

## Validation

Run the project’s existing checks when possible:

```bash
npm run check
npm run build
```
