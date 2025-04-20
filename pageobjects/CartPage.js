const { expect } = require('@playwright/test');

class CartPage {

    constructor(page) {
        this.page = page;
        this.cartContentContainer = page.locator(".cart_contents_container");
        this.productContainer = page.locator(".cart_item");
        this.checkoutBtn = page.locator("#checkout");
        this.removeProductBtn = page.getByRole('button', { name: "remove" })
        this.productItemPrice = page.locator(".inventory_item_price");

    }

    async assertProductIsInCart(productname) {
        await this.cartContentContainer.waitFor();
        const isProductInCart = await this.page.locator(`.cart_item_label:has-text("${productname}")`).isVisible();
        expect(isProductInCart).toBeTruthy();


    }

    async proceedToCheckout() {
        await this.checkoutBtn.click();

    }

    async removeAllproductsFromCart() {
        const removeBtnCount = await this.removeProductBtn.count();
        console.log(removeBtnCount);
        for (let i = 0; i < removeBtnCount; i++) {
            await this.removeProductBtn.nth(0).click();
        }


    }

    async assertCartIsEmpty() {
        await expect(this.productContainer).toBeHidden();

    }

    async assertProductPrice(expectedPrice) {
        const actualPriceText = await this.productItemPrice.first().textContent();
        const actualPrice = parseFloat(actualPriceText.replace('$', '').trim());
        expect(actualPrice).toEqual(expectedPrice);
      }


}
module.exports = { CartPage };