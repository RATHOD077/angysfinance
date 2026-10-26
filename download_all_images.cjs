const https = require('https');
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'public', 'images', 'angys-original');
if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

// All real images found on services + appointment pages
const imagesToDownload = [
  // Services page images (6 service card images + 2 section images)
  'https://angysfinance.co.nz/wp-content/uploads/2023/05/pic-24.jpg',
  'https://angysfinance.co.nz/wp-content/uploads/2023/05/pic-23.jpg',
  'https://angysfinance.co.nz/wp-content/uploads/2023/05/pic-22.jpg',
  'https://angysfinance.co.nz/wp-content/uploads/2023/05/pic-27.jpg',
  'https://angysfinance.co.nz/wp-content/uploads/2023/05/pic-29.jpg',
  'https://angysfinance.co.nz/wp-content/uploads/2023/05/pic-28.jpg',
  'https://angysfinance.co.nz/wp-content/uploads/2023/05/pic-33.jpg',
  'https://angysfinance.co.nz/wp-content/uploads/2023/05/pic-25-1024x675.jpg',
  // Appointment page images
  'https://angysfinance.co.nz/wp-content/uploads/2023/05/pic-7.jpg',
  'https://angysfinance.co.nz/wp-content/uploads/2023/05/pic-19.png',
  'https://angysfinance.co.nz/wp-content/uploads/2023/05/pic-20.png',
  'https://angysfinance.co.nz/wp-content/uploads/2023/05/pic-21.png',
  'https://angysfinance.co.nz/wp-content/uploads/2023/05/pic-32.jpg'
];

function download(url) {
  return new Promise((resolve) => {
    const filename = path.basename(url);
    const dest = path.join(targetDir, filename);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      console.log('SKIP (exists):', filename, fs.statSync(dest).size, 'bytes');
      return resolve();
    }
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
        file.close();
        resolve();
      }
    }).on('error', (err) => {
      console.log('Error:', filename, err.message);
      resolve();
    });
  });
}

(async () => {
  for (const url of imagesToDownload) {
    await download(url);
  }
  console.log('\nAll downloads completed!');
  // List what we have
  const files = fs.readdirSync(targetDir);
  console.log('\nAll files in angys-original:');
  files.forEach(f => {
    const size = fs.statSync(path.join(targetDir, f)).size;
    console.log(' ', f, '-', size, 'bytes');
  });
})();
