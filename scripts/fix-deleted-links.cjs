const fs = require('fs');
const path = require('path');

const replacements = {
  '/low-calorie/starbucks/': '/',
  '/low-calorie/dunkin/': '/',
  '/low-calorie/alcohol/': '/',
  '/low-calorie/sweet-treats/': '/',
  '/low-calorie/drinks/': '/',
  '/low-calorie/foods/': '/',
  '/low-calorie/': '/',
  '/guides/fast-food-restaurant-calorie-calculator/': '/',
  '/guides/best-calorie-counter-macro-tracking-apps/': '/',
  '/guides/best-free-calorie-calculator/': '/',
  '/guides/online-calorie-calculator/': '/',
  '/guides/are-calorie-calculators-accurate/': '/guides/calorie-calculator-accuracy/',
  '/guides/bike-calorie-calculator/': '/cycling-calories-calculator/',
  '/guides/accurate-tdee-calculator-men-women/': '/guides/whats-my-tdee/',
  '/guides/uk-nhs-tdee-guidelines/': '/guides/whats-my-tdee/',
  '/guides/protein-calories/': '/guides/protein-guide/',
  '/guides/protein-calculator-guide/': '/guides/protein-guide/',
  '/guides/protein-calorie-calculator/': '/guides/protein-guide/',
  '/guides/tdee-calculation/': '/guides/whats-my-tdee/',
  '/guides/tdee-calculator-weight-loss-guide/': '/guides/whats-my-tdee/',
  '/guides/tdee-calculator-guide/': '/guides/whats-my-tdee/'
};

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  for (const [oldLink, newLink] of Object.entries(replacements)) {
    // Replace with trailing slash
    let regex = new RegExp(`href=["']${oldLink}["']`, 'g');
    content = content.replace(regex, `href="${newLink}"`);
    
    // Replace without trailing slash (just in case)
    const oldLinkNoSlash = oldLink.slice(0, -1);
    const newLinkStr = newLink;
    if (oldLinkNoSlash.length > 0) {
        let regex2 = new RegExp(`href=["']${oldLinkNoSlash}["']`, 'g');
        content = content.replace(regex2, `href="${newLinkStr}"`);
    }
  }

  // Also replace some exact text matches that might be orphaned anchor texts
  // e.g. >Best Calorie Counter Apps< -> >Calorie Calculator<
  content = content.replace(/>Best Free Calorie Calculator Apps?</gi, '>Calorie Calculator<');
  content = content.replace(/>Best Calorie Counter Apps?</gi, '>Calorie Calculator<');
  content = content.replace(/>Online Calorie Calculator?</gi, '>Calorie Calculator<');

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
