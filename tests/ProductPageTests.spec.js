const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageobjects/LoginPage')
const { ProductListingPage } = require('../pageobjects/ProductListingPage');
const { ProductDetailPage } = require('../pageobjects/ProductDetailPage');




test("Add the first product from the list to basket from product page", async ({ browser, page }) => {
    const loginPage = new LoginPage(page);
    const productListingPage = new ProductListingPage(page);
    const productDetailPage = new ProductDetailPage(page);
    const username = "standard_user";
    const password = "secret_sauce";


    await loginPage.goToLoginPage();
    await loginPage.login(username, password);
    await productListingPage.clickOnFirstProductTitle();
    await productDetailPage.addToCart();
    await productDetailPage.assertProductIsInCart();


})