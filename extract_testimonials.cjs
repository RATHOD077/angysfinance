const fs = require('fs');
const html = fs.readFileSync('home_raw.html', 'utf8');

const t2 = html.indexOf('Emily R.');
if (t2 !== -1) {
  console.log('=== EMILY R. SLICE ===');
  console.log(html.substring(t2 - 400, t2 + 800));
}

const t3 = html.indexOf('Mark T.');
if (t3 !== -1) {
  console.log('=== MARK T. SLICE ===');
  console.log(html.substring(t3 - 400, t3 + 800));
}
