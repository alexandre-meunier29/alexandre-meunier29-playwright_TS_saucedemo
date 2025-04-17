const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageobjects/POManager');
const dataset = JSON.parse(JSON.stringify(require("../utils/UserData.json")));



test("user adds a product to basket and go through the full checkout process", async ({ browser, page }) => {
    const poManager = new POManager(page);

    const loginPage = poManager.getloginPage();
    await loginPage.goToLoginPage();
    await loginPage.login(dataset.username, dataset.password);
    const productListingPage = poManager.getProductListingPage();
    await productListingPage.addFirstListedproductToCart();
    await productListingPage.goToCart();
    const cartPage = poManager.getCartPage();
    await cartPage.proceedToCheckout();
    const checkoutStep1Page = poManager.getCheckoutStep1Page();
    await checkoutStep1Page.fillCheckoutFields(dataset.firstname,dataset.lastname,dataset.postcode);
    await checkoutStep1Page.proceedToCheckoutStep2();
    const checkoutStep2Page = poManager.getCheckoutStep2Page();
    await checkoutStep2Page.placeOrder();
    const successPage = poManager.getSuccessPage();
    await successPage.assertSuccesMessage();

})