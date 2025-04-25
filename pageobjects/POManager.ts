import {Page} from '@playwright/test';
import { LoginPage } from './LoginPage';
import { ProductListingPage } from './ProductListingPage';
import { CartPage } from './CartPage';
import { ProductDetailPage } from './ProductDetailPage';
import { CheckoutStep1Page } from './CheckoutStep1Page';
import { CheckoutStep2Page } from './CheckoutStep2Page';
import { SuccessPage } from './SuccessPage';
import { CalendarPage } from './CalendarPage';

export class POManager {

    page: Page;
    loginPage: LoginPage;
    productListingPage: ProductListingPage;
    productDetailPage: ProductDetailPage;
    cartPage: CartPage;
    checkoutStep1Page: CheckoutStep1Page;
    checkoutStep2Page: CheckoutStep2Page;
    successPage: SuccessPage;
    calendarPage: CalendarPage;


    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.productListingPage = new ProductListingPage(page);
        this.productDetailPage = new ProductDetailPage(page);
        this.cartPage = new CartPage(page);
        this.checkoutStep1Page = new CheckoutStep1Page(page);
        this.checkoutStep2Page = new CheckoutStep2Page(page);
        this.successPage = new SuccessPage(page);
        this.calendarPage = new CalendarPage(page);
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

    getCalendarPage() {
        return this.calendarPage;
    }

}