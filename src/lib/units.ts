/**
 * units.ts — conversions between metric and imperial at the UI boundary.
 * Core math (calculations.ts) always works in metric (cm / kg).
 */

export const LB_PER_KG = 2.2046226218;
export const CM_PER_INCH = 2.54;
export const INCH_PER_FOOT = 12;

export const kgToLb = (kg: number) => kg * LB_PER_KG;
export const lbToKg = (lb: number) => lb / LB_PER_KG;

export const cmToInches = (cm: number) => cm / CM_PER_INCH;
export const inchesToCm = (inches: number) => inches * CM_PER_INCH;

/** Feet + inches -> cm */
export const ftInToCm = (feet: number, inches: number) =>
  inchesToCm(feet * INCH_PER_FOOT + inches);

/** cm -> { feet, inches } */
export function cmToFtIn(cm: number): { feet: number; inches: number } {
  const totalInches = cmToInches(cm);
  const feet = Math.floor(totalInches / INCH_PER_FOOT);
  const inches = Math.round(totalInches - feet * INCH_PER_FOOT);
  return { feet, inches };
}

export const litresToFlOz = (l: number) => l * 33.814;
export const litresToCups = (l: number) => l * 4.22675;
