const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker/locale/en');
const { LoginPage } = require('../pages/Login_POM');

test.describe('Login Functionality', () => {
    let email = 'saadq10922@gmail.com';
    let pass = '109220';
    let uemail = faker.internet.email();
    let ipass = faker.internet.password();

    test('With Valid Data', async ({ page }) => {
        const loginPage = new LoginPage(page);
        
        await loginPage.goto();
        await loginPage.enterEmail(email);
        await loginPage.enterPassword(pass);
        await loginPage.checkRememberMe();
        await loginPage.clickLogin();
        await loginPage.waitForHomePage();
    });

    test('Without Email', async ({ page }) => {
        const loginPage = new LoginPage(page);
        
        await loginPage.goto();
        await loginPage.enterPassword(pass);
        await loginPage.checkRememberMe();
        await loginPage.clickLogin();
        await expect(await loginPage.isErrorMessageVisible()).toBe(true);
    });

    test('Without Password', async ({ page }) => {
        const loginPage = new LoginPage(page);
        
        await loginPage.goto();
        await loginPage.enterEmail(email);
        await loginPage.checkRememberMe();
        await loginPage.clickLogin();
        await expect(await loginPage.isErrorMessageVisible()).toBe(true);
    });

    test('Unregistered Email', async ({ page }) => {
        const loginPage = new LoginPage(page);
        
        await loginPage.goto();
        await loginPage.enterEmail(uemail);
        await loginPage.enterPassword(pass);
        await loginPage.checkRememberMe();
        await loginPage.clickLogin();
        await expect(await loginPage.isErrorMessageVisible()).toBe(true);
    });

    test('Invalid Password', async ({ page }) => {
        const loginPage = new LoginPage(page);
        
        await loginPage.goto();
        await loginPage.enterEmail(email);
        await loginPage.enterPassword(ipass);
        await loginPage.checkRememberMe();
        await loginPage.clickLogin();
        await expect(await loginPage.isErrorMessageVisible()).toBe(true);
    });
});
