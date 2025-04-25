import { test, expect } from '@playwright/test';
import { POManager } from '../pageobjects/POManager';
import dataset from '../utils/UserData.json';




test("Sort the product listing by low to high prices", async ({ page }) => {
    const poManager = new POManager(page);

    const loginPage = poManager.getloginPage();
    await loginPage.goToLoginPage();
    await loginPage.login(dataset.username, dataset.password);
    const productListingPage = poManager.getProductListingPage();
    await productListingPage.sortByLowToHigh();
    await productListingPage.assertPricesInAscendingOrder();


})




test("Look for product 'Sauce Labs Onesie' and add it to basket(filter method)", async ({ page }) => {
    const poManager = new POManager(page);

    const loginPage = poManager.getloginPage();
    await loginPage.goToLoginPage();
    await loginPage.login(dataset.username, dataset.password);
    const productListingPage = poManager.getProductListingPage();
    await productListingPage.addNamedProductToCart(dataset.productname);
    await productListingPage.waitForCartBadge();
    await productListingPage.goToCart();
    const cartPage = poManager.getCartPage();
    await cartPage.assertProductIsInCart(dataset.productname);
});














