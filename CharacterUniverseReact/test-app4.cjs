const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  page.on('console', msg => console.log(msg.text()));
  page.on('pageerror', err => console.log(err));

  await page.goto('http://localhost:5173/');
  await page.waitForTimeout(3000);
  console.log(await page.content());
  await browser.close();
})();
