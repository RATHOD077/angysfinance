const fs = require('fs');
const path = require('path');

function analyzeHtml(pageName) {
  const html = fs.readFileSync(`${pageName}_raw.html`, 'utf8');
  
  console.log(`\n${'='.repeat(70)}`);
  console.log(`PAGE: ${pageName.toUpperCase()} (${html.length} bytes)`);
  console.log(`${'='.repeat(70)}`);

  // Extract images
  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  let match;
  const images = [];
  while ((match = imgRegex.exec(html)) !== null) {
    const altMatch = match[0].match(/alt=["']([^"']*)["']/i);
    const widthMatch = match[0].match(/width=["']?(\d+)["']?/i);
    const heightMatch = match[0].match(/height=["']?(\d+)["']?/i);
    const src = match[1];
    if (!src.includes('data:') && src.trim()) {
      images.push({ 
        src, 
        alt: altMatch ? altMatch[1] : '',
        w: widthMatch ? widthMatch[1] : '',
        h: heightMatch ? heightMatch[1] : ''
      });
    }
  }
  console.log(`\n--- IMAGES (${images.length}) ---`);
  images.forEach(img => {
    const dim = img.w ? ` [${img.w}x${img.h}]` : '';
    console.log(`  ${img.src}${dim} | alt: "${img.alt}"`);
  });

  // Extract headings
  console.log(`\n--- HEADINGS ---`);
  const hRegex = /<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi;
  while ((match = hRegex.exec(html)) !== null) {
    const cleanText = match[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
    if (cleanText && cleanText.length > 2 && cleanText.length < 200) {
      console.log(`  ${match[1].toUpperCase()}: ${cleanText}`);
    }
  }

  // Extract significant text blocks (paragraphs / div text)
  console.log(`\n--- TEXT CONTENT ---`);
  const pRegex = /<(?:p|li|span)[^>]*class="[^"]*(?:text|desc|content|excerpt|entry)[^"]*"[^>]*>([\s\S]*?)<\/(?:p|li|span)>/gi;
  const seenTexts = new Set();
  while ((match = pRegex.exec(html)) !== null) {
    const cleanText = match[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
    if (cleanText && cleanText.length > 30 && !seenTexts.has(cleanText)) {
      seenTexts.add(cleanText);
      console.log(`  P: ${cleanText.substring(0, 200)}`);
    }
  }

  // Also get regular p tags
  const p2Regex = /<p(?:\s[^>]*)?>([^<]{40,}(?:<[^>]+>[^<]*)*?)<\/p>/gi;
  while ((match = p2Regex.exec(html)) !== null) {
    const cleanText = match[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
    if (cleanText && cleanText.length > 40 && !seenTexts.has(cleanText)) {
      seenTexts.add(cleanText);
      console.log(`  P: ${cleanText.substring(0, 250)}`);
    }
  }

  // Blog-specific: extract post titles and links
  if (pageName === 'blog') {
    console.log(`\n--- BLOG POSTS ---`);
    const postTitleRegex = /<h[23][^>]*class="[^"]*(?:entry-title|post-title|card-title)[^"]*"[^>]*>([\s\S]*?)<\/h[23]>/gi;
    while ((match = postTitleRegex.exec(html)) !== null) {
      const cleanText = match[1].replace(/<[^>]+>/g, '').trim();
      if (cleanText) console.log(`  TITLE: ${cleanText}`);
    }
  }
}

['services', 'appointment', 'contact'].forEach(analyzeHtml);
