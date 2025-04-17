const { LoginPage } = require('./LoginPage');
const { ProductListingPage } = require('./ProductListingPage');
const { CartPage } = require('./CartPage');
const { ProductDetailPage } = require('./ProductDetailPage');
const { CheckoutStep1Page } = require('./CheckoutStep1Page');
const { CheckoutStep2Page } = require('./CheckoutStep2Page');
const { SuccessPage } = require('./SuccessPage');

class POManager {

    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.productListingPage = new ProductListingPage(page);
        this.productDetailPage = new ProductDetailPage(page);
        this.cartPage = new CartPage(page);
        this.checkoutStep1Page = new CheckoutStep1Page(page);
        this.checkoutStep2Page = new CheckoutStep2Page(page);
        this.successPage = new SuccessPage(page);
    }

    getloginPage() {
        return this.loginPage;
    }

    getProductListingPage() {
        return this.productListingPage;
    }

    getCartPage() {
        return this.cartPage;
    }

    getProductDetailPage() {
        return this.productDetailPage;
    }

    getCheckoutStep1Page() {
        return this.checkoutStep1Page;
    }

    getCheckoutStep2Page() {
        return this.checkoutStep2Page;
    }

    getSuccessPage() {
        return this.successPage;
    }

}
module.exports = { POManager };