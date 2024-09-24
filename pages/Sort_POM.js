class ProductListingPage {
    constructor(page) {
      this.page = page;
      this.baseURL = "https://demowebshop.tricentis.com/";
      this.categoryList = 'ul[class="list"]';
      this.productOrderBySelect = '#products-orderby';
      this.productTitleLocator = '.product-title a';
      this.priceLocator = '.prices .actual-price';
    }
  
    async navigateToCategory(category) {
      await this.page.goto(this.baseURL);
      await this.page.locator(this.categoryList).locator(`text="${category}"`).click();
      await this.page.waitForURL(`${this.baseURL}apparel-shoes`);
    }
  
    async selectSorting(optionValue) {
      await this.page.selectOption(this.productOrderBySelect, optionValue);
      await this.page.waitForURL(optionValue);
    }
  
    async getProductTitles() {
      return await this.page.$$eval(this.productTitleLocator, elements => elements.map(element => element.textContent.trim()));
    }
  
    async getProductPrices() {
      return await this.page.$$eval(this.priceLocator, elements => elements.map(element => parseInt(element.textContent.trim())));
    }
  }
  
  module.exports = { ProductListingPage };
  