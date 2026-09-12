const fs = require('fs');
let code = fs.readFileSync('src/components/calculators/CalorieCalculator.astro', 'utf8');

// List of all precise replacements
const r = [
  ['CalorieCalculator', 'CalculadoraCalorias'],
  ['Los valores de ejemplo estAn prellenados', 'Los valores de ejemplo están prellenados'],
  ['Example default values are pre-filled. Enter your own details for an accurate result.', 'Los valores de ejemplo están prellenados. Ingresa tus propios datos para obtener resultados precisos.'],
  ['Metric', 'Métrico'],
  ['Imperial', 'Imperial'],
  ['Sex', 'Sexo'],
  ['Male', 'Hombre'],
  ['Female', 'Mujer'],
  ['Age', 'Edad'],
  ['Weight <span', 'Peso <span'],
  ['Height <span', 'Altura <span'],
  ['in centimetres', 'en centímetros'],
  ['in feet', 'en pies'],
  ['in inches', 'en pulgadas'],
  ['Activity level', 'Nivel de actividad'],
  ['Sedentary — little or no exercise', 'Sedentario — poco o ningún ejercicio'],
  ['Lightly active — 1–3 days/week', 'Actividad ligera — 1 a 3 días por semana'],
  ['Moderately active — 3–5 days/week', 'Actividad moderada — 3 a 5 días por semana'],
  ['Very active — 6–7 days/week', 'Muy activo — 6 a 7 días por semana'],
  ['Extra active — hard exercise + job', 'Extremadamente activo — ejercicio duro o trabajo físico'],
  ['Calculate', 'Calcular'],
  ['Your daily calories to <span id="goal-label" class="text-ink">maintain weight</span>', 'Tus calorías diarias para <span id="goal-label" class="text-ink">mantener peso</span>'],
  ['kcal/day', 'kcal/día'],
  ['Weekly', 'Semanal'],
  ['Adjust goal', 'Ajustar objetivo'],
  ['Maintain weight', 'Mantener mi peso'],
  ['Mild weight loss — 0.5 lb/week', 'Pérdida de peso leve — 0.25 kg/semana'],
  ['Weight loss — 1 lb/week', 'Pérdida de peso — 0.5 kg/semana'],
  ['Extreme loss — 2 lb/week', 'Pérdida extrema — 1 kg/semana'],
  ['Mild weight gain — 0.5 lb/week', 'Ganancia de peso leve — 0.25 kg/semana'],
  ['Weight gain — 1 lb/week', 'Ganancia de peso — 0.5 kg/semana'],
  ['Extreme gain — 2 lb/week', 'Ganancia extrema — 1 kg/semana'],
  ['Copy', 'Copiar'],
  ['Print / PDF', 'Imprimir / PDF'],
  ['Share', 'Compartir'],
  ['Basal metabolic rate', 'Tasa metabólica basal'],
  ['Total daily energy', 'Energía diaria total'],
  ['Recommended macros', 'Macros recomendados'],
  ['These macros are provided as a starting point. Adjust based on how your body responds.', 'Estos macros se proporcionan como punto de partida. Ajusta según cómo responda tu cuerpo.'],
  ['Moderate ratio:', 'Proporción moderada:'],
  ['High protein:', 'Alta en proteínas:'],
  ['Lower carb:', 'Baja en carbohidratos:'],
  ['Protein', 'Proteínas'],
  ['Carbs', 'Carbohidratos'],
  ['Fats', 'Grasas'],
  ['Daily calories for each weight goal', 'Calorías diarias para cada objetivo de peso'],
  ['Goal', 'Objetivo'],
  ['Calories', 'Calorías'],
  ['maintain weight', 'mantener peso'],
  ['mild weight loss', 'pérdida de peso leve'],
  ['weight loss', 'pérdida de peso'],
  ['extreme loss', 'pérdida extrema'],
  ['mild weight gain', 'ganancia de peso leve'],
  ['weight gain', 'ganancia de peso'],
  ['extreme gain', 'ganancia extrema']
];

for (const [en, es] of r) {
  code = code.split(en).join(es);
}

fs.writeFileSync('src/components/calculators/CalculadoraCalorias.astro', code, 'utf8');
