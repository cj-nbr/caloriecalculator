const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  if (content.includes('<Button ') && !content.includes('import Button from')) {
    // Inject import after the first ---
    content = content.replace(/^---\r?\n/m, '---\nimport Button from "../../components/ui/Button.astro";\n');
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
    } else if (fullPath.endsWith('.astro')) {
      processFile(fullPath);
    }
  }
}

walkDir(path.join(__dirname, '../src/pages/guides'));
walkDir(path.join(__dirname, '../src/pages/resources'));
