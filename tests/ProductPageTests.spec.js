const {test, expect} =require('@playwright/test');




test("Add the first product from the list to basket from product page", async({browser,page})=>
    {
        await page.goto("https://www.saucedemo.com/");
        await page.locator("#user-name").fill("standard_user");
        await page.locator("#password").fill("secret_sauce");
        await page.locator("#login-button").click();
        await page.locator(".inventory_item_name").nth(0).click();
        await page.locator("#add-to-cart").click();
        await expect (page.locator(".shopping_cart_badge")).toContainText("1");
        

    })