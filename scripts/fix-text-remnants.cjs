const fs = require('fs');
const path = require('path');

const textReplacements = [
  { old: />Macro Calculator</g, new: ">Calorie Calculator<" },
  { old: /<h2>Try the BMR calculator<\/h2>/g, new: "<h2>Try the Calorie Calculator</h2>" },
  { old: />BMR calculator<\/a>/gi, new: ">BMR</a>" },
  { old: />Maintenance Calorie Calculator<\/a>/gi, new: ">Calorie Calculator</a>" },
  { old: />Weight Loss Calculator<\/a>/gi, new: ">Calorie Calculator</a>" },
  { old: />Ideal Weight Calculator<\/a>/gi, new: ">Healthy Weight Calculator</a>" },
  { old: />Body Fat Calculator<\/a>/gi, new: ">Calorie Calculator</a>" }, // We deleted body fat calc
  { old: />Lean Body Mass Calculator<\/a>/gi, new: ">Calorie Calculator</a>" } // We deleted lean body mass calc
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  for (const {old, new: newText} of textReplacements) {
    if (old.test(content)) {
      content = content.replace(old, newText);
      changed = true;
    }
  }

  if (changed) {
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
    } else if (fullPath.endsWith('.astro') || fullPath.endsWith('.ts') || fullPath.endsWith('.tsx') || fullPath.endsWith('.md') || fullPath.endsWith('.mdx')) {
      processFile(fullPath);
    }
  }
}

walkDir(path.join(__dirname, '../src'));
