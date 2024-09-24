class LoginPage {
    constructor(page) {
        this.page = page;
        this.baseURL = 'https://demowebshop.tricentis.com';
        this.emailInput = '#Email';
        this.passwordInput = '#Password';
        this.rememberMeCheckbox = '#RememberMe';
        this.loginButton = 'input[value="Log in"]';
        this.errorMessage = 'text=Login was unsuccessful. Please correct the errors and try again.';
    }

    async goto() {
        await this.page.goto(`${this.baseURL}/login`);
    }

    async enterEmail(email) {
        await this.page.fill(this.emailInput, email);
    }

    async enterPassword(password) {
        await this.page.fill(this.passwordInput, password);
    }

    async checkRememberMe() {
        await this.page.locator(this.rememberMeCheckbox).check();
    }

    async clickLogin() {
        await this.page.click(this.loginButton);
    }

    async isErrorMessageVisible() {
        return this.page.locator(this.errorMessage).isVisible();
    }

    async waitForHomePage() {
        await this.page.waitForURL(this.baseURL);
    }
}

module.exports = { LoginPage };
