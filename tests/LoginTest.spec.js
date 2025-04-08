const {test, expect} =require('@playwright/test');



test("Successful login test", async({browser,page})=>
{
await page.goto("https://www.saucedemo.com/");
console.log(await page.title());
await page.locator("#user-name").fill("standard_user");
await page.locator("#password").fill("secret_sauce");
await page.locator("#login-button").click();
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');


})

test("Unsuccessful login with invalid credentials", async({browser,page})=>
{
    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("dummy_user");
    await page.locator("#password").fill("dummy_sauce");
    await page.locator("#login-button").click();
    await expect (page.locator(".error-message-container")).toContainText("Username and password do not match any user");


})

test("Unsuccessful login with locked user", async({browser,page})=>
{
    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("locked_out_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();
    await expect (page.locator(".error-message-container")).toContainText("this user has been locked out");
})

test("Logout", async({browser,page})=>
{
    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.locator("#react-burger-menu-btn").click();
    await page.locator("#logout_sidebar_link").click();
    await expect(page.locator("#login-button")).toBeVisible();

})