/**
 * exercises.ts — MET values for common activities, grouped so each
 * calorie-burn page can show a relevant subset.
 * Source: Compendium of Physical Activities (approximate MET values).
 */

export interface Activity {
  label: string;
  met: number;
}

export const WALKING: Activity[] = [
  { label: "Walking, slow (3.2 km/h · 2 mph)", met: 2.8 },
  { label: "Walking, casual (4 km/h · 2.5 mph)", met: 3.0 },
  { label: "Walking, moderate (4.8 km/h · 3 mph)", met: 3.5 },
  { label: "Walking, brisk (5.6 km/h · 3.5 mph)", met: 4.3 },
  { label: "Walking, fast (6.4 km/h · 4 mph)", met: 5.0 },
  { label: "Walking uphill / hiking", met: 6.0 },
];

export const RUNNING: Activity[] = [
  { label: "Jogging (8 km/h · 5 mph)", met: 8.3 },
  { label: "Running (9.7 km/h · 6 mph)", met: 9.8 },
  { label: "Running (11.3 km/h · 7 mph)", met: 11.0 },
  { label: "Running (12.9 km/h · 8 mph)", met: 11.8 },
  { label: "Running (14.5 km/h · 9 mph)", met: 12.8 },
  { label: "Running (16 km/h · 10 mph)", met: 14.5 },
];

export const TREADMILL: Activity[] = [
  { label: "Treadmill walking, moderate (4.8 km/h · 3 mph)", met: 3.5 },
  { label: "Treadmill walking, brisk (5.6 km/h · 3.5 mph)", met: 4.3 },
  { label: "Treadmill walking, incline / fast", met: 5.3 },
  { label: "Treadmill jogging (8 km/h · 5 mph)", met: 8.3 },
  { label: "Treadmill running (9.7 km/h · 6 mph)", met: 9.8 },
  { label: "Treadmill running (11.3 km/h · 7 mph)", met: 11.0 },
];

export const GENERAL: Activity[] = [
  { label: "Walking, brisk (5.6 km/h)", met: 4.3 },
  { label: "Running (9.7 km/h · 6 mph)", met: 9.8 },
  { label: "Cycling, moderate", met: 7.5 },
  { label: "Cycling, vigorous", met: 10.0 },
  { label: "Swimming, laps", met: 7.0 },
  { label: "Elliptical trainer", met: 5.0 },
  { label: "Rowing machine, moderate", met: 7.0 },
  { label: "Jump rope", met: 12.3 },
  { label: "Hiking", met: 6.0 },
  { label: "Weight training", met: 5.0 },
  { label: "Yoga", met: 3.0 },
  { label: "Dancing", met: 5.5 },
  { label: "Basketball", met: 6.5 },
  { label: "Soccer", met: 7.0 },
  { label: "Tennis", met: 7.3 },
];
