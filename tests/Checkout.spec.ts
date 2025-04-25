import { test, expect } from '@playwright/test';
import { POManager } from '../pageobjects/POManager';
import dataset from '../utils/UserData.json';



test("user gets error message on checkout step 1 by missing to fill user data fileds", async ({ page }) => {
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