const fs = require('fs');
let code = fs.readFileSync('src/components/calculators/CalculadoraCalorias.astro', 'utf8');

// Age: Add required, remove value="30"
code = code.replace(/<input id="age" name="age" type="number" inputmode="numeric" min="15" max="100" value="30" class=\{inputCls\} \/>/g, 
  '<input id="age" name="age" type="number" inputmode="numeric" min="15" max="100" value="" placeholder="30" required class={inputCls} />');

// Weight: Add required, remove value="70"
code = code.replace(/<input id="weight" name="weight" type="number" inputmode="decimal" min="20" step="0.1" value="70" class=\{inputCls\} \/>/g, 
  '<input id="weight" name="weight" type="number" inputmode="decimal" min="20" step="0.1" value="" placeholder="70" required class={inputCls} />');

// Height-cm: Add required (it already has value="" placeholder="175")
code = code.replace(/<input id="height-cm" type="number" inputmode="numeric" min="100" max="250" value="" placeholder="175" class=\{inputCls\}  aria-label="Height en centímetros" \/>/g, 
  '<input id="height-cm" type="number" inputmode="numeric" min="100" max="250" value="" placeholder="175" required class={inputCls} aria-label="Altura en centímetros" />');

// Height-ft: Add required, remove value="5"
code = code.replace(/<input id="height-ft" type="number" inputmode="numeric" min="3" max="8" value="5" class=\{inputCls\}  aria-label="Height en pies" \/>/g, 
  '<input id="height-ft" type="number" inputmode="numeric" min="3" max="8" value="" placeholder="5" class={inputCls} aria-label="Altura en pies" />'); // Not required universally because they might be using metric

// Height-in: remove value="9"
code = code.replace(/<input id="height-in" type="number" inputmode="numeric" min="0" max="11" value="9" class=\{inputCls\}  aria-label="Height en pulgadas" \/>/g, 
  '<input id="height-in" type="number" inputmode="numeric" min="0" max="11" value="" placeholder="9" class={inputCls} aria-label="Altura en pulgadas" />');

// Remove trailing English "Height" text in aria-labels from previous replacements
code = code.replace(/aria-label="Height en centímetros"/g, 'aria-label="Altura en centímetros"');
code = code.replace(/aria-label="Height en pies"/g, 'aria-label="Altura en pies"');
code = code.replace(/aria-label="Height en pulgadas"/g, 'aria-label="Altura en pulgadas"');

// Fix English helper note that might have been left over at the bottom (found in the last grep)
code = code.replace(/Estimates use the Mifflin-St Jeor equation\. Individual needs vary —/g, 'Las estimaciones utilizan la ecuación de Mifflin-St Jeor. Las necesidades individuales varían —');
code = code.replace(/use these as a starting point and adjust based on real-world results\./g, 'usa esto como un punto de partida y ajusta según tus resultados en el mundo real.');

fs.writeFileSync('src/components/calculators/CalculadoraCalorias.astro', code, 'utf8');
