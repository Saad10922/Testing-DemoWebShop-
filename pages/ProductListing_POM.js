class ProductListingPage {
    constructor(page) {
        this.page = page;
        this.baseURL = 'https://demowebshop.tricentis.com';
        this.productBox = this.page.locator('div[data-productid="2"]');
        this.productImage = 'img';
        this.productName = 'a:last-of-type';
        this.productRating = '.rating';
        this.productPrice = 'span';
        this.addToCartButton = 'input[value="Add to cart"]';
        this.categoryList = this.page.locator('ul[class="list"]');
        this.productGridItems = '.product-grid .item-box';
        this.pageSizeSelector = 'select#products-pagesize';
    }

    async gotoHomePage() {
        await this.page.goto(this.baseURL);
    }

    async getProductBox() {
        return this.productBox;
    }

    async getCategoryPage(category) {
        await this.categoryList.locator(`text="${category}"`).click();
        await this.page.waitForURL(`${this.baseURL}/${category.replace(' & ', '-').toLowerCase()}`);
    }

    async getExpectedCount() {
        const value = await this.page.locator(this.pageSizeSelector).inputValue();
        return parseInt(value.match(/\d+/)[0], 10);
    }

    async getDisplayedCount() {
        return this.page.locator(this.productGridItems).count();
    }
}

module.exports = { ProductListingPage };
