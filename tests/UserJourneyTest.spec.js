const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageobjects/POManager');




test("user adds a product to basket and go through the full checkout process", async ({ browser, page }) => {
    const poManager = new POManager(page);
    const username = "standard_user";
    const password = "secret_sauce";
    const firstname = "Alex";
    const lastname = "Doe";
    const postcode = "NW4 2RE";

    const loginPage = poManager.getloginPage();
    await loginPage.goToLoginPage();
    await loginPage.login(username, password);
    const productListingPage = poManager.getProductListingPage();
    await productListingPage.addFirstListedproductToCart();
    await productListingPage.goToCart();
    const cartPage = poManager.getCartPage();
    await cartPage.proceedToCheckout();
    const checkoutStep1Page = poManager.getCheckoutStep1Page();
    await checkoutStep1Page.fillCheckoutFields(firstname,lastname,postcode);
    await checkoutStep1Page.proceedToCheckoutStep2();
    const checkoutStep2Page = poManager.getCheckoutStep2Page();
    await checkoutStep2Page.placeOrder();
    const successPage = poManager.getSuccessPage();
    await successPage.assertSuccesMessage();

})