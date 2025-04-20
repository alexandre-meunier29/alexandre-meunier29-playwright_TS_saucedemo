const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageobjects/POManager');
const dataset = JSON.parse(JSON.stringify(require("../utils/UserData.json")));



test("user gets error message on checkout step 1 by missing to fill user data fileds", async ({ browser, page }) => {
    const poManager = new POManager(page);
    const url = "https://www.saucedemo.com/checkout-step-one.html"

    const loginPage = poManager.getloginPage();
    await loginPage.goToLoginPage();
    await loginPage.login(dataset.username, dataset.password);
    const productListingPage = poManager.getProductListingPage();
    await productListingPage.addFirstListedproductToCart();
    await productListingPage.goToCart();
    const cartPage = poManager.getCartPage();
    await cartPage.proceedToCheckout();
    const checkoutStep1Page = poManager.getCheckoutStep1Page();
    await checkoutStep1Page.proceedToCheckoutStep2();
    await checkoutStep1Page.assertErrorMessage();
    await checkoutStep1Page.assertUrlStep1(url);


})