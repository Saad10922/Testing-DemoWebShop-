const {expect}=require('@playwright/test')
class SearchPage {
    constructor(page) {
      this.page = page;
      this.emailInput = '#Email';
      this.passwordInput = '#Password';
      this.rememberMeCheckbox = '#RememberMe';
      this.loginButton = 'input[value="Log in"]';
      this.searchBar = '#small-searchterms';
      this.searchButton = 'input[value="Search"]';
      this.baseURL = "https://demowebshop.tricentis.com/";
    }
  
    async login(email, password) {
      await this.page.goto(`${this.baseURL}login`);
      await this.page.fill(this.emailInput, email);
      await this.page.fill(this.passwordInput, password);
      await this.page.locator(this.rememberMeCheckbox).check();
      await this.page.click(this.loginButton);
      await this.page.waitForURL(this.baseURL);
    }
  
    async searchItem(item) {
      await this.page.fill(this.searchBar, item);
      await this.page.click(this.searchButton);
    }
  
    async expectVisibleText(text) {
      await expect(this.page.locator(`text="${text}"`)).toBeVisible();
    }
  
    async handleEmptySearchAlert() {
      this.page.on('dialog', async (dialog) => {
        expect(dialog.message()).toContain("Please enter some search keyword");
        await dialog.accept();
      });
      await this.page.click(this.searchButton);
    }
  
    async verifySearchSuggestions() {
      await expect(this.page.locator('span.ui-helper-hidden-accessible')).toBeVisible();
    }
  }
  
  module.exports = { SearchPage };
  