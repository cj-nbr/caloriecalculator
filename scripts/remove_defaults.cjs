const fs = require('fs');
let code = fs.readFileSync('src/components/calculators/CalculadoraCalorias.astro', 'utf8');

// Replace value="28" with value="" placeholder="28"
code = code.replace(/value="28"/g, 'value="" placeholder="28"');
// Replace value="75" with value="" placeholder="75"
code = code.replace(/value="75"/g, 'value="" placeholder="75"');
// Replace value="175" with value="" placeholder="175"
code = code.replace(/value="175"/g, 'value="" placeholder="175"');
// Replace value="165" with value="" placeholder="165"
code = code.replace(/value="165"/g, 'value="" placeholder="165"');

// Fix "Result summary" which was English
code = code.replace(/Result summary/g, 'Resumen de resultados');

// Fix "Calculate</button>" if it exists? The user said it didn't exist but just in case
code = code.replace(/Calculate<\/button>/g, 'Calcular</button>');

fs.writeFileSync('src/components/calculators/CalculadoraCalorias.astro', code, 'utf8');
