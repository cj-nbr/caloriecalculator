const fs = require('fs');
const path = require('path');

const replacements = {
  '/guides/best-exercises-to-burn-calories/': '/calories-burned-calculator/',
  '/guides/calories-burned-swimming/': '/swimming-calories-calculator/',
  '/guides/exercise-calories-burned-walking-running/': '/calories-burned-calculator/',
  '/guides/intermittent-fasting-for-beginners/': '/',
  '/guides/how-to-gain-weight/': '/guides/weight-gain-guide/',
  '/guides/daily-energy-requirements-explained/': '/guides/whats-my-tdee/'
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
    console.log(`Updated ${filePath}`);
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
