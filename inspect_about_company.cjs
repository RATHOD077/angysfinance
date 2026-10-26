const fs = require('fs');
const html = fs.readFileSync('about_page_raw.html', 'utf8');

const aboutIdx = html.indexOf('About Company');
if (aboutIdx !== -1) {
  const slice = html.substring(aboutIdx, aboutIdx + 3000);
  console.log('=== ABOUT COMPANY SECTION ===');
  console.log(slice.replace(/<script[\s\S]*?<\/script>/gi, ''));
}
