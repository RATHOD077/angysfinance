const fs = require('fs');
const html = fs.readFileSync('home_raw.html', 'utf8');

// ── WHAT WE PROVIDE — Commercial & Domestic bullet lists ──────────────────
console.log('═══ WHAT WE PROVIDE — FULL LIST ═══');
const wwpIdx = html.indexOf('Commercial Insurance');
if (wwpIdx > -1) {
  const slice = html.substring(wwpIdx, wwpIdx + 3000);
  console.log(slice.replace(/<script[\s\S]*?<\/script>/gi,'').replace(/<svg[\s\S]*?<\/svg>/gi,'[SVG]').replace(/<[^>]+>/g,' ').replace(/\s+/g,' '));
}

// ── FULL FOOTER columns content ───────────────────────────────────────────
console.log('\n\n═══ FOOTER FULL ═══');
const footIdx = html.indexOf('Work Hours');
if (footIdx > -1) {
  const slice = html.substring(footIdx - 1000, footIdx + 2000);
  console.log(slice.replace(/<script[\s\S]*?<\/script>/gi,'').replace(/<svg[\s\S]*?<\/svg>/gi,'[SVG]').replace(/<[^>]+>/g,' ').replace(/\s+/g,' '));
}

// ── HEADER full content ───────────────────────────────────────────────────
console.log('\n\n═══ HEADER / TOP BAR ═══');
// Look for the dispatch bar / contact info in header area
const h1 = html.indexOf('+64');
if (h1 > -1) {
  console.log(html.substring(h1 - 200, h1 + 800).replace(/<[^>]+>/g,' ').replace(/\s+/g,' '));
}

// ── UNDERWRITERS / PARTNERS LOGOS ─────────────────────────────────────────
console.log('\n\n═══ UNDERWRITERS / PARTNER LOGOS ═══');
const logoScrollIdx = html.indexOf('wpr-logo-carousel');
if (logoScrollIdx > -1) {
  const slice = html.substring(logoScrollIdx, logoScrollIdx + 3000);
  console.log(slice.replace(/<script[\s\S]*?<\/script>/gi,'').replace(/<svg[\s\S]*?<\/svg>/gi,'[SVG]').replace(/<[^>]+>/g,' ').replace(/\s+/g,' '));
} else {
  console.log('No logo carousel found - looking for partner images...');
  // search for any partner/logo images not already found
  const allImgs = [];
  const rx = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  let m;
  while ((m = rx.exec(html)) !== null) {
    allImgs.push(m[1]);
  }
  console.log('All img srcs:', allImgs.join('\n'));
}

// ── VIDEO SECTION ──────────────────────────────────────────────────────────
console.log('\n\n═══ VIDEO PRESENTATION SECTION ═══');
const vidIdx = html.indexOf('Video Presentation');
if (vidIdx > -1) {
  const slice = html.substring(vidIdx - 100, vidIdx + 1500);
  console.log(slice.replace(/<script[\s\S]*?<\/script>/gi,'').replace(/<svg[\s\S]*?<\/svg>/gi,'[SVG]').replace(/<[^>]+>/g,' ').replace(/\s+/g,' '));
}

// ── EMERGENCY CALL section ─────────────────────────────────────────────────
console.log('\n\n═══ EMERGENCY CALL SECTION ═══');
const emIdx = html.indexOf('Emergency Call');
if (emIdx > -1) {
  const slice = html.substring(emIdx - 100, emIdx + 1000);
  console.log(slice.replace(/<script[\s\S]*?<\/script>/gi,'').replace(/<svg[\s\S]*?<\/svg>/gi,'[SVG]').replace(/<[^>]+>/g,' ').replace(/\s+/g,' '));
}
