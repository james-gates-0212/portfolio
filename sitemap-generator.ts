const { createWriteStream } = require('fs');
const { SitemapStream } = require('sitemap');

// Creates a sitemap object given the input configuration with URLs
const hostname = 'https://james-gates-portfolio.vercel.app';
const sitemap = new SitemapStream({ hostname });

const writeStream = createWriteStream('./public/sitemap.xml');
sitemap.pipe(writeStream);

const prefix = '';
const urls = ['/', '/about', '/experience'];
const date = new Date().toISOString();

urls.forEach((url) => {
  console.log(hostname + prefix + url);
  sitemap.write({ url: prefix + url, lastmod: date, changefreq: 'daily', priority: 0.7 });
});
sitemap.end();
