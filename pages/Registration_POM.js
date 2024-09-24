const{expect}=require('@playwright/test')
class RegistrationPage {
    constructor(page) {
      this.page = page;
      this.baseURL = "https://demowebshop.tricentis.com";
      this.genderMale = '#gender-male';
      this.genderFemale = '#gender-female';
      this.firstNameInput = '#FirstName';
      this.lastNameInput = '#LastName';
      this.emailInput = '#Email';
      this.passwordInput = '#Password';
      this.confirmPasswordInput = '#ConfirmPassword';
      this.registerButton = 'input[id="register-button"]';
      this.registrationSuccessMessage = 'text=Your registration completed';
      this.firstNameErrorMessage = 'text=First name is required.';
      this.lastNameErrorMessage = 'text=Last name is required.';
      this.emailErrorMessage = 'text=Email is required.';
      this.passwordErrorMessage = 'text=Password is required.';
    }
  
    async gotoRegistrationPage() {
      await this.page.goto(`${this.baseURL}/register`);
    }
  
    async selectGender(gender) {
      if (gender === 'male') {
        await this.page.locator(this.genderMale).check();
      } else {
        await this.page.locator(this.genderFemale).check();
      }
    }
  
    async fillFirstName(firstName) {
      await this.page.fill(this.firstNameInput, firstName);
    }
  
    async fillLastName(lastName) {
      await this.page.fill(this.lastNameInput, lastName);
    }
  
    async fillEmail(email) {
      await this.page.fill(this.emailInput, email);
    }
  
    async fillPassword(password) {
      await this.page.fill(this.passwordInput, password);
    }
  
    async fillConfirmPassword(confirmPassword) {
      await this.page.fill(this.confirmPasswordInput, confirmPassword);
    }
  
    async submitRegistration() {
      await this.page.click(this.registerButton);
    }
  
    async expectRegistrationSuccess() {
      await expect(this.page.locator(this.registrationSuccessMessage)).toBeVisible();
    }
  
    async expectFirstNameError() {
      await expect(this.page.locator(this.firstNameErrorMessage)).toBeVisible();
    }
  
    async expectLastNameError() {
      await expect(this.page.locator(this.lastNameErrorMessage)).toBeVisible();
    }
  
    async expectEmailError() {
      await expect(this.page.locator(this.emailErrorMessage)).toBeVisible();
    }
  
    async expectPasswordError() {
      await expect(this.page.locator(this.passwordErrorMessage)).toBeVisible();
    }
  }
  
  module.exports = { RegistrationPage };
  