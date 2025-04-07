const {test, expect} =require('@playwright/test');



test("Successful login test", async({page})=>
{
await page.goto("https://www.saucedemo.com/");
console.log(await page.title());
await page.locator("#user-name").fill("standard_user");
await page.locator("#password").fill("secret_sauce");
await page.locator("#login-button").click();
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');


})