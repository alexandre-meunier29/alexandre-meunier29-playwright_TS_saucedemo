import {expect, Locator, Page} from '@playwright/test';

export class CartPage {

    page : Page;
    cartContentContainer : Locator;
    productContainer : Locator;
    checkoutBtn : Locator;
    removeProductBtn : Locator;
    productItemPrice : Locator;



    constructor(page:Page) {
        this.page = page;
        this.cartContentContainer = page.locator(".cart_contents_container");
        this.productContainer = page.locator(".cart_item");
        this.checkoutBtn = page.locator("#checkout");
        this.removeProductBtn = page.getByRole('button', { name: "remove" })
        this.productItemPrice = page.locator(".inventory_item_price");

    }

    async assertProductIsInCart(productname:string) {
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

    async assertProductPrice(expectedPrice:number) {
        const actualPriceText = await this.productItemPrice.first().textContent();

        if (actualPriceText === null) {
            throw new Error("Failed to get product price text - element not found or has no text");
        }

        const actualPrice = parseFloat(actualPriceText.replace('$', '').trim());
        expect(actualPrice).toEqual(expectedPrice);
      }


}