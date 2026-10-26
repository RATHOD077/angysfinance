const https = require('https');
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'public', 'images', 'angys-original');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const imagesToDownload = [
  'https://angysfinance.co.nz/wp-content/uploads/2023/05/Annabella-Mathews.png',
  'https://angysfinance.co.nz/wp-content/uploads/2023/05/pic-18.jpg',
  'https://angysfinance.co.nz/wp-content/uploads/2023/05/Team-1.jpg',
  'https://angysfinance.co.nz/wp-content/uploads/2023/05/Team-2.jpg',
  'https://angysfinance.co.nz/wp-content/uploads/2023/05/Team-3.jpg',
  'https://angysfinance.co.nz/wp-content/uploads/2023/05/Logo-3.png'
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
        console.log('Failed:', filename, 'status:', res.statusCode);
        resolve();
      }
    }).on('error', (err) => {
      console.log('Error downloading', filename, err.message);
      resolve();
    });
  });
}

(async () => {
  for (const url of imagesToDownload) {
    await download(url);
  }
  console.log('All downloads completed.');
})();
