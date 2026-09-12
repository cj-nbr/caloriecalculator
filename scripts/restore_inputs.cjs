const fs = require('fs');
let code = fs.readFileSync('src/components/calculators/CalculadoraCalorias.astro', 'utf8');

// Age: restore value="30"
code = code.replace(/<input id="age" name="age" type="number" inputmode="numeric" min="15" max="100" value="" placeholder="30" class=\{inputCls\} \/>/g, 
  '<input id="age" name="age" type="number" inputmode="numeric" min="15" max="100" value="30" class={inputCls} />');

// Weight: restore value="70"
code = code.replace(/<input id="weight" name="weight" type="number" inputmode="decimal" min="20" step="0.1" value="" placeholder="70" class=\{inputCls\} \/>/g, 
  '<input id="weight" name="weight" type="number" inputmode="decimal" min="20" step="0.1" value="70" class={inputCls} />');

// Height-cm: restore value="175"
code = code.replace(/<input id="height-cm" type="number" inputmode="numeric" min="100" max="250" value="" placeholder="175" class=\{inputCls\} aria-label="Altura en centímetros" \/>/g, 
  '<input id="height-cm" type="number" inputmode="numeric" min="100" max="250" value="175" class={inputCls} aria-label="Altura en centímetros" />');

// Height-ft: restore value="5"
code = code.replace(/<input id="height-ft" type="number" inputmode="numeric" min="3" max="8" value="" placeholder="5" class=\{inputCls\} aria-label="Altura en pies" \/>/g, 
  '<input id="height-ft" type="number" inputmode="numeric" min="3" max="8" value="5" class={inputCls} aria-label="Altura en pies" />');

// Height-in: restore value="9"
code = code.replace(/<input id="height-in" type="number" inputmode="numeric" min="0" max="11" value="" placeholder="9" class=\{inputCls\} aria-label="Altura en pulgadas" \/>/g, 
  '<input id="height-in" type="number" inputmode="numeric" min="0" max="11" value="9" class={inputCls} aria-label="Altura en pulgadas" />');

// Also the alert might still be there, but now the values will exist, so it won't be triggered. 
fs.writeFileSync('src/components/calculators/CalculadoraCalorias.astro', code, 'utf8');
