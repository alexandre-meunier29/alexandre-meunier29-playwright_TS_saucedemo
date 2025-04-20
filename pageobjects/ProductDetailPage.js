const { expect } = require('@playwright/test');

class ProductDetailPage {

    constructor(page)
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

    async assertProductPrice(expectedPrice) {
        const actualPriceText = await this.productItemPrice.textContent();
        const actualPrice = parseFloat(actualPriceText.replace('$', '').trim());
        expect(actualPrice).toEqual(expectedPrice);
      }


}
module.exports = {ProductDetailPage};