const { test, expect } = require('@playwright/test');
const { ProductPage } = require('../pages/Avaliability_POM');

test.describe('Availability', () => {

  test('in stock', async ({ page }) => {
    const productPage = new ProductPage(page);
    await productPage.gotoHomePage();
    await productPage.navigateToCategory('Apparel & Shoes');
    await productPage.selectProduct(40, 'casual-belt');

    const availability = await productPage.getAvailability();
    const isInStock = availability === 'In stock';
    
    await productPage.verifyAddToCartButton(isInStock);
  });

  test('out of stock', async ({ page }) => {
    const productPage = new ProductPage(page);
    await productPage.gotoHomePage();
    await productPage.navigateToCategory('Apparel & Shoes');
    await productPage.selectProduct(24, 'custom-t-shirt');

    const availability = await productPage.getAvailability();
    const isInStock = availability === 'In stock';

    await productPage.verifyAddToCartButton(isInStock);
  });
});
