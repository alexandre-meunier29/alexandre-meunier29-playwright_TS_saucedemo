const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageobjects/LoginPage')
const { ProductListingPage } = require('../pageobjects/ProductListingPage');
const { CartPage } = require('../pageobjects/CartPage');




test("Sort the product listing by low to high prices", async ({ browser, page }) => {
    const loginPage = new LoginPage(page);
    const productListingPage = new ProductListingPage(page);
    const username = "standard_user";
    const password = "secret_sauce";

    await loginPage.goToLoginPage();
    await loginPage.login(username, password);
    await productListingPage.sortByLowToHigh();
    await productListingPage.assertPricesInAscendingOrder();


})




test("Look for product 'Sauce Labs Onesie' and add it to basket(filter method)", async ({ browser, page }) => {

    const loginPage = new LoginPage(page);
    const productListingPage = new ProductListingPage(page);
    const cartPage = new CartPage(page);
    const username = "standard_user";
    const password = "secret_sauce";
    const productname = "Sauce Labs Onesie";

    await loginPage.goToLoginPage();
    await loginPage.login(username, password);
    await productListingPage.addNamedProductToCart(productname);
    await productListingPage.waitForCartBadge();
    await productListingPage.goToCart();
    await cartPage.assertProductIsInCart(productname);
});














