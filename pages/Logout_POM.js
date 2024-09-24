const { expect } = require('@playwright/test');

exports.PlaywrightDevPage = class PlaywrightDevPage {

  constructor(page)
  {
    this.page=page
    this.baseURL='https://demowebshop.tricentis.com/'
    this.email="saadq10922@gmail.com"
    this.pass='109220'
  }
  async gotoLoginPage()
  {
    await this.page.goto(`${this.baseURL}/login`)
  }
  async enterEmail()
  {
    await this.page.fill('#Email',this.email)
  }
  async enterPassword()
  {
    await this.page.fill('#Password',this.pass)
  }
  rememberMe()
  {
    return this.page.locator('#RememberMe')
  }
  Homepage()
  {
    return `${this.baseURL}`
  }
  logoutButton()
  {
    return this.page.locator('.ico-logout')
  }
  loginButton()
  {
    return this.page.locator('div.buttons input[type="submit"]')
  }
  loginlink()
  {
    return this.page.locator('.ico-login')
  }
}