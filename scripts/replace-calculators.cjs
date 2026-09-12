const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Check if CalorieCalculator is imported
  const importRegex = /import\s+CalorieCalculator\s+from\s+['"][^'"]+CalorieCalculator\.astro['"];?\n?/g;
  if (importRegex.test(content)) {
    // Remove the import
    content = content.replace(importRegex, '');

    // Check if Button is imported, if not, add it
    if (!content.includes('import Button from')) {
      // Find the first import or the start of the frontmatter
      content = content.replace(/---\n/, '---\nimport Button from "../../components/ui/Button.astro";\n');
    }

    // Replace the component
    // We want a nice call-to-action block where the calculator used to be.
    const cta = `
    <div class="my-8 rounded-2xl border border-hairline bg-canvas-soft p-6 text-center sm:p-8">
      <h3 class="mt-0 text-xl font-semibold text-ink">Ready to calculate your needs?</h3>
      <p class="mt-2 mb-6 text-body">Use our free, science-backed calculator to find your exact calorie and macro targets.</p>
      <Button href="/" size="lg" class="w-full sm:w-auto">Open Calorie Calculator</Button>
    </div>
    `;
    
    // Replace <CalorieCalculator /> (and variations with spaces)
    content = content.replace(/<CalorieCalculator\s*\/>/g, cta);

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
    }
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
