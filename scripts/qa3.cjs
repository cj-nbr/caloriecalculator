const https = require('https');

https.get('https://caloriecalculatorfree.com/country/spain/calculadora-de-calorias/', (res) => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    const html = data;
    const tests = [
      'Example values are pre-filled', 
      'Per day', 
      'Still have questions', 
      "We're here to help", 
      'Read our guides', 
      'Editorial Policy', 
      'más precisa', 
      'cálculo exacto', 
      'proporciones exactas', 
      'estándar de oro', 
      'Carlos M.', 
      'Sofía L.', 
      'Diego V.', 
      'Derribando Mitos', 
      'Contenido Sugerido'
    ];
    let allPass = true;
    tests.forEach(t => {
      const failed = html.includes(t);
      if (failed) allPass = false;
      console.log(t + ': ' + (failed ? 'FAIL' : 'PASS'));
    });
    
    // Check MET separately (case-sensitive because of metadata)
    const metFail = html.includes(' MET ') || html.includes('Metabolic Equivalent');
    if (metFail) allPass = false;
    console.log('MET section: ' + (metFail ? 'FAIL' : 'PASS'));
  });
});
