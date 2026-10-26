const fs = require('fs');
const html = fs.readFileSync('home_raw.html', 'utf8');

// ── 1. ALL IMAGES ──────────────────────────────────────────────────────────
const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
let match;
const images = [];
while ((match = imgRegex.exec(html)) !== null) {
  const altM  = match[0].match(/alt=["']([^"']*)["']/i);
  const wM    = match[0].match(/width=["']?(\d+)["']?/i);
  const hM    = match[0].match(/height=["']?(\d+)["']?/i);
  const src   = match[1];
  if (!src.includes('data:') && src.trim() && !src.includes('placeholder')) {
    images.push({ src, alt: altM ? altM[1] : '', w: wM ? wM[1] : '', h: hM ? hM[1] : '' });
  }
}
console.log('╔══════════════════════════════════════════════════════════════════╗');
console.log('║  SECTION 1 — ALL IMAGES  (' + images.length + ')                                   ║');
console.log('╚══════════════════════════════════════════════════════════════════╝');
images.forEach((img, i) => {
  const dim = img.w ? `[${img.w}×${img.h}]` : '';
  console.log(`  [${i+1}] ${img.src}\n       dim:${dim || 'n/a'}  alt:"${img.alt}"`);
});

// ── 2. ALL HEADINGS ────────────────────────────────────────────────────────
console.log('\n╔══════════════════════════════════════════════════════════════════╗');
console.log('║  SECTION 2 — ALL HEADINGS                                        ║');
console.log('╚══════════════════════════════════════════════════════════════════╝');
const hRx = /<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi;
while ((match = hRx.exec(html)) !== null) {
  const txt = match[2].replace(/<[^>]+>/g,'').trim().replace(/\s+/g,' ');
  if (txt && txt.length > 1 && txt.length < 250) console.log(`  ${match[1].toUpperCase()}: ${txt}`);
}

// ── 3. SECTION LABELS (elementor widget headings) ─────────────────────────
console.log('\n╔══════════════════════════════════════════════════════════════════╗');
console.log('║  SECTION 3 — SLIDER / HERO CONTENT                              ║');
console.log('╚══════════════════════════════════════════════════════════════════╝');
const sliderIdx = html.indexOf('wpr-slides-wrapper');
if (sliderIdx !== -1) {
  const slice = html.substring(sliderIdx, sliderIdx + 8000);
  console.log(slice.replace(/<script[\s\S]*?<\/script>/gi,'').replace(/<style[\s\S]*?<\/style>/gi,'').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').substring(0, 3000));
}
