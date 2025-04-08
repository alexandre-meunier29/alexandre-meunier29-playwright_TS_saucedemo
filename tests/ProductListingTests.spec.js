const {test, expect} =require('@playwright/test');




test("Sort the product listing by low to high prices", async({browser,page})=>
    {
        await page.goto("https://www.saucedemo.com/");
        await page.locator("#user-name").fill("standard_user");
        await page.locator("#password").fill("secret_sauce");
        await page.locator("#login-button").click();
        await page.locator("select.product_sort_container").selectOption("lohi");
        const priceElements = await page.locator(".inventory_item_price").allTextContents();
        const prices = priceElements.map(price => parseFloat(price.replace('$', '').trim()));
        for (let i = 0; i < prices.length - 1; i++) {
            expect(prices[i]).toBeLessThanOrEqual(prices[i + 1]);
        }
        console.log(prices);


    })