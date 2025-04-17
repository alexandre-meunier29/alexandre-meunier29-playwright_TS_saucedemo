const { expect } = require('@playwright/test');

class ProductDetailPage {

    constructor(page)
    {
        this.page = page;
        this.addToCartBtn = page.locator("#add-to-cart");
        this.minicartBadge = page.locator(".shopping_cart_badge");
        

    }

    async addToCart(){
        await this.addToCartBtn.click();
    }

    async assertProductIsInCart(){
        await expect(this.minicartBadge).toContainText("1");
    }


}
module.exports = {ProductDetailPage};