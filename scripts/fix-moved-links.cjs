const fs = require('fs');
const path = require('path');

const replacements = {
  '/resources/protein-calculator/': '/guides/protein-calculator-guide/',
  '/resources/tdee-calculator/': '/guides/tdee-calculator-guide/',
  '/resources/calories-burned-in-a-day/': '/guides/calories-burned-in-a-day/',
  '/resources/calorie-deficit-guide/': '/guides/calorie-deficit-guide/',
  '/resources/calorie-surplus-guide/': '/guides/calorie-surplus-guide/',
  '/alcohol-calories-calculator/': '/',
  '/guides/alcohol-calorie-counter/': '/'
};

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  for (const [oldLink, newLink] of Object.entries(replacements)) {
    const regex = new RegExp(`href=["']${oldLink}["']`, 'g');
    content = content.replace(regex, `href="${newLink}"`);
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.astro') || fullPath.endsWith('.ts') || fullPath.endsWith('.tsx') || fullPath.endsWith('.md')) {
      processFile(fullPath);
    }
  }
}

walkDir(path.join(__dirname, '../src'));
