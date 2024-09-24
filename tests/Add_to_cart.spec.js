const { test, expect } = require('@playwright/test');
const { CartPage } = require('../pages/Cart_POM');

test.describe('Checking The Cart Functionality', () => {

  test('Verify adding multiple products to the cart', async ({ page }) => {
    const cartPage = new CartPage(page);
    await cartPage.gotoCategory();
    await cartPage.selectProduct(40);
    await page.waitForURL(`${cartPage.baseURL}casual-belt`);
    await cartPage.addProductToCart(40);
    await cartPage.clickCategoryList('Apparel & Shoes');
    await page.waitForURL(`${cartPage.baseURL}${cartPage.category}`);
    await cartPage.selectProduct(5);
    await page.waitForURL(`${cartPage.baseURL}50s-rockabilly-polka-dot-top-jr-plus-size`);
    await cartPage.addProductToCart(5);
    await cartPage.gotoCart();
    await cartPage.verifyProductInCart('https://demowebshop.tricentis.com/content/images/thumbs/0000217_casual-golf-belt_80.jpeg');
    await cartPage.verifyProductInCart('https://demowebshop.tricentis.com/content/images/thumbs/0000018_50s-rockabilly-polka-dot-top-jr-plus-size_80.jpg');
  });

  test('Verify the cart by updating the product quantity', async ({ page }) => {
    const cartPage = new CartPage(page);
    await cartPage.gotoCategory();
    await cartPage.selectProduct(40);
    await page.waitForURL(`${cartPage.baseURL}casual-belt`);
    await cartPage.addProductToCart(40);
    await cartPage.updateQuantity(40, '5');
    await cartPage.verifyQuantity(40, '5');
    await cartPage.addProductToCart(40);
    await cartPage.gotoCart();
    await cartPage.verifyCartQuantity('6');
  });

});
