const { expect } = require('@playwright/test');

exports.ProductPage = class ProductPage {

  constructor(page) {
    this.page = page;
    this.baseURL = 'https://demowebshop.tricentis.com/';
  }

  async gotoHomePage() {
    await this.page.goto(this.baseURL);
  }

  async navigateToCategory(categoryName) {
    const catlist = await this.page.locator('ul[class="list"]');
    await catlist.locator(`text="${categoryName}"`).click();
  }

  async selectProduct(productId, productSlug) {
    await this.page.click(`div[data-productid="${productId}"] .picture`);
    await this.page.waitForURL(`${this.baseURL}${productSlug}`);
  }

  async getAvailability() {
    return await this.page.locator('.stock .value').textContent();
  }

  async verifyAddToCartButton(isVisible) {
    if (isVisible) {
      await expect(this.page.locator('#add-to-cart-button-40')).toBeVisible();
      console.log('Is visible');
    } else {
      await expect(this.page.locator('#add-to-cart-button-40')).not.toBeVisible();
      console.log('Not Visible');
    }
  }
}
