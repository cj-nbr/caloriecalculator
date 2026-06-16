---
name: health-calculators
description: Health and nutrition calculator implementation guidance, formula safety, unit conversion, and result UX.
---

Use this skill when editing health, fitness, nutrition, or calculator pages.

## Calculator architecture

- Put formulas in shared TypeScript modules such as `src/lib/calculations.ts`.
- Keep UI components responsible for rendering and user input.
- Convert units at the UI boundary, then run calculations in metric or explicit units.
- Reuse shared formulas across pages to avoid inconsistent results.

## Safety and disclaimers

- Do not present estimates as medical advice.
- Add disclaimers for health-related tools.
- Use sensible floors/ceilings where formulas can produce unsafe recommendations.
- Explain that results are estimates and individual needs vary.
- Encourage professional advice for medical decisions.

## Formula implementation

- Name functions clearly and include units in parameter names, e.g. `heightCm`, `weightKg`.
- Keep formulas pure and deterministic.
- Avoid hidden global state.
- Round only at presentation boundaries unless the formula requires intermediate rounding.
- Add tests or manual checks for edge cases when possible.

## Result UX

- Show the primary result first.
- Explain what the number means.
- Show secondary metrics such as BMR, TDEE, BMI category, macros, or timeline.
- Provide tables for comparison.
- Make results copyable/shareable when useful.
- Keep user input private on-device when the site promises privacy.

## Common formulas

- BMI: `kg / m²`
- BMR: Mifflin-St Jeor
- TDEE: BMR × activity multiplier
- Calories burned: MET × 3.5 × weightKg / 200 × minutes
- Weight timeline: `abs(kgDifference) × 7700 / abs(dailyCalorieDelta) / 7`
