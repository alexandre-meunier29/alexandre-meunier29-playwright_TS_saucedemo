const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageobjects/POManager');




test("Sort the product listing by low to high prices", async ({ browser, page }) => {
    const poManager = new POManager(page);
    const username = "standard_user";
    const password = "secret_sauce";

    const loginPage = poManager.getloginPage();
    await loginPage.goToLoginPage();
    await loginPage.login(username, password);
    const productListingPage = poManager.getProductListingPage();
    await productListingPage.sortByLowToHigh();
    await productListingPage.assertPricesInAscendingOrder();


})




test("Look for product 'Sauce Labs Onesie' and add it to basket(filter method)", async ({ browser, page }) => {

    const poManager = new POManager(page);
    const username = "standard_user";
    const password = "secret_sauce";
    const productname = "Sauce Labs Onesie";

    const loginPage = poManager.getloginPage();
    await loginPage.goToLoginPage();
    await loginPage.login(username, password);
    const productListingPage = poManager.getProductListingPage();
    await productListingPage.addNamedProductToCart(productname);
    await productListingPage.waitForCartBadge();
    await productListingPage.goToCart();
    const cartPage = poManager.getCartPage();
    await cartPage.assertProductIsInCart(productname);
});














