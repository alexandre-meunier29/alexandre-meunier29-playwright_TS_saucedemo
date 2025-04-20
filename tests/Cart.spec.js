const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageobjects/POManager');
const dataset = JSON.parse(JSON.stringify(require("../utils/UserData.json")));



test("user removes all products from cart", async ({ browser, page }) => {
    const poManager = new POManager(page);

    const loginPage = poManager.getloginPage();
    await loginPage.goToLoginPage();
    await loginPage.login(dataset.username, dataset.password);
    const productListingPage = poManager.getProductListingPage();
    await productListingPage.addFirstListedproductToCart();
    await productListingPage.addLastListedproductToCart();
    await productListingPage.goToCart();
    const cartPage = poManager.getCartPage();
    await cartPage.removeAllproductsFromCart();
    await cartPage.assertCartIsEmpty();


})