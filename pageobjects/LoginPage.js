const { expect } = require('@playwright/test');

class LoginPage {

    constructor(page)
    {
        this.page = page;
        this.loginButton = page.locator("#login-button");
        this.usernameField = page.locator("#user-name");
        this.passwordField = page.locator("#password");
        this.errorMsgContainer = page.locator(".error-message-container");

    }

    async goToLoginPage()
    {
        await this.page.goto("https://www.saucedemo.com/");

    }

    async login(username,password)
    {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
    }

    async assertLoginFailedErrorMsg(){
        await expect(this.errorMsgContainer).toContainText("Username and password do not match any user")
    }

    async assertLoginFailedUserlockedErrorMsg(){
        await expect(this.errorMsgContainer).toContainText("this user has been locked out")
    }

    async assertLoginButtonVisible(){
        await expect(this.loginButton).toBeVisible();

    }

}
module.exports = {LoginPage};