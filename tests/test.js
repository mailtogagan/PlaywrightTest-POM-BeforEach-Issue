const { test, expect } = require('@playwright/test');
const { PlaywrightDevPage } = require('../pages/playwright-dev-page');

test.describe('two tests', () => {
  let playwrightDev = new PlaywrightDevPage();
  // test.beforeAll(async ({ browser }) => {
  //     const page = await browser.newPage();
  //     playwrightDev = new PlaywrightDevPage(page);
  // });
  test.beforeEach(async ({ browser }) => {
    const page = await browser.newPage();
    playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.goto();
  });

  test('Get Started table of contents', async () => {
    // const playwrightDev = new PlaywrightDevPage(page);
    // await playwrightDev.goto();
    await playwrightDev.getStarted();
    expect(await playwrightDev.toc()).toEqual([
      'Installation',
      'Usage',
      'First script',
      'Record scripts',
      'TypeScript support',
      'System requirements',
      'Release notes'
    ]);
  });

  test('Core Concepts table of contents', async () => {
    // const playwrightDev = new PlaywrightDevPage(page);
    // await playwrightDev.goto();
    await playwrightDev.coreConcepts();
    expect(await playwrightDev.toc()).toEqual([
      'Browser',
      'Browser contexts',
      'Pages and frames',
      'Selectors',
      'Auto-waiting',
      'Execution contexts: Playwright and Browser',
      'Evaluation Argument'
    ]);
  });
});
