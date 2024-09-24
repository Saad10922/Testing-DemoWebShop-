const {test, expect} = require ('@playwright/test')
const {PlaywrightDevPage} = require('../pages/Userprofile_POM')
   
test('Verifing the Changing of Name in User Profile ',async({page})=>{
    const PlaywrightDev = new PlaywrightDevPage(page)
    await PlaywrightDev.goto()
    await PlaywrightDev.login_button().click()
    await PlaywrightDev.enter_email()
    await PlaywrightDev.enter_password()
    await PlaywrightDev.check_RememberMe()
    await PlaywrightDev.login_Button().click()
    await page.waitForURL(PlaywrightDev.home())
    await PlaywrightDev.user_profile().click()
    
     
  })
