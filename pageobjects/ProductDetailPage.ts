import {expect, Locator, Page} from '@playwright/test';


export class ProductDetailPage {

    page : Page;
    addToCartBtn : Locator;
    minicartBadge : Locator;
    productItemPrice : Locator;

    constructor(page:Page)
    {
        this.page = page;
        this.addToCartBtn = page.locator("#add-to-cart");
        this.minicartBadge = page.locator(".shopping_cart_badge");
        this.productItemPrice = page.locator(".inventory_details_price");
        

    }

    async addToCart(){
        await this.addToCartBtn.click();
    }

    async assertProductIsInCart(){
        await expect(this.minicartBadge).toContainText("1");
    }

    async assertProductPrice(expectedPrice : number) {
        const actualPriceText = await this.productItemPrice.textContent();

        if (actualPriceText === null) {
            throw new Error("Failed to get product price text - element not found or has no text");
        }

        const actualPrice = parseFloat(actualPriceText.replace('$', '').trim());
        expect(actualPrice).toEqual(expectedPrice);
      }


}