const { test, expect } = require('@playwright/test');
const { ProductListingPage } = require('../pages/Sort_POM');

test.describe('Verifying Product Listing by applying sorting', () => {
  const baseURL = "https://demowebshop.tricentis.com/";
  const categoryName = "Apparel & Shoes";
  
  test('Sorting From A to Z', async ({ page }) => {
    const productListing = new ProductListingPage(page);
    await productListing.navigateToCategory(categoryName);
    await productListing.selectSorting('https://demowebshop.tricentis.com/apparel-shoes?orderby=5');

    let items = await productListing.getProductTitles();
    let sortedItems = [...items].sort((a, b) => a.localeCompare(b));
    
    console.log(items);
    console.log(sortedItems);
    await expect(items).toEqual(sortedItems);
  });

  test('Sorting From Z to A', async ({ page }) => {
    const productListing = new ProductListingPage(page);
    await productListing.navigateToCategory(categoryName);
    await productListing.selectSorting('https://demowebshop.tricentis.com/apparel-shoes?orderby=6');

    let items = await productListing.getProductTitles();
    let sortedItems = [...items].sort((a, b) => b.localeCompare(a));
    
    console.log(items);
    console.log(sortedItems);
    await expect(items).toEqual(sortedItems);
  });

  test('Sorting price from low to high', async ({ page }) => {
    const productListing = new ProductListingPage(page);
    await productListing.navigateToCategory(categoryName);
    await productListing.selectSorting('https://demowebshop.tricentis.com/apparel-shoes?orderby=10');

    let items = await productListing.getProductPrices();
    let sortedPrices = [...items].sort((a, b) => a - b);
    
    console.log(items);
    console.log(sortedPrices);
    await expect(items).toEqual(sortedPrices);
  });

  test('Sorting price from high to low', async ({ page }) => {
    const productListing = new ProductListingPage(page);
    await productListing.navigateToCategory(categoryName);
    await productListing.selectSorting('https://demowebshop.tricentis.com/apparel-shoes?orderby=11');

    let items = await productListing.getProductPrices();
    let sortedPrices = [...items].sort((a, b) => b - a);
    
    console.log(items);
    console.log(sortedPrices);
    await expect(items).toEqual(sortedPrices);
  });
});
