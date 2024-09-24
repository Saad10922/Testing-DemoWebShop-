const { expect } = require('@playwright/test');

exports.CartPage = class CartPage {

  constructor(page) {
    this.page = page;
    this.baseURL = 'https://demowebshop.tricentis.com/';
    this.category = 'apparel-shoes';
  }

  async gotoCategory() {
    await this.page.goto(`${this.baseURL}${this.category}`);
  }

  async selectProduct(productId) {
    await this.page.click(`div[data-productid="${productId}"] .picture`);
  }

  async addProductToCart(productId) {
    await this.page.click(`#add-to-cart-button-${productId}`);
  }

  async gotoCart() {
    await this.page.click('#topcartlink .cart-label');
    await this.page.waitForURL(`${this.baseURL}cart`);
  }

  async clickCategoryList(categoryName) {
    const catlist = await this.page.locator('ul[class="list"]');
    await catlist.locator(`text="${categoryName}"`).click();
  }

  async verifyProductInCart(imageSrc) {
    await expect(this.page.locator(`img[src="${imageSrc}"]`)).toBeVisible();
  }

  async updateQuantity(productId, quantity) {
    await this.page.fill(`#addtocart_${productId}_EnteredQuantity`, quantity);
  }

  async verifyQuantity(productId, expectedQuantity) {
    await expect(this.page.locator(`#addtocart_${productId}_EnteredQuantity`)).toHaveValue(expectedQuantity);
  }

  async verifyCartQuantity(expectedQuantity) {
    await expect(this.page.locator('input.qty-input')).toHaveValue(expectedQuantity);
  }
}
