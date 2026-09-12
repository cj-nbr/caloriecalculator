const fs = require('fs');
let code = fs.readFileSync('src/components/calculators/CalculadoraCalorias.astro', 'utf8');

// Replace standard render() calls except the definition
code = code.replace(/    render\(\);/g, '    if (window.location.search || hasCalculated) render();');

// Also fix the event listener to set hasCalculated
code = code.replace(/root!\.addEventListener\("input", render\);/g, 'root!.addEventListener("input", () => { hasCalculated = true; render(); });');

fs.writeFileSync('src/components/calculators/CalculadoraCalorias.astro', code, 'utf8');
