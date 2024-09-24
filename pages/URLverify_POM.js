exports.URLVerification = class URLVerification {
    constructor(page) {
        this.page = page;
        this.baseURL = "https://demowebshop.tricentis.com/";
        this.searchButton = 'input[value="Search"]';
    }

    async goto() {
        await this.page.goto(this.baseURL);
    }

    async SearchAProduct(item) {
        await this.page.fill('#small-searchterms', item);
    }

    async clickSearchButton() {
        await this.page.locator(this.searchButton).click(); 
    }
};
