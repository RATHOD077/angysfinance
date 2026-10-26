const fs = require('fs');
const html = fs.readFileSync('about_page_raw.html', 'utf8');

const timelineIdx = html.indexOf('Company Timeline');
if (timelineIdx !== -1) {
  const slice = html.substring(timelineIdx, timelineIdx + 5000);
  console.log('=== RAW TIMELINE SLICE ===');
  console.log(slice.replace(/<script[\s\S]*?<\/script>/gi, ''));
}
