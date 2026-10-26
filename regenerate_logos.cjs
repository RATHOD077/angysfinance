const fs = require('fs');
const path = require('path');

const logos = [
  {
    name: 'vero.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 48" width="160" height="48">
      <circle cx="24" cy="24" r="14" fill="#E31837"/>
      <path d="M17 18 L24 30 L31 18" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="46" y="31" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-weight="900" font-size="22" fill="#0f172a" letter-spacing="-0.5">vero</text>
    </svg>`
  },
  {
    name: 'nzi.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 48" width="160" height="48">
      <path d="M14 14 L24 34 L34 14" stroke="#0072CE" stroke-width="4.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="46" y="32" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-weight="900" font-size="24" fill="#0072CE" letter-spacing="1">NZI</text>
    </svg>`
  },
  {
    name: 'qbe.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 48" width="160" height="48">
      <circle cx="22" cy="24" r="13" fill="#009CDE"/>
      <path d="M22 17 C26 17 29 20 29 24 C29 28 26 31 22 31 C18 31 15 28 15 24 C15 20 18 17 22 17 Z M26 28 L30 32" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round"/>
      <text x="44" y="32" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-weight="900" font-size="23" fill="#0f172a" letter-spacing="1">QBE</text>
    </svg>`
  },
  {
    name: 'chubb.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 48" width="170" height="48">
      <rect x="12" y="14" width="20" height="20" rx="3" fill="#0f172a"/>
      <path d="M22 18 L22 30 M16 24 L28 24" stroke="#026EC3" stroke-width="3" stroke-linecap="round"/>
      <text x="40" y="31" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-weight="900" font-size="21" fill="#0f172a" letter-spacing="0.5">CHUBB</text>
    </svg>`
  },
  {
    name: 'allianz.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 48" width="170" height="48">
      <circle cx="22" cy="24" r="13" stroke="#003781" stroke-width="2.5" fill="#003781"/>
      <path d="M18 28 L20 20 L23 28 M23 20 L26 28" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" fill="none"/>
      <text x="42" y="31" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-weight="800" font-size="20" fill="#003781" letter-spacing="-0.3">Allianz</text>
    </svg>`
  },
  {
    name: 'delta.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 48" width="160" height="48">
      <polygon points="22,13 33,33 11,33" stroke="#00A887" stroke-width="3" fill="none" stroke-linejoin="round"/>
      <text x="42" y="31" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-weight="900" font-size="20" fill="#0f172a" letter-spacing="1">DELTA</text>
    </svg>`
  },
  {
    name: 'aia.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 48" width="160" height="48">
      <circle cx="22" cy="24" r="13" fill="#D31145"/>
      <text x="14" y="29" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-weight="900" font-size="12" fill="#ffffff">AIA</text>
      <text x="42" y="31" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-weight="900" font-size="22" fill="#D31145" letter-spacing="0.5">AIA NZ</text>
    </svg>`
  },
  {
    name: 'asteron.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 48" width="170" height="48">
      <path d="M14 24 L22 14 L30 24 L22 34 Z" fill="#FF8200"/>
      <text x="38" y="31" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-weight="800" font-size="19" fill="#0f172a" letter-spacing="0.5">ASTERON</text>
    </svg>`
  },
  {
    name: 'anz.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 48" width="160" height="48">
      <path d="M12 33 L22 15 L32 33" stroke="#007DBA" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <line x1="16" y1="28" x2="28" y2="28" stroke="#007DBA" stroke-width="2.5"/>
      <text x="40" y="32" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-weight="900" font-size="23" fill="#007DBA" letter-spacing="1">ANZ</text>
    </svg>`
  },
  {
    name: 'asb.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 48" width="160" height="48">
      <rect x="12" y="14" width="22" height="20" rx="3" fill="#FFCC00"/>
      <text x="16" y="29" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-weight="900" font-size="13" fill="#0f172a">NZ</text>
      <text x="42" y="32" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-weight="900" font-size="23" fill="#0f172a" letter-spacing="1">ASB</text>
    </svg>`
  },
  {
    name: 'bnz.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 48" width="160" height="48">
      <circle cx="22" cy="24" r="13" fill="#002D62"/>
      <path d="M18 19 L26 29 M18 29 L26 19" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round"/>
      <text x="42" y="32" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-weight="900" font-size="23" fill="#002D62" letter-spacing="1">BNZ</text>
    </svg>`
  },
  {
    name: 'westpac.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 48" width="170" height="48">
      <path d="M12 18 L17 31 L22 21 L27 31 L32 18" stroke="#DA1710" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="40" y="31" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-weight="800" font-size="18" fill="#DA1710" letter-spacing="-0.3">westpac</text>
    </svg>`
  }
];

const outDir = path.join(__dirname, 'public', 'logos');
logos.forEach(l => {
  fs.writeFileSync(path.join(outDir, l.name), l.svg.trim());
  console.log('Regenerated:', l.name);
});
