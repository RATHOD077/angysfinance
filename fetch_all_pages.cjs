const https = require('https');
const fs = require('fs');

const pages = [
  { name: 'services', url: 'https://angysfinance.co.nz/services/' },
  { name: 'appointment', url: 'https://angysfinance.co.nz/appointment/' },
  { name: 'blog', url: 'https://angysfinance.co.nz/blog/' },
  { name: 'contact', url: 'https://angysfinance.co.nz/contact/' }
];

function fetchPage(page) {
  return new Promise((resolve) => {
    https.get(page.url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        fs.writeFileSync(`${page.name}_raw.html`, data);
        console.log(`${page.name}: status=${res.statusCode} length=${data.length}`);
        resolve();
      });
    }).on('error', err => {
      console.log(`${page.name}: ERROR - ${err.message}`);
      resolve();
    });
  });
}

(async () => {
  for (const page of pages) {
    await fetchPage(page);
  }
  console.log('All pages fetched.');
})();
