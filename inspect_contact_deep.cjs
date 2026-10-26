const fs = require('fs');
const html = fs.readFileSync('contact_raw.html', 'utf8');

// Contact info cards
console.log('=== CONTACT INFO SECTION ===');
const officeIdx = html.indexOf('Office Address');
if (officeIdx !== -1) {
  const slice = html.substring(officeIdx - 200, officeIdx + 3000);
  console.log(slice.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
}

// Get in touch form
console.log('\n=== GET IN TOUCH FORM ===');
const touchIdx = html.indexOf('Get in Touch with Us');
if (touchIdx !== -1) {
  const slice = html.substring(touchIdx, touchIdx + 5000);
  console.log(slice.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
}
