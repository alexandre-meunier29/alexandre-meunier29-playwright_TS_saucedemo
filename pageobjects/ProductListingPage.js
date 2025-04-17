const { expect } = require('@playwright/test');



class ProductListingPage {

    constructor(page) {
        this.page = page;
        this.burgerMenu = page.locator("#react-burger-menu-btn");
        this.logoutButton = page.locator("#logout_sidebar_link");

    }

    async logout() {

        await this.burgerMenu.click();
        await this.logoutButton.click();
    }

    async assertUserLoggedIn(url){
        await expect(this.page).toHaveURL(url);
    }

}
module.exports = { ProductListingPage };