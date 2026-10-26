const fs = require('fs');
const html = fs.readFileSync('home_raw.html', 'utf8');

// ── FULL SERVICES section ─────────────────────────────────────────────────
console.log('═══ ALL 11 SERVICE CARDS TEXT ═══');
const serviceNames = [
  'Employers Liability','Statutory Liability','Public Liability',
  'Business Interruption','Building & Materials','Directors & Officers',
  'Marine Insurance','Motor Vehicle (Commercial)','Home Insurance',
  'Content Insurance','Motor Vehicle (Personal)'
];
serviceNames.forEach(name => {
  const idx = html.indexOf(name);
  if (idx > -1) {
    const slice = html.substring(idx, idx + 400);
    const text = slice.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ');
    console.log('\n  SERVICE:', text.substring(0, 300));
  }
});

// ── ABOUT section full bullets ────────────────────────────────────────────
console.log('\n\n═══ ABOUT BULLETS / FEATURES ═══');
const checkIdx = html.indexOf('Comprehensive Protection');
if (checkIdx > -1) {
  const slice = html.substring(checkIdx, checkIdx + 2000);
  console.log(slice.replace(/<script[\s\S]*?<\/script>/gi,'').replace(/<svg[\s\S]*?<\/svg>/gi,'[CHK]').replace(/<[^>]+>/g,' ').replace(/\s+/g,' '));
}

// ── TESTIMONIALS full content ─────────────────────────────────────────────
console.log('\n\n═══ TESTIMONIALS FULL TEXT ═══');
const t1Idx = html.indexOf('John M.');
if (t1Idx > -1) {
  const slice = html.substring(t1Idx, t1Idx + 3000);
  console.log(slice.replace(/<script[\s\S]*?<\/script>/gi,'').replace(/<svg[\s\S]*?<\/svg>/gi,'[STAR]').replace(/<[^>]+>/g,' ').replace(/\s+/g,' '));
}

// ── WHAT WE PROVIDE section ───────────────────────────────────────────────
console.log('\n\n═══ WHAT WE PROVIDE SECTION ═══');
const whatIdx = html.indexOf('What We Provide');
if (whatIdx > -1) {
  const slice = html.substring(whatIdx, whatIdx + 2000);
  console.log(slice.replace(/<script[\s\S]*?<\/script>/gi,'').replace(/<svg[\s\S]*?<\/svg>/gi,'[SVG]').replace(/<[^>]+>/g,' ').replace(/\s+/g,' '));
}

// ── HEADER TOP BAR ────────────────────────────────────────────────────────
console.log('\n\n═══ TOP BAR / NAV ═══');
const navIdx = html.indexOf('<header');
if (navIdx > -1) {
  const slice = html.substring(navIdx, navIdx + 2000);
  console.log(slice.replace(/<script[\s\S]*?<\/script>/gi,'').replace(/<svg[\s\S]*?<\/svg>/gi,'[SVG]').replace(/<[^>]+>/g,' ').replace(/\s+/g,' '));
}

// ── FOOTER COLUMNS ────────────────────────────────────────────────────────
console.log('\n\n═══ FOOTER ═══');
const fIdx = html.lastIndexOf('Quick Links');
if (fIdx > -1) {
  const slice = html.substring(fIdx, fIdx + 3000);
  console.log(slice.replace(/<script[\s\S]*?<\/script>/gi,'').replace(/<svg[\s\S]*?<\/svg>/gi,'[SVG]').replace(/<[^>]+>/g,' ').replace(/\s+/g,' '));
}
