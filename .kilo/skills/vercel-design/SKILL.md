---
name: vercel-design
description: Vercel-inspired design system guidance: dark-mode-first UI, semantic colors, cards, gradients, typography, and polished product surfaces.
---

Use this skill when building polished, modern web interfaces inspired by Vercel-style product design.

## Visual language

- Dark-mode-first, with clean light-mode support.
- Near-black canvas with subtle elevated surfaces.
- Hairline borders instead of heavy outlines.
- Large, balanced typography with negative letter spacing for display text.
- Subtle gradients and mesh accents used sparingly.
- Cards with rounded corners, soft borders, and enough internal spacing.
- High-contrast primary actions and muted secondary actions.

## Color system

Use semantic variables:

```css
--bg
--bg-soft
--surface
--surface-elevated
--ink
--body
--mute
--hairline
--hairline-strong
```

Use brand/status colors intentionally:

```css
--color-brand
--color-success
--color-warning
--color-error
--color-protein
--color-carbs
--color-fat
```

## Layout patterns

- Hero with subtle grid background and gradient glow.
- Sticky header with backdrop blur.
- Section containers with consistent max width.
- Card grids for tools, features, FAQs, and related links.
- Long-form content in a narrow `max-width: 3xl` prose column.

## Interaction style

- Buttons should have hover, active, focus, and disabled states.
- Segmented controls should use `aria-pressed`.
- Cards can subtly change border/background on hover.
- Icons should be simple line SVGs with consistent stroke width.

## Avoid

- Overusing gradients.
- Mixing many border radii.
- Adding shadows that fight the dark background.
- Making decorative elements interfere with readability or accessibility.
- Using color as the only signal for state.
