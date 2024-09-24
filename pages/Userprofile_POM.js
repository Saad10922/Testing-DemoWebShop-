const { expect } = require('@playwright/test');

exports.PlaywrightDevPage = class PlaywrightDevPage {

  constructor(page)
  {
    this.page=page
    this.baseURL='https://demowebshop.tricentis.com/'
    this.email="saadq10922@gmail.com"
    this.pass='109220'
  }
  async goto()
  {
    await this.page.goto(`${this.baseURL}`)
  }

   login_button()
  {
    return this.page.locator('div.header-links a.ico-login')
  }
  async enter_email()
   {
    await this.page.fill('#Email',this.email)
   }
  async enter_password()
   {
    await this.page.fill('#Password',this.pass)
   }
   async check_RememberMe(){
    await this.page.locator('#RememberMe').check()
   }
   login_Button()
   {
    return this.page.locator('input[value="Log in"]')
   }
   home()
   {
    return `${this.baseURL}`
   }
   user_profile()
   {
    return this.page.locator('div.header-links a.account')
   }
}