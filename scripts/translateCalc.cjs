const fs = require('fs');
let content = fs.readFileSync('src/components/calculators/CalorieCalculator.astro', 'utf-8');

const replacements = [
  ['Example values are pre-filled. Enter your own details for accurate results.', 'Los valores de ejemplo están prellenados. Ingresa tus propios datos para obtener resultados precisos.'],
  ['Metric', 'Métrico'],
  ['Imperial', 'Imperial'],
  ['Gender', 'Sexo'],
  ['Male', 'Hombre'],
  ['Female', 'Mujer'],
  ['Age', 'Edad'],
  ['years', 'años'],
  ['Weight', 'Peso'],
  ['Height', 'Altura'],
  ['Activity Level', 'Nivel de actividad'],
  ['Select your activity...', 'Selecciona tu actividad...'],
  ['Sedentary (little to no exercise)', 'Sedentario (poco o ningún ejercicio)'],
  ['Lightly active (light exercise 1-3 days/week)', 'Actividad ligera (ejercicio ligero 1–3 días por semana)'],
  ['Moderately active (moderate exercise 3-5 days/week)', 'Actividad moderada (ejercicio 3–5 días por semana)'],
  ['Very active (hard exercise 6-7 days/week)', 'Muy activo (ejercicio intenso 6–7 días por semana)'],
  ['Extra active (very hard exercise/physical job)', 'Extremadamente activo (entrenamiento intenso o trabajo físico)'],
  ['Your Goal', '¿Cuál es tu objetivo?'],
  ['Maintain weight', 'Mantener mi peso'],
  ['Mild weight loss (0.25 kg / week)', 'Pérdida de peso suave (0.25 kg / sem)'],
  ['Weight loss (0.5 kg / week)', 'Pérdida de peso (0.5 kg / sem)'],
  ['Extreme weight loss (1 kg / week)', 'Pérdida de peso extrema (1 kg / sem)'],
  ['Mild weight gain (0.25 kg / week)', 'Ganancia de peso suave (0.25 kg / sem)'],
  ['Weight gain (0.5 kg / week)', 'Ganancia de peso (0.5 kg / sem)'],
  ['Fast weight gain (1 kg / week)', 'Ganancia de peso rápida (1 kg / sem)'],
  ['Calculate My Calories', 'Calcular mis calorías'],
  ['Required', 'Requerido'],
  
  // Results panel
  ['Your Results', 'Tus resultados'],
  ['Daily Calories', 'Calorías diarias'],
  ['Target', 'Objetivo'],
  ['Weekly Calories', 'Calorías semanales'],
  ['Macronutrients', 'Macronutrientes'],
  ['Protein', 'Proteínas'],
  ['Carbs', 'Carbohidratos'],
  ['Fat', 'Grasas'],
  ['Estimated Baseline Metrics', 'Métricas de referencia estimadas'],
  ['BMR (Basal Metabolic Rate)', 'TMB (Tasa Metabólica Basal)'],
  ['TDEE (Total Energy Expenditure)', 'GET (Gasto Energético Total)'],
  ['Calorie Goals Summary', 'Resumen de objetivos calóricos'],
  ['Goal', 'Objetivo'],
  ['Daily (kcal)', 'Diario (kcal)'],
  ['Weekly (kcal)', 'Semanal (kcal)'],
  ['Copy', 'Copiar'],
  ['Print', 'Imprimir'],
  ['Share', 'Compartir'],

  // JS replacements
  ['maintain weight', 'mantener el peso'],
  ['mild weight loss', 'pérdida de peso suave'],
  ['weight loss', 'pérdida de peso'],
  ['extreme weight loss', 'pérdida extrema'],
  ['mild weight gain', 'ganancia suave'],
  ['weight gain', 'ganancia de peso'],
  ['fast weight gain', 'ganancia rápida'],
  ['My daily calorie target', 'Mi objetivo de calorías diarias'],
  ['Calculate yours:', 'Calcula las tuyas:'],
  ['Link copied!', '¡Enlace copiado!'],
  ['Copied!', '¡Copiado!']
];

for (const [en, es] of replacements) {
  content = content.split(en).join(es);
}

// Write the Spanish component
fs.writeFileSync('src/components/calculators/CalculadoraCalorias.astro', content);
console.log('Done generating component');
