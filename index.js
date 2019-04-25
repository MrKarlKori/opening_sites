const puppeteer = require('puppeteer');

const sites = [
  'http://unsplash.com',
  'http://catalog.onliner.by/notebook',
  'http://youtube.com'
];

let i = 0;

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  
  setInterval(async () => {
    await openSite(sites[i]);
    i = i === 2 ? 0 : i + 1;
  }, 13000);
  
  const openSite = async (site) => {
    const page = await browser.newPage();
    await page.goto(site);
    await page.waitFor(3000);
    await page.close();
  }
})();