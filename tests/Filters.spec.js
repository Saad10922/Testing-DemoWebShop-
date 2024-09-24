const { test, expect } = require('@playwright/test');
const { FiltersPage } = require('../pages/Filters_POM');

test.describe('Verifying Filters', () => {
    test('Price Range', async ({ page }) => {
        const filterPage = new FiltersPage(page);

        await filterPage.goto();

        let category = "Jewelry";
        await filterPage.selectCategory(category);

        await filterPage.selectPriceRange();

        let url = await filterPage.getURL();
        let num = url.match(/\d+/g);
        console.log(num);

        let r1 = parseInt(num[0]);
        let r2 = parseInt(num[1]);
        console.log(r1, " ", r2);

        const prices = await filterPage.getPrices();
        console.log(prices);

        for (const price of prices) {
            const numericPrice = parseFloat(price.replace(/[^0-9.-]+/g, ""));
            if (numericPrice >= r1 && numericPrice <= r2) {
                console.log(true);
            } else {
                console.log(false);
            }
        }
    });
});
