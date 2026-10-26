const fs = require('fs');
const html = fs.readFileSync('blog_raw.html', 'utf8');

// Extract all images
const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
let match;
const images = [];
while ((match = imgRegex.exec(html)) !== null) {
  const altMatch = match[0].match(/alt=["']([^"']*)["']/i);
  const src = match[1];
  if (!src.includes('data:') && src.trim()) {
    images.push({ src, alt: altMatch ? altMatch[1] : '' });
  }
}
console.log('=== BLOG IMAGES ===');
images.forEach(img => console.log(' ', img.src, '| alt:', img.alt));

// Extract headings
console.log('\n=== BLOG HEADINGS ===');
const hRegex = /<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi;
while ((match = hRegex.exec(html)) !== null) {
  const cleanText = match[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
  if (cleanText && cleanText.length > 2 && cleanText.length < 200) {
    console.log(`  ${match[1].toUpperCase()}: ${cleanText}`);
  }
}

// Blog cards section
console.log('\n=== BLOG CARDS SECTION ===');
const blogIdx = html.indexOf('Recent News');
const blogIdx2 = html.indexOf('Blog Post');
const blogIdx3 = html.indexOf('Latest Post');
const startIdx = Math.max(0, Math.min(...[blogIdx, blogIdx2, blogIdx3].filter(x => x !== -1)));
if (startIdx > 0) {
  console.log(html.substring(startIdx, startIdx + 4000).replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
}

// any recent post section
const postIdx = html.indexOf('wpr-blog-post');
if (postIdx !== -1) {
  console.log('\n=== WPR BLOG POST ===');
  const slice = html.substring(postIdx, postIdx + 3000);
  console.log(slice.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/\s+/g, ' '));
}
