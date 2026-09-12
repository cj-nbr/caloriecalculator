const fs = require('fs');
const path = require('path');

const replacements = {
  '/resources/what-is-tdee/': '/guides/whats-my-tdee/'
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
