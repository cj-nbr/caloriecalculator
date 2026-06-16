---
name: astro-mcp
description: Astro MCP workflow guidance for inspecting Astro projects, routes, components, config, and generated types.
---

Use this skill when Astro MCP tools are available for the current project.

## When to use Astro MCP

Use Astro MCP tools to inspect project structure, Astro config, routes, components, content collections, generated types, and build-related information.

## Workflow

1. Inspect the workspace structure before editing.
2. Read `astro.config.*`, `package.json`, `tsconfig.json`, and relevant `src/pages` files.
3. Identify the route/component/layout involved in the requested change.
4. Read existing examples before creating new pages or components.
5. Use generated Astro types only as reference; do not manually edit `.astro/types.d.ts`.
6. After edits, run the project’s normal validation commands.

## Tool usage guidance

- Use route/component inspection tools when available instead of guessing paths.
- Use config inspection tools to confirm integrations, site URL, output mode, and adapter behavior.
- Use type/check tools when available before running shell commands.
- Do not assume an MCP server exists. Fall back to normal file search and reads if Astro MCP tools are unavailable.

## Astro-specific checks

- Confirm pages live under `src/pages`.
- Confirm layouts import global CSS and fonts once.
- Confirm shared calculation logic is not duplicated across pages.
- Confirm scripts are scoped and guarded.
- Confirm static pages remain static unless server or edge behavior is explicitly required.
