const https = require('https');
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'public', 'images', 'angys-original');
if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

// Blog post images: Post-1 through Post-6 from the live blog
const imagesToDownload = [
  'https://angysfinance.co.nz/wp-content/uploads/2023/05/Post-1.jpg',
  'https://angysfinance.co.nz/wp-content/uploads/2023/05/Post-2.jpg',
  'https://angysfinance.co.nz/wp-content/uploads/2023/05/Post-3.jpg',
  'https://angysfinance.co.nz/wp-content/uploads/2023/05/Post-4.jpg',
  'https://angysfinance.co.nz/wp-content/uploads/2023/05/Post-5.jpg',
  'https://angysfinance.co.nz/wp-content/uploads/2023/05/Post-6.jpg'
];

function download(url) {
  return new Promise((resolve) => {
    const filename = path.basename(url);
    const dest = path.join(targetDir, filename);
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log('Downloaded:', filename, fs.statSync(dest).size, 'bytes');
          resolve();
        });
      } else {
        console.log('Failed:', filename, 'HTTP', res.statusCode);
        file.close();
        resolve();
      }
    }).on('error', err => { console.log('Error:', filename, err.message); resolve(); });
  });
}

(async () => {
  for (const url of imagesToDownload) {
    await download(url);
  }
  console.log('Blog images complete.');
})();
