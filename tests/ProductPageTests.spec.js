const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageobjects/POManager');




test("Add the first product from the list to basket from product page", async ({ browser, page }) => {
    const poManager = new POManager(page);
    const username = "standard_user";
    const password = "secret_sauce";

    const loginPage = poManager.getloginPage();
    await loginPage.goToLoginPage();
    await loginPage.login(username, password);
    const productListingPage = poManager.getProductListingPage();
    await productListingPage.clickOnFirstProductTitle();
    const productDetailPage = poManager.getProductDetailPage();
    await productDetailPage.addToCart();
    await productDetailPage.assertProductIsInCart();


})