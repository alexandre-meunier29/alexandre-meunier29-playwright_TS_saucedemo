const {test, expect} =require('@playwright/test');




test("user adds a product to basket and go through the full checkout process", async({browser,page})=>
    {
        await page.goto("https://www.saucedemo.com/");
        await page.locator("#user-name").fill("standard_user");
        await page.locator("#password").fill("secret_sauce");
        await page.locator("#login-button").click();
        await page.locator(".btn_primary").nth(0).click();
        await page.locator(".shopping_cart_link").click();
        await page.locator("#checkout").click();
        await page.locator("#first-name").fill("Alex");
        await page.locator("#last-name").fill("Doe");
        await page.locator("#postal-code").fill("AB1 CD2");
        await page.locator("#continue").click();
        await page.locator("#finish").click();
        await expect (page.locator(".complete-header")).toContainText("Thank you for your order!");

    })