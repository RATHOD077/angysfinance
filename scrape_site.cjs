const fs = require('fs');

async function scrapePage(url) {
  try {
    const res = await fetch(url);
    const html = await res.text();
    return html;
  } catch (e) {
    console.error('Error fetching', url, e.message);
    return null;
  }
}

async function main() {
  const homeHtml = await scrapePage('https://angysfinance.co.nz/');
  if (!homeHtml) return;

  // Extract menu links
  const menuMatches = [...homeHtml.matchAll(/<li[^>]*class=["'][^"']*menu-item[^"']*["'][^>]*>[\s\S]*?<a[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)];
  console.log('=== MENU ITEMS ON ANGYSFINANCE.CO.NZ ===');
  const menu = [];
  for (const m of menuMatches) {
    const href = m[1];
    const text = m[2].replace(/<[^>]+>/g, '').trim();
    if (text) {
      menu.push({ text, href });
      console.log(`${text} -> ${href}`);
    }
  }

  // Also check all pages
  const pages = [
    'https://angysfinance.co.nz/',
    'https://angysfinance.co.nz/about/',
    'https://angysfinance.co.nz/services/',
    'https://angysfinance.co.nz/appointment/',
    'https://angysfinance.co.nz/contact/'
  ];

  const results = {};
  for (const p of pages) {
    console.log('\n--- Scraping:', p);
    const html = await scrapePage(p);
    if (!html) continue;
    
    // Headings
    const headings = [...html.matchAll(/<(h[1-4])[^>]*>([\s\S]*?)<\/\1>/gi)].map(h => ({
      level: h[1],
      text: h[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
    })).filter(h => h.text.length > 0);

    // Images
    const imgs = [...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)].map(i => i[1]);

    // Text content blocks
    const pTexts = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].map(p => p[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()).filter(t => t.length > 20);

    results[p] = {
      headings,
      imgs: [...new Set(imgs)],
      sampleParagraphs: pTexts.slice(0, 15)
    };
  }

  fs.writeFileSync('angys_full_scrape.json', JSON.stringify(results, null, 2), 'utf8');
  console.log('\nSaved full scrape to angys_full_scrape.json');
}

main();
