const fs = require('fs');
const path = require('path');

// 1. Get all valid routes from src/pages
const pagesDir = path.join(process.cwd(), 'src', 'pages');
const validRoutes = new Set();

function getRoutes(dir, basePath = '/') {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getRoutes(fullPath, basePath + item + '/');
    } else if (item.endsWith('.astro')) {
      if (item === 'index.astro') {
        validRoutes.add(basePath);
      } else {
        const routeName = item.replace('.astro', '');
        validRoutes.add(basePath + routeName + '/');
      }
    }
  }
}

getRoutes(pagesDir);
// Also add special routes or public assets if needed
validRoutes.add('/sitemap-index.xml');
validRoutes.add('/robots.txt');

// 2. Scan all files in src/ for href="..."
const brokenLinks = [];

function scanLinks(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      scanLinks(fullPath);
    } else if (fullPath.endsWith('.astro') || fullPath.endsWith('.ts') || fullPath.endsWith('.tsx') || fullPath.endsWith('.js')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      
      // Match href="/something/" or href='/something/' or href: "/something/"
      const linkRegex = /(?:href|url)\s*[:=]\s*["'](\/[^"']*)["']/g;
      let match;
      while ((match = linkRegex.exec(content)) !== null) {
        let link = match[1];
        
        // Strip hash if present
        link = link.split('#')[0];
        
        // Ignore external links, mailto, etc. (we only captured absolute paths starting with / anyway)
        if (link.startsWith('/')) {
          // Normalize trailing slash for comparison if it's not a file extension
          let normalizedLink = link;
          if (!normalizedLink.endsWith('/') && !normalizedLink.includes('.')) {
              normalizedLink += '/';
          }
          
          if (!validRoutes.has(normalizedLink)) {
             brokenLinks.push({ file: fullPath, link: link, normalized: normalizedLink });
          }
        }
      }
    }
  }
}

scanLinks(path.join(process.cwd(), 'src'));

console.log("Found " + brokenLinks.length + " potentially broken internal links:");
for (const b of brokenLinks) {
  console.log(`File: ${b.file} -> ${b.link}`);
}

// 3. Scan public/_redirects targets to ensure they exist
const redirectsPath = path.join(process.cwd(), 'public', '_redirects');
if (fs.existsSync(redirectsPath)) {
  const redirects = fs.readFileSync(redirectsPath, 'utf8').split('\n');
  redirects.forEach((line, index) => {
    line = line.trim();
    if (!line || line.startsWith('#')) return;
    const parts = line.split(/\s+/);
    if (parts.length >= 2) {
      const target = parts[1];
      if (target.startsWith('/')) {
          let normalizedTarget = target;
          if (!normalizedTarget.endsWith('/') && !normalizedTarget.includes('.')) {
              normalizedTarget += '/';
          }
          if (!validRoutes.has(normalizedTarget)) {
              console.log(`Broken redirect target at public/_redirects line ${index + 1}: ${target}`);
          }
      }
    }
  });
}
