const https = require('https');
const fs = require('fs');

https.get('https://angysfinance.co.nz/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('home_raw.html', data);
    console.log('Status:', res.statusCode, 'Length:', data.length);
  });
}).on('error', err => console.error(err));
