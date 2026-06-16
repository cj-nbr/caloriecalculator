---
name: web-design
description: Web UI/UX, accessibility, responsive layout, performance, and conversion-focused design guidance.
---

Use this skill when working on website UI, landing pages, dashboards, marketing pages, or product interfaces.

## Principles

- Design mobile-first, then enhance for tablet and desktop.
- Keep interfaces fast, accessible, readable, and conversion-focused.
- Prefer semantic HTML, clear hierarchy, strong CTAs, and predictable navigation.
- Use generous spacing, consistent radii, subtle borders, and restrained motion.
- Make interactive states obvious: hover, focus, active, disabled, loading, error, and success.
- Respect accessibility: labels, aria attributes, keyboard navigation, contrast, reduced motion, and skip links.
- Avoid visual clutter. Every element should support scanning, trust, or action.

## Responsive patterns

- Use container widths around `max-width: 1200px` for broad content pages.
- Use `grid` and `flex` with `gap` rather than brittle absolute positioning.
- Use fluid display typography for hero headings.
- Keep forms single-column on mobile and compact multi-column layouts on desktop.
- Hide nonessential controls on small screens only when it improves usability.

## Accessibility checklist

- Use real buttons for actions and real links for navigation.
- Ensure every input has a visible label or accessible label.
- Add `aria-live` for async result regions.
- Use `role="alert"` for errors.
- Ensure focus-visible styles are visible.
- Do not rely on color alone for state or category.
- Add reduced-motion support for animation and smooth scrolling.

## Performance checklist

- Keep critical CSS small and avoid unnecessary JavaScript.
- Lazy-load noncritical scripts.
- Avoid large third-party scripts on the critical path.
- Prefer static generation where possible.
- Use local computation instead of server calls when user privacy matters.
