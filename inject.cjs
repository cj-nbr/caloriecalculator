const fs = require('fs');
const path = require('path');

const dirs = ['src/pages/guides', 'src/pages/resources', 'src/pages/workouts', 'src/pages/low-calorie'];
let updated = 0;
let tdeeFiles = [];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (!file.endsWith('.astro')) continue;
    const filepath = path.join(dir, file);
    let content = fs.readFileSync(filepath, 'utf8');
    
    if (file.toLowerCase().includes('tdee')) {
      tdeeFiles.push(filepath);
    }
    
    if (!content.includes('<CalorieCalculator') && !content.includes('<ExerciseCalculator') && !content.includes('<MacroCalculator')) {
      if (!content.includes('import CalorieCalculator')) {
        content = content.replace(/---/, "---\nimport CalorieCalculator from '../../components/calculators/CalorieCalculator.astro';");
      }
      
      if (content.includes('<FAQ')) {
        content = content.replace('<FAQ', "<div class='my-10'><CalorieCalculator /></div>\n<FAQ");
      } else if (content.includes('</ContentLayout>')) {
        content = content.replace('</ContentLayout>', "<div class='my-10'><CalorieCalculator /></div>\n</ContentLayout>");
      } else {
        content += "\n<div class='my-10'><CalorieCalculator /></div>\n";
      }
      
      fs.writeFileSync(filepath, content);
      updated++;
    }
  }
});

console.log(`Updated ${updated} files to include a calculator.`);
console.log('TDEE Files found:\n' + tdeeFiles.join('\n'));
