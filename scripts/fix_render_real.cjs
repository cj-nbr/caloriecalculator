const fs = require('fs');
const code = fs.readFileSync('src/components/calculators/CalculadoraCalorias.astro', 'utf8');

// We want to completely restore the submit handler to just call render()
let newCode = code.replace(/if \(window\.location\.search \|\| hasCalculated\) render\(\);/g, 'render();');

// But wait! If we restore `render();`, will it auto-calculate on load?
// Let's see where else `render()` is called.
fs.writeFileSync('src/components/calculators/CalculadoraCalorias.astro', newCode, 'utf8');
console.log("Restored render() inside submit handler and wherever else it was replaced.");
