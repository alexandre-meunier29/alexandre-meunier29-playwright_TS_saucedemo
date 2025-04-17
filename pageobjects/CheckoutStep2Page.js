const { expect } = require('@playwright/test');

class CheckoutStep2Page {

    constructor(page) {
        this.page = page;
        this.finishBtn = page.locator("#finish");


    }

    async placeOrder() {
        await this.finishBtn.click();

    }



}
module.exports = { CheckoutStep2Page };