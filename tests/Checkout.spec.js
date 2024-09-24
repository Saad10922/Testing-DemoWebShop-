const { test, expect } = require('@playwright/test');
const { CheckoutPage } = require('../pages/Checkout_POM'); 

const baseURL = "https://demowebshop.tricentis.com";

test.beforeEach(async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.gotoLoginPage();
    await checkoutPage.enterEmail();
    await checkoutPage.enterPassword();
    await checkoutPage.rememberMe().check();
    await checkoutPage.loginButton().click();
    await page.waitForURL(baseURL);
    await page.click('a img[src="https://demowebshop.tricentis.com/content/images/thumbs/0000224_141-inch-laptop_125.png"]');
    await page.waitForURL(`${baseURL}/141-inch-laptop`);
    await page.click('#add-to-cart-button-31');
});

test.describe('Checkout process', () => {
    test('Navigation to Checkout page', async ({ page }) => {
        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.goToCart();
        await checkoutPage.selectCountry().selectOption('57');
        await checkoutPage.selectState().selectOption('0');
        await checkoutPage.fillZipCode('40100');
        await checkoutPage.termsCheckbox().check();
        await checkoutPage.checkoutButton().click();
        await page.waitForURL(`${baseURL}/onepagecheckout`);
    });

    test('Selecting Billing address', async ({ page }) => {
        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.goToCart();
        await checkoutPage.selectCountry().selectOption('57');
        await checkoutPage.selectState().selectOption('0');
        await checkoutPage.fillZipCode('40100');
        await checkoutPage.termsCheckbox().check();
        await checkoutPage.checkoutButton().click();
        await page.waitForURL(`${baseURL}/onepagecheckout`);
        await checkoutPage.billingContinueButton().click();
        await expect(page.locator('text=Select a shipping address from your address book or enter a new address.')).toBeVisible();
    });

    test('Selecting Shipping address', async ({ page }) => {
        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.goToCart();
        await checkoutPage.selectCountry().selectOption('57');
        await checkoutPage.selectState().selectOption('0');
        await checkoutPage.fillZipCode('40100');
        await checkoutPage.termsCheckbox().check();
        await checkoutPage.checkoutButton().click();
        await page.waitForURL(`${baseURL}/onepagecheckout`);
        await checkoutPage.billingContinueButton().click();
        await checkoutPage.shippingContinueButton().click();
        await expect(page.locator('text=Ground (0.00)')).toBeVisible();
    });

    test('Selecting Shipping Method', async ({ page }) => {
        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.goToCart();
        await checkoutPage.selectCountry().selectOption('57');
        await checkoutPage.selectState().selectOption('0');
        await checkoutPage.fillZipCode('40100');
        await checkoutPage.termsCheckbox().check();
        await checkoutPage.checkoutButton().click();
        await page.waitForURL(`${baseURL}/onepagecheckout`);
        await checkoutPage.billingContinueButton().click();
        await checkoutPage.shippingContinueButton().click();
        await checkoutPage.page.check("#shippingoption_0");
        await checkoutPage.shippingMethodContinueButton().click();
        await expect(page.locator('text=Cash On Delivery (COD) (7.00)')).toBeVisible();
    });

    test('Selecting Payment Method', async ({ page }) => {
        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.goToCart();
        await checkoutPage.selectCountry().selectOption('57');
        await checkoutPage.selectState().selectOption('0');
        await checkoutPage.fillZipCode('40100');
        await checkoutPage.termsCheckbox().check();
        await checkoutPage.checkoutButton().click();
        await page.waitForURL(`${baseURL}/onepagecheckout`);
        await checkoutPage.billingContinueButton().click();
        await checkoutPage.shippingContinueButton().click();
        await checkoutPage.page.check("#shippingoption_0");
        await checkoutPage.shippingMethodContinueButton().click();
        await checkoutPage.page.check('#paymentmethod_0');
        await checkoutPage.paymentMethodContinueButton().click();
        await expect(page.locator('text=You will pay by COD')).toBeVisible();
    });

    test('Verifying Payment Method', async ({ page }) => {
        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.goToCart();
        await checkoutPage.selectCountry().selectOption('57');
        await checkoutPage.selectState().selectOption('0');
        await checkoutPage.fillZipCode('40100');
        await checkoutPage.termsCheckbox().check();
        await checkoutPage.checkoutButton().click();
        await page.waitForURL(`${baseURL}/onepagecheckout`);
        await checkoutPage.billingContinueButton().click();
        await checkoutPage.shippingContinueButton().click();
        await checkoutPage.page.check("#shippingoption_0");
        await checkoutPage.shippingMethodContinueButton().click();
        await checkoutPage.page.check('#paymentmethod_0');
        await checkoutPage.paymentMethodContinueButton().click();
        await checkoutPage.verifyPaymentMethod();
    });

    test('Confirming Order', async ({ page }) => {
        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.goToCart();
        await checkoutPage.selectCountry().selectOption('57');
        await checkoutPage.selectState().selectOption('0');
        await checkoutPage.fillZipCode('40100');
        await checkoutPage.termsCheckbox().check();
        await checkoutPage.checkoutButton().click();
        await page.waitForURL(`${baseURL}/onepagecheckout`);
        await checkoutPage.billingContinueButton().click();
        await checkoutPage.shippingContinueButton().click();
        await checkoutPage.page.check("#shippingoption_0");
        await checkoutPage.shippingMethodContinueButton().click();
        await checkoutPage.page.check('#paymentmethod_0');
        await checkoutPage.paymentMethodContinueButton().click();
        await checkoutPage.verifyPaymentMethod();
        await checkoutPage.paymentInfoContinue().click()
        await expect(checkoutPage.confirmationList()).toBeVisible()
        await checkoutPage.confirmOrderButton().click();
        // await expect(page.locator('td.product-picture img[title="Show details for 14.1-inch Laptop"]')).toBeVisible();
        await page.waitForURL(`${baseURL}/checkout/completed/`);
        await expect(page.locator('text=Your order has been successfully processed!')).toBeVisible();
    });
});
