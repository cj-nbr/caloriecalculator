const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.astro')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let newContent = content;

      // Replace overclaims
      newContent = newContent.replace(/is the gold standard/g, "is widely regarded as a reliable method");
      newContent = newContent.replace(/the modern gold standard/g, "a modern and reliable standard");
      newContent = newContent.replace(/most accurate equation for predicting BMR/g, "widely used equation for estimating BMR");
      newContent = newContent.replace(/most accurate formula available/g, "highly regarded formula");
      newContent = newContent.replace(/most accurate predictive formula/g, "widely recommended predictive formula");
      newContent = newContent.replace(/most accurate way/g, "effective way");
      newContent = newContent.replace(/exact numbers/g, "accurate estimates");
      newContent = newContent.replace(/exactly 4 calories/g, "approximately 4 calories");
      newContent = newContent.replace(/exactly 4 kcal/g, "approximately 4 kcal");
      newContent = newContent.replace(/exactly 9 calories/g, "approximately 9 calories");
      newContent = newContent.replace(/exactly how many calories/g, "an estimate of how many calories");
      newContent = newContent.replace(/exactly how much protein/g, "how much protein");
      newContent = newContent.replace(/exactly how to apply/g, "how to apply");
      newContent = newContent.replace(/exactly at your/g, "at your");
      newContent = newContent.replace(/exactly the same as/g, "similarly to");
      newContent = newContent.replace(/perfectly stable/g, "relatively stable");
      newContent = newContent.replace(/perfect ratio/g, "target ratio");
      newContent = newContent.replace(/highly accurate estimate/g, "reliable estimate");

      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

replaceInDir(path.join(process.cwd(), 'src/pages'));
