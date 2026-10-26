const fs = require('fs');
const html = fs.readFileSync('about_page_raw.html', 'utf8');

// Check timeline section
const timelineIdx = html.indexOf('Company Timeline');
if (timelineIdx !== -1) {
  console.log('=== TIMELINE SECTION SNIPPET ===');
  console.log(html.substring(timelineIdx - 200, timelineIdx + 1200).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
}

// Check counter section
const counterIdx = html.indexOf('Happy Patients');
if (counterIdx !== -1) {
  console.log('\n=== COUNTERS ===');
  console.log(html.substring(counterIdx - 200, counterIdx + 400).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
}

// Check Life Experience section
const lifeIdx = html.indexOf('Life Experience');
if (lifeIdx !== -1) {
  console.log('\n=== LIFE EXPERIENCE SECTION ===');
  console.log(html.substring(lifeIdx - 200, lifeIdx + 800).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
}
