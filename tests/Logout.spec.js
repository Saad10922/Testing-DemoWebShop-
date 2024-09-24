const {test, expect} = require('@playwright/test');
const {PlaywrightDevPage} = require('../pages/Logout_POM')

test.describe('Checking logout Functionality', ()=>{

    
    test('Logging Out',async({page})=>{
        const play = new PlaywrightDevPage(page)
        await play.gotoLoginPage()
        await play.enterEmail()
        await play.enterPassword()
        await play.rememberMe().check()
        await play.loginButton().click()
        await page.waitForURL(play.Homepage())
        await play.logoutButton().click()
        await expect(play.loginlink()).toBeVisible()
    })
   
})
