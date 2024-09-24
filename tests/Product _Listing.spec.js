const {test, expect} = require('@playwright/test');
const {faker} = require('@faker-js/faker/locale/en')

test.describe('Product Listing',()=>{
    let baseURL= 'https://demowebshop.tricentis.com'

test('Checking Listing details From Home Page',async({page})=>{

    
        await page.goto(baseURL)
        let productBox = await page.locator('div[data-productid="2"]')
        await expect(productBox.locator('img')).toHaveAttribute('src','https://demowebshop.tricentis.com/content/images/thumbs/0000015_25-virtual-gift-card_125.jpeg')
        await expect(productBox.locator('a').last()).toHaveText('$25 Virtual Gift Card')
        await expect(productBox.locator('.rating')).toBeVisible()
        await expect(productBox.locator('span')).toHaveText('25.00')
        await expect(productBox.locator('input[value="Add to cart"]')).toBeVisible()

    })

    test('Checking Products Displayed should not exceed the Expected',async({page})=>{

    
        await page.goto(baseURL)
        let catlist= await page.locator('ul[class="list"]')
        await catlist.locator('text="Apparel & Shoes"').click()
        await page.waitForURL(`${baseURL}/apparel-shoes`)
        let ecount= await page.locator('select#products-pagesize').inputValue()
        let dcount= await page.locator('.product-grid .item-box').count()
        const match= ecount.match(/\d+/)
        const number=parseInt(match[0],10)
        console.log(number," ", dcount);
        
        if(dcount<=number)
            console.log(true);
        else
        console.log(false);
        
            

    })
})






