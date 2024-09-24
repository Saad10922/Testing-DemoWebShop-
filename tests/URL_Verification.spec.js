const { URLVerification } = require('../pages/URLverify_POM');
const { test, expect } = require('@playwright/test');

test.describe('URL_Verification', () => {
    const baseURL = "https://demowebshop.tricentis.com/";
    let product = 'phone';

    test('Via Search', async ({ page }) => {
        const urlVerify = new URLVerification(page); 
        await urlVerify.goto();
        await urlVerify.SearchAProduct(product);
        await urlVerify.clickSearchButton();
        await page.waitForURL(`${baseURL}search?q=${product}`);
       
        const pageUrl = await page.url();
        console.log(pageUrl);
        
        
        expect(pageUrl).toContain(product); 
    });

    test('Via Selecting Category', async ({ page }) => {
        await page.goto(baseURL);
        let catlist = await page.locator('ul[class="list"]');
        let category = "Apparel & Shoes";
        await catlist.locator(`text=${category}`).click();
        await page.waitForURL(`${baseURL}apparel-shoes`); 
        
        let url = await page.url();
        let rurl = url.toLowerCase().replace(/&/g, '-').replace(/\s+/g, '');
        await expect(page.url()).toContain(rurl); 
    });
});
