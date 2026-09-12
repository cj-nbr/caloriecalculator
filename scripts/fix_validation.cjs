const fs = require('fs');
let code = fs.readFileSync('src/components/calculators/CalculadoraCalorias.astro', 'utf8');

// First, remove the `required` attributes we just added
code = code.replace(/required /g, '');

// Now modify the submit handler to validate and alert
code = code.replace(/form\.addEventListener\("submit", \(e\) => \{[\s\S]*?render\(\);[\s\S]*?\}\);/g, `form.addEventListener("submit", (e) => {
      e.preventDefault();
      const { age, weightKg, heightCm } = readInputs();
      if (age <= 0 || weightKg <= 0 || heightCm <= 0) {
        alert("Por favor completa todos los campos requeridos (Edad, Peso y Altura) antes de calcular.");
        return;
      }
      render();
    });`);

fs.writeFileSync('src/components/calculators/CalculadoraCalorias.astro', code, 'utf8');
