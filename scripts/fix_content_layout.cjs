
const fs = require('fs');
let content = fs.readFileSync('src/layouts/ContentLayout.astro', 'utf8');

if (!content.includes('ALL_CALCULATORS')) {
  content = content.replace(
    'import Button from "../components/ui/Button.astro";',
    'import Button from "../components/ui/Button.astro";\nimport { ALL_CALCULATORS } from "../data/site";'
  );
}

if (!content.includes('const relatedTools =')) {
  content = content.replace(
    '  ...(faqs.length ? [faqSchema(faqs)] : []),\n];\n---',
    '  ...(faqs.length ? [faqSchema(faqs)] : []),\n];\n\nconst relatedTools = ALL_CALCULATORS.filter(c => c.lang === lang).slice(0, 6);\n---'
  );
}

// Now replace the hardcoded grid
const gridStart = '<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">';
const gridEnd = '</div>\n        </div>\n      </Section>';

const startIndex = content.indexOf(gridStart);
const endIndex = content.indexOf(gridEnd);

if (startIndex !== -1 && endIndex !== -1) {
  const newGrid = `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedTools.map(c => (
              <a href={c.href} class="card p-4 hover:border-ink transition-colors block">
                <h3 class="font-bold text-ink text-base">{c.label}</h3>
                <p class="text-sm text-mute mt-1">{c.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </Section>`;
      
  content = content.slice(0, startIndex) + newGrid + content.slice(endIndex + gridEnd.length);
}

fs.writeFileSync('src/layouts/ContentLayout.astro', content);
console.log('Fixed ContentLayout.astro');
