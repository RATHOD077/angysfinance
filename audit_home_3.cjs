const fs = require('fs');
const html = fs.readFileSync('home_raw.html', 'utf8');

// ── ABOUT section ─────────────────────────────────────────────────────────
console.log('═══ ABOUT SECTION ═══');
const aboutIdx = html.indexOf("We Secure Your Future with Careful Precision");
if (aboutIdx > -1) {
  const slice = html.substring(aboutIdx - 200, aboutIdx + 3000);
  console.log(slice.replace(/<script[\s\S]*?<\/script>/gi,'').replace(/<[^>]+>/g,' ').replace(/\s+/g,' '));
}

// ── WHY CHOOSE US ─────────────────────────────────────────────────────────
console.log('\n\n═══ WHY CHOOSE US ═══');
const whyIdx = html.indexOf("Reliable Protection, Personalized Support.");
if (whyIdx > -1) {
  const slice = html.substring(whyIdx - 100, whyIdx + 4000);
  console.log(slice.replace(/<script[\s\S]*?<\/script>/gi,'').replace(/<svg[\s\S]*?<\/svg>/gi,'[SVG]').replace(/<[^>]+>/g,' ').replace(/\s+/g,' '));
}

// ── TESTIMONIALS ──────────────────────────────────────────────────────────
console.log('\n\n═══ TESTIMONIALS / STORIES ═══');
const testIdx = html.indexOf("Stories From Our Clients");
if (testIdx > -1) {
  const slice = html.substring(testIdx - 100, testIdx + 4000);
  console.log(slice.replace(/<script[\s\S]*?<\/script>/gi,'').replace(/<[^>]+>/g,' ').replace(/\s+/g,' '));
}

// ── 24/7 CTA BANNER ───────────────────────────────────────────────────────
console.log('\n\n═══ 24/7 CTA BANNER ═══');
const ctaIdx = html.indexOf("We Are Here for Insurance Consultations");
if (ctaIdx > -1) {
  const slice = html.substring(ctaIdx - 100, ctaIdx + 2000);
  console.log(slice.replace(/<script[\s\S]*?<\/script>/gi,'').replace(/<[^>]+>/g,' ').replace(/\s+/g,' '));
}

// ── COUNTER STATS section ─────────────────────────────────────────────────
console.log('\n\n═══ COUNTER / STATS SECTION ═══');
const counterIdx = html.indexOf('elementor-counter');
if (counterIdx > -1) {
  const slice = html.substring(counterIdx - 100, counterIdx + 2000);
  console.log(slice.replace(/<script[\s\S]*?<\/script>/gi,'').replace(/<[^>]+>/g,' ').replace(/\s+/g,' '));
}

// ── FOOTER TEXT ───────────────────────────────────────────────────────────
console.log('\n\n═══ FOOTER CONTENT ═══');
const footerIdx = html.indexOf('<footer');
if (footerIdx > -1) {
  const slice = html.substring(footerIdx, footerIdx + 5000);
  console.log(slice.replace(/<script[\s\S]*?<\/script>/gi,'').replace(/<svg[\s\S]*?<\/svg>/gi,'[SVG]').replace(/<[^>]+>/g,' ').replace(/\s+/g,' '));
}
