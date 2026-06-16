---
name: tailwind-v4
description: Tailwind CSS v4 usage, semantic tokens, @theme inline, custom variants, responsive design, and global styles.
---

Use this skill when editing Tailwind CSS v4 projects.

## Tailwind v4 patterns

- Import Tailwind with `@import "tailwindcss";`.
- Use `@theme inline` for semantic design tokens that reference CSS variables.
- Use `@custom-variant dark (&:where(.dark, .dark *));` for class-based dark mode.
- Prefer semantic utility names such as `bg-canvas`, `text-ink`, `border-hairline`, and `bg-surface-elevated`.
- Keep theme-independent colors in custom classes or CSS variables.

## Design tokens

Define semantic tokens for:

```css
:root {
  --bg: #ffffff;
  --surface: #ffffff;
  --ink: #171717;
  --body: #4d4d4d;
  --mute: #6b6b6b;
  --hairline: #ebebeb;
}

.dark {
  --bg: #0a0a0a;
  --surface: #0e0e0e;
  --ink: #ededed;
  --body: #a1a1a1;
  --mute: #949494;
  --hairline: #262626;
}
```

Then map them:

```css
@theme inline {
  --color-canvas: var(--bg);
  --color-surface: var(--surface);
  --color-ink: var(--ink);
  --color-body: var(--body);
  --color-mute: var(--mute);
  --color-hairline: var(--hairline);
}
```

## Component utilities

Use `@layer components` for reusable classes like:

- `.card`
- `.container-page`
- `.border-hairline`
- `.text-gradient`
- `.prose-content`

## Responsive design

- Use mobile-first utilities.
- Add `sm:`, `md:`, `lg:`, and `xl:` only when layout genuinely improves.
- Prefer `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` for cards.
- Use `minmax(0, ...)` in grid templates to avoid overflow.

## Motion and print

- Add reduced-motion handling in `@media (prefers-reduced-motion: reduce)`.
- Keep print styles in a dedicated `@media print` block.
- Hide navigation, forms, and decorative backgrounds in print where appropriate.
