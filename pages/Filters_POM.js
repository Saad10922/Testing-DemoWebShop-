class FiltersPage {
    constructor(page) {
        this.page = page;
        this.baseURL = 'https://demowebshop.tricentis.com/';
        this.categoryList = this.page.locator('ul[class="list"]');
        this.priceRangeSelector = this.page.locator('ul.price-range-selector > li').first().locator('a');
        this.priceElements = '.prices .actual-price';
    }

    async goto() {
        await this.page.goto(this.baseURL);
    }

    async selectCategory(catagory) {
        await this.categoryList.locator(`text=${catagory}`).click();
        await this.page.waitForURL();
    }

    async selectPriceRange() {
        await this.priceRangeSelector.click();
        await this.page.waitForURL();
    }

    async getURL() {
        return this.page.url();
    }

    async getPrices() {
        return this.page.$$eval(this.priceElements, elements => elements.map(element => element.textContent.trim()));
    }
}

module.exports = { FiltersPage };
