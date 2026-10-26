const fs = require('fs');
const html = fs.readFileSync('home_raw.html', 'utf8');

// ── HERO / SLIDER section ─────────────────────────────────────────────────
console.log('═══ HERO SLIDER ═══');
const heroIdx = html.indexOf('The New Standard in Commercial Insurance');
if (heroIdx > -1) {
  const slice = html.substring(heroIdx - 800, heroIdx + 3000);
  console.log(slice.replace(/<script[\s\S]*?<\/script>/gi,'').replace(/<style[\s\S]*?<\/style>/gi,'').replace(/<svg[\s\S]*?<\/svg>/gi,'[SVG]').replace(/<[^>]+>/g,' ').replace(/\s+/g,' '));
}

// ── SERVICES section ──────────────────────────────────────────────────────
console.log('\n\n═══ SERVICES GRID (all 11 items) ═══');
const srvIdx = html.indexOf('Employers Liability');
if (srvIdx > -1) {
  const slice = html.substring(srvIdx - 300, srvIdx + 4000);
  console.log(slice.replace(/<script[\s\S]*?<\/script>/gi,'').replace(/<style[\s\S]*?<\/style>/gi,'').replace(/<svg[\s\S]*?<\/svg>/gi,'[SVG]').replace(/<[^>]+>/g,' ').replace(/\s+/g,' '));
}
