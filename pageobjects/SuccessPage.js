const { expect } = require('@playwright/test');

class SuccessPage {

    constructor(page)
    {
        this.page = page;
        this.headerTitle = page.locator(".complete-header");
        
    }

    async assertSuccesMessage(){

    await expect(this.headerTitle).toContainText("Thank you for your order!");
    }


}
module.exports = {SuccessPage};