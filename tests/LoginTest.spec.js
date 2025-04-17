const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageobjects/POManager');


test("Successful login test", async ({ browser, page }) => {
    const poManager = new POManager(page);
    const username = "standard_user";
    const password = "secret_sauce";
    const url = "https://www.saucedemo.com/inventory.html";

    const loginPage = poManager.getloginPage();
    await loginPage.goToLoginPage();
    await loginPage.login(username, password);
    const productListingPage = poManager.getProductListingPage();
    await productListingPage.assertUserLoggedIn(url);



})

test("Unsuccessful login with invalid credentials", async ({ browser, page }) => {
    const poManager = new POManager(page);
    const username = "dummy_user";
    const password = "dummy_sauce";


    const loginPage = poManager.getloginPage();
    await loginPage.goToLoginPage();
    await loginPage.login(username, password);
    await loginPage.assertLoginFailedErrorMsg();


})

test("Unsuccessful login with locked user", async ({ browser, page }) => {
    const poManager = new POManager(page);
    const username = "locked_out_user";
    const password = "secret_sauce";

    const loginPage = poManager.getloginPage();
    await loginPage.goToLoginPage();
    await loginPage.login(username, password);
    await loginPage.assertLoginFailedUserlockedErrorMsg();
})

test("Logout", async ({ browser, page }) => {
    const poManager = new POManager(page);
    const username = "standard_user";
    const password = "secret_sauce";
    const url = "https://www.saucedemo.com/inventory.html";

    const loginPage = poManager.getloginPage();
    await loginPage.goToLoginPage();
    await loginPage.login(username, password);
    const productListingPage = poManager.getProductListingPage();
    await productListingPage.assertUserLoggedIn(url);
    await productListingPage.logout();
    await loginPage.assertLoginButtonVisible();

})