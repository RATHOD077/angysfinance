const fs = require('fs');
const html = fs.readFileSync('appointment_raw.html', 'utf8');

// Booking form area
console.log('=== BOOKING FORM ===');
const bookIdx = html.indexOf('Book Visit Now');
if (bookIdx !== -1) {
  const slice = html.substring(bookIdx, bookIdx + 5000);
  console.log(slice.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
}

// Why choose us section
console.log('\n=== WHY CHOOSE US ===');
const whyIdx = html.indexOf('Why Choose Us');
if (whyIdx !== -1) {
  const slice = html.substring(whyIdx, whyIdx + 3000);
  console.log(slice.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
}

// FAQ section  
console.log('\n=== FAQ SECTION ===');
const faqIdx = html.indexOf('You Can Find All Answers');
if (faqIdx !== -1) {
  const slice = html.substring(faqIdx, faqIdx + 3000);
  console.log(slice.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
}
