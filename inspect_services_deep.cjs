const fs = require('fs');

// Deep inspect specific sections from services page
const html = fs.readFileSync('services_raw.html', 'utf8');

// Service cards section - find service item data
console.log('=== SERVICE SECTION HTML ===');
const servIdx = html.indexOf('What Service We Provide');
if (servIdx !== -1) {
  const slice = html.substring(servIdx, servIdx + 6000);
  // Print cleaned version
  console.log(slice.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/\t/g, '').replace(/\n{3,}/g, '\n\n'));
}

// Skills/progress section
console.log('\n\n=== SKILLS/PROGRESS SECTION ===');
const skillIdx = html.indexOf('Our Amenities');
if (skillIdx !== -1) {
  const slice = html.substring(skillIdx - 500, skillIdx + 3000);
  console.log(slice.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
}

// Consultation CTA section
console.log('\n\n=== CONSULTATION CTA ===');
const ctaIdx = html.indexOf('Get More Consultations');
if (ctaIdx !== -1) {
  const slice = html.substring(ctaIdx - 200, ctaIdx + 1000);
  console.log(slice.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
}
