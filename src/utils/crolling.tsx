const puppeteer = require('puppeteer');
const fs = require('fs');

export const crolling = async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('https://github.com/Esoolgnah/Frontend-Interview-Questions', {
    waitUntil: 'networkidle2',
  });
  const html = await page.content();
  fs.writeFileSync('feQuiz.html', html);
  await browser.close();
};

crolling();
