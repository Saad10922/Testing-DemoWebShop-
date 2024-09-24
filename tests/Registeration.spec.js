const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker/locale/en');
const { RegistrationPage } = require('../pages/Registration_POM');

test.describe('Registration & Login', () => {
  const baseURL = "https://demowebshop.tricentis.com";
  const Fname = faker.person.firstName();
  const Lname = faker.person.lastName();
  const mail = faker.internet.email();
  const gen = faker.person.sex();
  const pass = faker.internet.password();

  test('Registration with Valid Data', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);

    await registrationPage.gotoRegistrationPage();
    await registrationPage.selectGender(gen);
    await registrationPage.fillFirstName(Fname);
    await registrationPage.fillLastName(Lname);
    await registrationPage.fillEmail(mail);
    await registrationPage.fillPassword(pass);
    await registrationPage.fillConfirmPassword(pass);
    await registrationPage.submitRegistration();
    await registrationPage.expectRegistrationSuccess();
  });

  test('Registration without Firstname', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);

    await registrationPage.gotoRegistrationPage();
    await registrationPage.selectGender(gen);
    await registrationPage.fillLastName(Lname);
    await registrationPage.fillEmail(mail);
    await registrationPage.fillPassword(pass);
    await registrationPage.fillConfirmPassword(pass);
    await registrationPage.submitRegistration();
    await registrationPage.expectFirstNameError();
  });

  test('Registration without LastName', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);

    await registrationPage.gotoRegistrationPage();
    await registrationPage.selectGender(gen);
    await registrationPage.fillFirstName(Fname);
    await registrationPage.fillEmail(mail);
    await registrationPage.fillPassword(pass);
    await registrationPage.fillConfirmPassword(pass);
    await registrationPage.submitRegistration();
    await registrationPage.expectLastNameError();
  });

  test('Registration without Email', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);

    await registrationPage.gotoRegistrationPage();
    await registrationPage.selectGender(gen);
    await registrationPage.fillFirstName(Fname);
    await registrationPage.fillLastName(Lname);
    await registrationPage.fillPassword(pass);
    await registrationPage.fillConfirmPassword(pass);
    await registrationPage.submitRegistration();
    await registrationPage.expectEmailError();
  });

  test('Registration without Password', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);

    await registrationPage.gotoRegistrationPage();
    await registrationPage.selectGender(gen);
    await registrationPage.fillFirstName(Fname);
    await registrationPage.fillLastName(Lname);
    await registrationPage.fillEmail(mail);
    await registrationPage.fillConfirmPassword(pass);
    await registrationPage.submitRegistration();
    await registrationPage.expectPasswordError();
  });

  test('Registration without Confirm Password', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);

    await registrationPage.gotoRegistrationPage();
    await registrationPage.selectGender(gen);
    await registrationPage.fillFirstName(Fname);
    await registrationPage.fillLastName(Lname);
    await registrationPage.fillEmail(mail);
    await registrationPage.fillPassword(pass);
    await registrationPage.submitRegistration();
    await registrationPage.expectPasswordError();
  });
});
