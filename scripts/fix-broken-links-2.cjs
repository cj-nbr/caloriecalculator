const fs = require('fs');
const path = require('path');

const replacements = {
  '/weight-gain-calculator/': '/',
  '/healthy-weight-calculator/': '/',
  '/bmi-calculator/': '/',
  '/resources/bmi-calculator/': '/',
  '/guides/metabolism-calculator/': '/',
  '/lean-body-mass-calculator/': '/',
  '/resources/lean-body-mass/': '/',
  '/body-fat-calculator/': '/',
  '/army-body-fat-calculator/': '/',
  '/resources/army-tape-test/': '/',
  '/resources/body-fat-percentage/': '/'
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

  // Also remove from index arrays if present (site.ts, index.astro)
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
