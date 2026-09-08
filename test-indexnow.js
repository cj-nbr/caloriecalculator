const KEY = '62641cbe99e74c19b0a00651f7cd4941';
const domains = ['caloriecalculatorfree.com', 'brasizechecker.com', 'finsiva.com'];

async function testAll() {
  for (const domain of domains) {
    console.log(`\n--- Testing ${domain} ---`);
    const keyUrl = `https://${domain}/${KEY}.txt`;
    
    try {
      const keyRes = await fetch(keyUrl);
      console.log(`Key File Status: ${keyRes.status}`);
      
      const payload = {
        host: domain,
        key: KEY,
        keyLocation: keyUrl,
        urlList: [`https://${domain}/about`, `https://${domain}/contact`]
      };
      
      const subRes = await fetch('https://www.bing.com/indexnow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(payload)
      });
      
      console.log(`IndexNow Submit Status: ${subRes.status}`);
      if (!subRes.ok) {
        console.log(`Error Text:`, await subRes.text());
      }
    } catch (e) {
      console.error('Error:', e.message);
    }
  }
}
testAll();
