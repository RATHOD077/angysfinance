const https = require('https');
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'public', 'images', 'angys-original');
if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

// The 3 updated 2025 images from the live homepage (block-2, insurance-services, reliable-protection, stories)
// These are the ACTUAL current hero/section images
const newImages = [
  { url: 'https://angysfinance.co.nz/wp-content/uploads/2025/04/block-2-817x900-.jpg', save: 'block-2.jpg' },
  { url: 'https://angysfinance.co.nz/wp-content/uploads/2025/04/insurance-services-900x904-1.jpg', save: 'insurance-services.jpg' },
  { url: 'https://angysfinance.co.nz/wp-content/uploads/2025/04/Reliable-Protection-833x1000-1.jpg', save: 'reliable-protection.jpg' },
  { url: 'https://angysfinance.co.nz/wp-content/uploads/2025/04/Stories-From-Our-Clients-833x1000-1.jpg', save: 'stories.jpg' }
];

function download(url, filename) {
  return new Promise((resolve) => {
    const dest = path.join(targetDir, filename);
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log('✓ Downloaded:', filename, '→', fs.statSync(dest).size, 'bytes');
          resolve();
        });
      } else {
        console.log('✗ Failed:', filename, 'HTTP', res.statusCode);
        file.close();
        resolve();
      }
    }).on('error', err => { console.log('Error:', filename, err.message); resolve(); });
  });
}

(async () => {
  for (const img of newImages) {
    await download(img.url, img.save);
  }
  console.log('\nDone.');
})();
