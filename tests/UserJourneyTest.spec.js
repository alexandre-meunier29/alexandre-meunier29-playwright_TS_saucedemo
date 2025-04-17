const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageobjects/LoginPage')
const { ProductListingPage } = require('../pageobjects/ProductListingPage');
const { CartPage } = require('../pageobjects/CartPage');
const { CheckoutStep1Page } = require('../pageobjects/CheckoutStep1Page');
const { CheckoutStep2Page } = require('../pageobjects/CheckoutStep2Page');
const { SuccessPage } = require('../pageobjects/SuccessPage');




test("user adds a product to basket and go through the full checkout process", async ({ browser, page }) => {
    const loginPage = new LoginPage(page);
    const productListingPage = new ProductListingPage(page);
    const cartPage = new CartPage(page);
    const checkoutStep1Page = new CheckoutStep1Page(page);
    const checkoutStep2Page = new CheckoutStep2Page(page);
    const successPage = new SuccessPage(page);
    const username = "standard_user";
    const password = "secret_sauce";
    const firstname = "Alex";
    const lastname = "Doe";
    const postcode = "NW4 2RE";


    await loginPage.goToLoginPage();
    await loginPage.login(username, password);
    await productListingPage.addFirstListedproductToCart();
    await productListingPage.goToCart();
    await cartPage.proceedToCheckout();
    await checkoutStep1Page.fillCheckoutFields(firstname,lastname,postcode);
    await checkoutStep1Page.proceedToCheckoutStep2();
    await checkoutStep2Page.placeOrder();
    await successPage.assertSuccesMessage();

})