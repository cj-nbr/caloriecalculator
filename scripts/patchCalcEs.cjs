const fs = require('fs');
let content = fs.readFileSync('src/components/calculators/CalculadoraCalorias.astro', 'utf-8');

const jsPatch = `
      const GOALS_ES = {
        maintain: { label: "Mantener mi peso" },
        mildLoss: { label: "Pérdida suave" },
        loss: { label: "Pérdida de peso" },
        extremeLoss: { label: "Pérdida extrema" },
        mildGain: { label: "Ganancia suave" },
        gain: { label: "Ganancia de peso" },
        extremeGain: { label: "Ganancia rápida" }
      };
      
      $("goal-label").textContent = GOALS_ES[goal].label.toLowerCase();
`;

// Replace goal-label update
content = content.replace(
  /\$\("goal-label"\)\.textContent = GOALS\[goal\]\.label\.toLowerCase\(\);/g,
  jsPatch
);

// Replace the table building logic
content = content.replace(
  /\$\{GOALS\[k\]\.label\}/g,
  "${GOALS_ES[k].label}"
);

fs.writeFileSync('src/components/calculators/CalculadoraCalorias.astro', content);
