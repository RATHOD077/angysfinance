const fs = require('fs');
const html = fs.readFileSync('about_page_raw.html', 'utf8');

// Extract all img tags
const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
let match;
const images = [];
while ((match = imgRegex.exec(html)) !== null) {
  const altMatch = match[0].match(/alt=["']([^"']*)["']/i);
  images.push({ 
    src: match[1], 
    alt: altMatch ? altMatch[1] : '' 
  });
}

console.log('=== FOUND IMAGES (' + images.length + ') ===');
images.forEach(img => {
  console.log('SRC:', img.src, '|| ALT:', img.alt);
});

// Extract headings
console.log('\n=== HEADINGS ===');
const hRegex = /<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi;
while ((match = hRegex.exec(html)) !== null) {
  const cleanText = match[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
  if (cleanText) console.log(match[1].toUpperCase() + ':', cleanText);
}

// Extract main text sections
console.log('\n=== TEXT PARAGRAPHS ===');
const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/gi;
while ((match = pRegex.exec(html)) !== null) {
  const cleanText = match[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
  if (cleanText && cleanText.length > 20) console.log('P:', cleanText);
}
