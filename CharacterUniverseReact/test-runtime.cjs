const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const errors = [];
  page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()) });
  page.on('pageerror', error => errors.push(error.message));

  await page.goto('http://localhost:5179/');
  await page.waitForTimeout(1000);

  console.log('Errors:', errors);
  await browser.close();
})();
