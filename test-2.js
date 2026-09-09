const KEY = '21b6e8338b8246dfa0bb162dc5349410';
const domains = ['caloriecalculatorfree.com', 'brasizechecker.com'];

async function testAll() {
  for (const domain of domains) {
    console.log(`\n--- Testing ${domain} ---`);
    const payload = {
      host: domain,
      key: KEY,
      keyLocation: `https://${domain}/${KEY}.txt`,
      urlList: [`https://${domain}/about`, `https://${domain}/contact`]
    };
    
    try {
      const subRes = await fetch('https://www.bing.com/indexnow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(payload)
      });
      
      console.log(`Submit Status: ${subRes.status}`);
      if (!subRes.ok) console.log(await subRes.text());
    } catch (e) {
      console.error(e);
    }
  }
}
testAll();
