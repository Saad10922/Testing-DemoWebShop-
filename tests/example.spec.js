const {test, expect} = require('@playwright/test');
const {faker} = require('@faker-js/faker/locale/en');
test('Navigation',async({page})=>{
  await page.goto("https://demowebshop.tricentis.com/")
  await page.locator('img[title=""]').click()
 
})

  let name = faker.person.email()


  let email='saadq10922@gmail.com'
  let Password='109220'
test('Registration',async({page})=>{
  await page.goto("https://demowebshop.tricentis.com/register")
  await page.locator('#gender-male').check()
  await page.fill('#FirstName','Saad')
  await page.fill('#Email',email)
  await page.fill('#Password',Password)
  await page.fill('#ConfirmPassword',Password)
  await page.click('input[id="register-button"]')


})



test('Login',async({page})=>{
 await page.goto("https://demowebshop.tricentis.com/login")
 await page.fill('#Email',email)
 await page.fill('#Password',Password)
 await page.check('#RememberMe')
 await page.click('input[value="Log in"]')
 await page.waitForURL("https://demowebshop.tricentis.com/")

})
