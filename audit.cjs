const fs = require('fs');
const path = require('path');
const dist = path.join(process.cwd(), 'dist');

function findHtmlFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findHtmlFiles(filePath, fileList);
    } else if (filePath.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const htmlFiles = findHtmlFiles(dist);
let noIndexCount = 0;
let localCanonicalCount = 0;
let httpCanonicalCount = 0;
let missingCanonicalCount = 0;

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('noindex') && !file.includes('404') && !file.includes('500')) {
    noIndexCount++;
    console.log('Unexpected noindex in:', file);
  }
  
  const canonicalMatch = content.match(/<link rel="canonical" href="([^"]+)"/);
  if (canonicalMatch) {
    const url = canonicalMatch[1];
    if (url.includes('localhost') || url.includes('127.0.0.1')) {
       localCanonicalCount++;
       console.log('Local canonical in:', file, url);
    } else if (url.startsWith('http://')) {
       httpCanonicalCount++;
       console.log('HTTP canonical in:', file, url);
    }
  } else {
    missingCanonicalCount++;
    console.log('Missing canonical in:', file);
  }
}

console.log({ htmlFiles: htmlFiles.length, noIndexCount, localCanonicalCount, httpCanonicalCount, missingCanonicalCount });
