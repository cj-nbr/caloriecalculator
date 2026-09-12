const fs = require('fs');
const path = require('path');

const replacements = {
  '/guides/harris-benedict-calculator/': '/',
  '/guides/harris-benedict-revised/': '/',
  '/resources/harris-benedict-equation/': '/',
  '/water-intake-calculator/': '/',
  '/resources/water-intake-calculator/': '/',
  '/maintenance-calories-calculator/': '/',
  '/guides/maintenance-calorie-calculator/': '/',
  '/resources/maintenance-calorie-calculator/': '/',
  '/intermittent-fasting-calculator/': '/',
  '/ideal-weight-calculator/': '/healthy-weight-calculator/',
  '/resources/ideal-body-weight/': '/healthy-weight-calculator/',
  '/weight-loss-calculator/': '/',
  '/guides/weight-loss-calorie-calculator/': '/',
  '/resources/weight-loss-calculator/': '/',
  '/guides/how-many-calories-to-lose-weight-calculator/': '/',
  '/tdee-calculator-for-weight-loss/': '/',
  '/macro-calculator/': '/',
  '/resources/macro-calculator/': '/',
  '/bmr-calculator/': '/',
  '/guides/bmr-calculator/': '/',
  '/guides/calculate-bmr/': '/'
};

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  for (const [oldLink, newLink] of Object.entries(replacements)) {
    const regex = new RegExp(`href=["']${oldLink}["']`, 'g');
    if (regex.test(content)) {
      content = content.replace(regex, `href="${newLink}"`);
      changed = true;
    }
  }

  // Also remove from guides/index and resources/index arrays if present
  if (filePath.endsWith('index.astro') || filePath.endsWith('site.ts')) {
      for (const oldLink of Object.keys(replacements)) {
          const regexStr = `\\{\\s*label:\\s*"[^"]*",\\s*href:\\s*"${oldLink}"[^}]*\\},?\\s*`;
          const lineRegex = new RegExp(regexStr, 'g');
          if (lineRegex.test(content)) {
              content = content.replace(lineRegex, '');
              changed = true;
          }
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
    } else if (fullPath.endsWith('.astro') || fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      processFile(fullPath);
    }
  }
}

walkDir(path.join(__dirname, '../src'));
