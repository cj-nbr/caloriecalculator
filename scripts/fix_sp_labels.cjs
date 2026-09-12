const fs = require('fs');

let code = fs.readFileSync('src/components/calculators/CalculadoraCalorias.astro', 'utf8');

// Advanced translations
const translations = [
  ['Weight <span', 'Peso <span'],
  ['Height <span', 'Altura <span'],
  ['aria-label="Height en centAmetros"', 'aria-label="Altura en centímetros"'],
  ['aria-label="Height en pies"', 'aria-label="Altura en pies"'],
  ['aria-label="Height en pulgadas"', 'aria-label="Altura en pulgadas"'],
  ['Your daily calories to <span id="goal-label"', 'Tus calorías diarias para <span id="goal-label"'],
  ['maintain weight', 'mantener peso'],
  ['Mild weight loss — 0.5 lb/week', 'Pérdida de peso leve — 0.25 kg/semana'],
  ['Weight loss — 1 lb/week', 'Pérdida de peso — 0.5 kg/semana'],
  ['Mild weight gain — 0.5 lb/week', 'Ganancia de peso leve — 0.25 kg/semana'],
  ['Weight gain — 1 lb/week', 'Ganancia de peso — 0.5 kg/semana'],
  ['Daily calories for each weight goal', 'Calorías diarias para cada objetivo'],
  ['Activity level', 'Nivel de actividad'],
  ['centAmetros', 'centímetros'],
  ['Maintain weight', 'Mantener peso'],
  ['Lose weight', 'Perder peso'],
  ['Gain weight', 'Ganar peso'],
  ['Result summary', 'Resumen de resultados'],
  ['Macronutrient Guidelines', 'Guía de Macronutrientes'],
  ['Protein', 'Proteínas'],
  ['Carbs', 'Carbohidratos'],
  ['Fats', 'Grasas'],
  ['Daily calorie estimate', 'Calorías diarias recomendadas'],
  ['Base Metabolic Rate (BMR)', 'Tasa Metabólica Basal (TMB)'],
  ['calories/day', 'calorías/día'],
  ['Maintenance (TDEE)', 'Mantenimiento (GET/TDEE)'],
  ['Example default values are pre-filled.', 'Los valores de ejemplo están prellenados.'],
  ['Enter your own details for an accurate result.', 'Ingresa tus propios datos para obtener un resultado preciso.']
];

for (const [en, es] of translations) {
  code = code.split(en).join(es);
  // handle bad encoding fallbacks that might have happened
  code = code.split('—').join('—'); 
}

fs.writeFileSync('src/components/calculators/CalculadoraCalorias.astro', code, 'utf8');
