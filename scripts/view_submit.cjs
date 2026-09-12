const fs = require('fs');
const code = fs.readFileSync('src/components/calculators/CalculadoraCalorias.astro', 'utf8');
const idx = code.indexOf('addEventListener("submit"');
console.log(code.substring(idx - 100, idx + 300));
