const { test, expect } = require('@playwright/test');
const {LoginPage} = require('../pageobjects/LoginPage')
const {ProductListingPage} = require('../pageobjects/ProductListingPage')


test("Successful login test", async ({ browser, page }) => {
    const loginPage = new LoginPage(page);
    const productListingPage = new ProductListingPage(page);
    const username = "standard_user";
    const password = "secret_sauce";
    const url = "https://www.saucedemo.com/inventory.html";

    await loginPage.goToLoginPage();
    await loginPage.login(username,password);
    await productListingPage.assertUserLoggedIn(url);
    


})

test("Unsuccessful login with invalid credentials", async ({ browser, page }) => {
    const loginPage = new LoginPage(page);
    const username = "dummy_user";
    const password = "dummy_sauce";

    await loginPage.goToLoginPage();
    await loginPage.login(username,password);
    await loginPage.assertLoginFailedErrorMsg();


})

test("Unsuccessful login with locked user", async ({ browser, page }) => {
    const loginPage = new LoginPage(page);
    const username = "locked_out_user";
    const password = "secret_sauce";

    await loginPage.goToLoginPage();
    await loginPage.login(username,password);
    await loginPage.assertLoginFailedUserlockedErrorMsg();
})

test("Logout", async ({ browser, page }) => {
    const loginPage = new LoginPage(page);
    const productListingPage = new ProductListingPage(page);
    const username = "standard_user";
    const password = "secret_sauce";
    const url = "https://www.saucedemo.com/inventory.html";

    await loginPage.goToLoginPage();
    await loginPage.login(username,password);
    await productListingPage.assertUserLoggedIn(url);
    await productListingPage.logout();
    await loginPage.assertLoginButtonVisible();

})