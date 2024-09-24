const { test, expect } = require('@playwright/test');
const { SearchPage } = require('../pages/Search_POM');

test.describe('Functionality of Search Box', () => { 
  let email = 'saadq10922@gmail.com';
  let pass = '109220';
  let vitem = 'Phone cover';
  let iitem = '123xyz';
  let sitem = 'phone';

  test('Searching With Valid Search Item', async ({ page }) => {
    const searchPage = new SearchPage(page);

    await searchPage.login(email, pass);
    await searchPage.searchItem(vitem);
    await searchPage.expectVisibleText('Phone Cover');
  });

  test('Searching With Invalid Search Item', async ({ page }) => {
    const searchPage = new SearchPage(page);

    await searchPage.login(email, pass);
    await searchPage.searchItem(iitem);
    await searchPage.expectVisibleText('No products were found that matched your criteria.');
  });

  test('Searching With Empty Search Bar', async ({ page }) => {
    const searchPage = new SearchPage(page);

    await searchPage.login(email, pass);
    await searchPage.handleEmptySearchAlert();
  });

  test('Verifying Search Suggestions', async ({ page }) => {
    const searchPage = new SearchPage(page);

    await searchPage.login(email, pass);
    await searchPage.searchItem(sitem);
    await searchPage.verifySearchSuggestions();
  });
});
