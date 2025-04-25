import { test, expect } from '@playwright/test';
import { POManager } from '../pageobjects/POManager';
import dataset from '../utils/UserData.json';




test("Add the first product from the list to basket from product page", async ({ page }) => {
    const poManager = new POManager(page);

    const loginPage = poManager.getloginPage();
    await loginPage.goToLoginPage();
    await loginPage.login(dataset.username, dataset.password);
    const productListingPage = poManager.getProductListingPage();
    await productListingPage.clickOnFirstProductTitle();
    const productDetailPage = poManager.getProductDetailPage();
    await productDetailPage.addToCart();
    await productDetailPage.assertProductIsInCart();


})