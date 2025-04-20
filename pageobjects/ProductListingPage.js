const { expect } = require('@playwright/test');



class ProductListingPage {

    constructor(page) {
        this.page = page;
        this.burgerMenu = page.locator("#react-burger-menu-btn");
        this.logoutButton = page.locator("#logout_sidebar_link");
        this.sortByLowToHighOption = page.locator("select.product_sort_container");
        this.priceElements = page.locator(".inventory_item_price");
        this.inventoryList = page.locator(".inventory_list");
        this.inventoryItem = page.locator(".inventory_item");
        this.minicartBadge = page.locator(".shopping_cart_badge");
        this.minicartBtn = page.locator(".shopping_cart_link");
        this.firstProductTitle = page.locator(".inventory_item_name").nth(0);
        this.AddToCartBtn = page.locator(".btn_primary");
        this.productPriceContainer = page.locator(".inventory_item_price");

    }

    async logout() {

        await this.burgerMenu.click();
        await this.logoutButton.click();
    }

    async assertUserLoggedIn(url) {
        await expect(this.page).toHaveURL(url);
    }

    async sortByLowToHigh() {
        await this.sortByLowToHighOption.selectOption("lohi");
    }

    async assertPricesInAscendingOrder() {
        const priceElements = await this.priceElements.allTextContents();
        const prices = priceElements.map(price => parseFloat(price.replace('$', '').trim()));

        for (let i = 0; i < prices.length - 1; i++) {
            expect(prices[i]).toBeLessThanOrEqual(prices[i + 1]);
        }
        console.log(prices);
    }

    async addNamedProductToCart(productname) {
        await this.inventoryList.waitFor({ state: 'visible' });
        await this.inventoryItem.filter({ hasText: productname }).getByRole("button").click();
    }

    async waitForCartBadge() {
        await this.minicartBadge.waitFor();
    }

    async goToCart() {
        await this.minicartBtn.click();
    }

    async clickOnFirstProductTitle() {
        await this.firstProductTitle.click();
    }

    async addFirstListedproductToCart() {
        await this.AddToCartBtn.nth(0).click();
    }

    async addLastListedproductToCart() {
        const addToCartBtnCount = await this.AddToCartBtn.count();
        await this.AddToCartBtn.nth(addToCartBtnCount - 1).click();

    }

    async getFirstListedProductPrice() {
        const priceText = await this.priceElements.nth(0).textContent();
        return parseFloat(priceText.replace('$', '').trim());

    }

}
module.exports = { ProductListingPage };