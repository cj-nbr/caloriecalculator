const https = require('https');
const fs = require('fs');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 308) {
        return fetchUrl(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve({ status: res.statusCode, data }));
    }).on('error', reject);
  });
}

async function runQA() {
  const targetUrl = 'https://caloriecalculatorfree.com/country/spain/calculadora-de-calorias/';
  const sitemapUrl = 'https://caloriecalculatorfree.com/sitemap-0.xml';

  const [livePage, sitemap, distExists] = await Promise.all([
    fetchUrl(targetUrl),
    fetchUrl(sitemapUrl).catch(() => ({ data: '' })),
    fs.existsSync('dist/country/spain/calculadora-de-calorias/index.html')
  ]);

  const html = livePage.data;
  const distHtml = distExists ? fs.readFileSync('dist/country/spain/calculadora-de-calorias/index.html', 'utf8') : '';

  const checks = {
    'No "Example values are pre-filled"': !/Example values are pre-filled/i.test(html),
    'No "Per day"': !/Per day/i.test(html),
    'No "Still have questions"': !/Still have questions/i.test(html),
    'No "We\\'re here to help"': !/We're here to help/i.test(html),
    'No "Read our guides"': !/Read our guides/i.test(html),
    'No "Editorial Policy"': !/Editorial Policy/i.test(html),
    'No "más precisa"': !/más precisa/i.test(html),
    'No "cálculo exacto"': !/cálculo exacto/i.test(html),
    'No "proporciones exactas"': !/proporciones exactas/i.test(html),
    'No "estándar de oro"': !/estándar de oro/i.test(html),
    'No "Carlos M."': !/Carlos M\./i.test(html),
    'No "Sofía L."': !/Sofía L\./i.test(html),
    'No "Diego V."': !/Diego V\./i.test(html),
    'No "MET" section': !/MET|Metabolic Equivalent/i.test(html),
    'No "Derribando Mitos"': !/Derribando Mitos/i.test(html),
    'No "Contenido Sugerido"': !/Contenido Sugerido/i.test(html),
  };

  let allPass = true;
  for (const [key, val] of Object.entries(checks)) {
    if (!val) allPass = false;
  }
  
  console.log(JSON.stringify(checks, null, 2));
  console.log('ALL PASS: ' + allPass);
}

runQA();
