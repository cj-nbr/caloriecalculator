const fs = require('fs');
const path = require('path');

const replacements = {
  '/resources/what-is-bmr/': '/guides/what-is-bmr/',
  '/resources/mifflin-st-jeor-equation/': '/guides/mifflin-st-jeor-equation/',
  '/resources/mifflin-st-jeor-women/': '/guides/mifflin-st-jeor-women/',
};

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  for (const [oldLink, newLink] of Object.entries(replacements)) {
    // Replace with trailing slash
    let regex = new RegExp(`href=["']${oldLink}["']`, 'g');
    content = content.replace(regex, `href="${newLink}"`);
    
    // Replace without trailing slash
    const oldLinkNoSlash = oldLink.slice(0, -1);
    if (oldLinkNoSlash.length > 0) {
        let regex2 = new RegExp(`href=["']${oldLinkNoSlash}["']`, 'g');
        content = content.replace(regex2, `href="${newLink}"`);
    }
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated links in ${filePath}`);
  }
}

function walkDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.astro') || fullPath.endsWith('.ts') || fullPath.endsWith('.tsx') || fullPath.endsWith('.md') || fullPath.endsWith('.json')) {
      processFile(fullPath);
    }
  }
}

walkDir(path.join(__dirname, '../src'));
