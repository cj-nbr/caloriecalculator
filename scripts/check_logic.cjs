const fs = require('fs');

const code = fs.readFileSync('src/components/calculators/CalculadoraCalorias.astro', 'utf8');

const readInputsFunc = code.match(/function readInputs\(\) \{[\s\S]*?return \{ sex, age, activity, weightKg, heightCm \};\s*\}/)[0];

console.log(readInputsFunc);
