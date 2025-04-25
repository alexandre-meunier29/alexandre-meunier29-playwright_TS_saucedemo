import { test, expect } from '@playwright/test';
import { POManager } from '../pageobjects/POManager';
import dataset from '../utils/UserData.json';



test("user removes all products from cart", async ({ page }) => {
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