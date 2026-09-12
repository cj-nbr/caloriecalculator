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
    'HTTP 200': livePage.status === 200,
    'H1 exactly "Calculadora de Calorías"': /<h1[^>]*>Calculadora de Calorías<\/h1>/.test(html),
    'Title / Meta Description': /<title>.*Calculadora.*<\/title>/.test(html) && /<meta name="description" content="[^"]+/.test(html),
    '<html lang="es">': /<html[^>]*lang="es"/.test(html),
    'Canonical tag': /<link rel="canonical" href="https:\/\/caloriecalculatorfree\.com\/country\/spain\/calculadora-de-calorias\/"/.test(html),
    'hreflang tags': /hreflang="es"/.test(html) && /hreflang="en"/.test(html),
    'No Carlos/Sofía/Diego': !/Carlos M\.|Sofía|Diego/.test(html),
    'No MET section': !/MET|Metabolic Equivalent/.test(html),
    'No Derribando Mitos': !/Derribando Mitos/i.test(html),
    'No Contenido Sugerido': !/Contenido Sugerido/i.test(html),
    'No overclaims (cálculo exacto, etc)': !/cálculo exacto/i.test(html) && !/proporciones exactas/i.test(html) && !/estándar de oro/i.test(html),
    'Calculator inputs in Spanish (Edad, Peso, Altura, Sexo)': /Edad<\/label>/.test(html) && /Peso <span/.test(html) && /Altura <span/.test(html) && /Sexo<\/legend>/.test(html),
    'Goal selection in Spanish': /Ajustar objetivo/.test(html) && /Mantener mi peso/.test(html) && /Pérdida de peso/.test(html),
    'Maintenance/weight-loss/gain results in Spanish': /mantener peso/.test(html),
    'TMB mentioned': /TMB/.test(html),
    'TDEE/GET mentioned': /GET/.test(html) && /TDEE/.test(html),
    'Macros mentioned': /Proteínas/.test(html) && /Carbohidratos/.test(html) && /Grasas/.test(html),
    'FAQ section present': /Preguntas frecuentes/.test(html),
    'No untranslated English UI text': !/Activity level/.test(html) && !/Calculate<\/button>/.test(html) && !/Result summary/.test(html),
    'Sitemap inclusion': sitemap.data.includes('/country/spain/calculadora-de-calorias/'),
    'noindex absent': !/noindex/i.test(html),
    'dist/ match live': distExists && distHtml.includes('Calculadora de Calorías')
  };

  console.log(JSON.stringify(checks, null, 2));
}

runQA();
