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

    test("Look for product 'Sauce Labs Onesie' and add it to basket", async({ browser, page }) => {
        await page.goto("https://www.saucedemo.com/");
        await page.locator("#user-name").fill("standard_user");
        await page.locator("#password").fill("secret_sauce");
        await page.locator("#login-button").click();
        await page.locator(".inventory_list").waitFor({ state: 'visible' });
        
        const productInfoBlock = await page.locator(".inventory_item_description");
        const productName = 'Sauce Labs Onesie';
    
        for (let i = 0; i < await productInfoBlock.count(); ++i) {
            const productText = await productInfoBlock.nth(i).locator(".inventory_item_name").textContent();
            if (productText?.trim() === productName) {
                const addToCartButton = productInfoBlock.nth(i).locator(".btn_primary");
                await addToCartButton.waitFor({ state: 'visible' });
                await addToCartButton.click();
                await page.locator(".shopping_cart_badge").waitFor({ state: 'visible' });
                break;
            }
        }
    
        await page.locator(".shopping_cart_link").click();
        await page.locator(".cart_contents_container").waitFor();
        const isProductInCart = await page.locator(".cart_item_label:has-text('Sauce Labs Onesie')").isVisible();
        expect(isProductInCart).toBeTruthy();
    });













