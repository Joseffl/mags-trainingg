// generate-sitemap.js

import fs from 'fs';
import path from 'path';

const inputFile = path.resolve('src/data/constants.js');
const outputFile = path.resolve('public/sitemap.xml');
const baseUrl = 'https://magsengineeringlimited.com'; 
const today = new Date().toISOString().split('T')[0]; // e.g., 2025-05-17
// change this to your actual domain

// Read constants.js as raw text
const raw = fs.readFileSync(inputFile, 'utf-8');

// Extract all course titles
const matches = [...raw.matchAll(/title:\s*"([^"]+)"/g)];

const urls = matches.map(match => {
  const title = match[1];
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '') // remove punctuation
    .replace(/\s+/g, '-')        // spaces to dashes
    .trim();
  return {
    loc: `${baseUrl}/courses/${slug}`,
    priority: '0.6',
  };
});

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ loc, priority }) => `
  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

// Write to sitemap.xml
fs.writeFileSync(outputFile, sitemap);

console.log(`✅ Sitemap generated with ${urls.length} entries at /public/sitemap.xml`);
