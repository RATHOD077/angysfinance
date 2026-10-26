const https = require('https');
const fs = require('fs');

// Blog redirects - try without trailing slash or alternate URL
const pages = [
  { name: 'blog', url: 'https://angysfinance.co.nz/blog' },
  { name: 'home', url: 'https://angysfinance.co.nz/' }
];

function fetchPage(page) {
  return new Promise((resolve) => {
    https.get(page.url, (res) => {
      // Follow redirect if needed
      if (res.statusCode === 301 || res.statusCode === 302) {
        const redirectUrl = res.headers.location;
        console.log(`${page.name}: redirect to ${redirectUrl}`);
        https.get(redirectUrl, (res2) => {
          let data2 = '';
          res2.on('data', chunk => data2 += chunk);
          res2.on('end', () => {
            fs.writeFileSync(`${page.name}_raw.html`, data2);
            console.log(`${page.name}: followed redirect, length=${data2.length}`);
            resolve();
          });
        }).on('error', err => { console.log(err.message); resolve(); });
      } else {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          fs.writeFileSync(`${page.name}_raw.html`, data);
          console.log(`${page.name}: status=${res.statusCode} length=${data.length}`);
          resolve();
        });
      }
    }).on('error', err => { console.log(`${page.name}: ERROR - ${err.message}`); resolve(); });
  });
}

(async () => {
  for (const page of pages) {
    await fetchPage(page);
  }
  console.log('Done.');
})();
