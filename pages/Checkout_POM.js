const { expect } = require('@playwright/test');

exports.CheckoutPage = class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.baseURL = 'https://demowebshop.tricentis.com/';
        this.email = 'saadq10922@gmail.com';
        this.pass = '109220';
    }

    async gotoLoginPage() {
        await this.page.goto(`${this.baseURL}/login`);
    }

    async enterEmail() {
        await this.page.fill('#Email', this.email);
    }

    async enterPassword() {
        await this.page.fill('#Password', this.pass);
    }

    rememberMe() {
        return this.page.locator('#RememberMe');
    }

    loginButton() {
        return this.page.locator('input[value="Log in"]');
    }

    async goToCart() {
        await this.page.goto(`${this.baseURL}/cart`);
    }

    selectCountry() {
        return this.page.locator('select#CountryId');
    }

    selectState() {
        return this.page.locator('select#StateProvinceId');
    }

    fillZipCode(zip) {
        return this.page.fill('#ZipPostalCode', zip);
    }

    termsCheckbox() {
        return this.page.locator('#termsofservice');
    }

    checkoutButton() {
        return this.page.locator('#checkout');
    }

    billingContinueButton() {
        return this.page.locator('div#billing-buttons-container input[title="Continue"]');
    }

    shippingContinueButton() {
        return this.page.locator('div#shipping-buttons-container input[title="Continue"]');
    }

    shippingMethodContinueButton() {
        return this.page.locator('div#shipping-method-buttons-container input[value="Continue"]');
    }

    paymentMethodContinueButton() {
        return this.page.locator('div#payment-method-buttons-container input[value="Continue"]');
    }

    confirmOrderButton() {
        return this.page.locator('div#confirm-order-buttons-container input[value="Confirm"]');
    }

    async verifySuccessMessage() {
        await expect(this.page.locator('text=Your order has been successfully processed!')).toBeVisible();
    }

    async verifyPaymentMethod() {
        let displayed = await this.page.locator('form#co-payment-info-form p').textContent();
        let expected = "You will pay by COD";
        await expect(displayed).toEqual(expected);
    }
    paymentInfoContinue()
    {
        return this.page.locator('input.payment-info-next-step-button')
    } 
    confirmationList()
    {
        return this.page.locator('tr.cart-item-row td.product-picture')
    }
};
