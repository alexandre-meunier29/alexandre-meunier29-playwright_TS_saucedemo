const { expect } = require('@playwright/test');

class CartPage {

    constructor(page)
    {
        this.page = page;
        this.productsContainer = page.locator(".cart_contents_container");
        this.checkoutBtn = page.locator("#checkout");

    }

    async assertProductIsInCart(productname){
        await this.productsContainer.waitFor();
        const isProductInCart = await this.page.locator(`.cart_item_label:has-text("${productname}")`).isVisible();
        expect(isProductInCart).toBeTruthy();


    }

    async proceedToCheckout(){
        await this.checkoutBtn.click();

    }


}
module.exports = {CartPage};