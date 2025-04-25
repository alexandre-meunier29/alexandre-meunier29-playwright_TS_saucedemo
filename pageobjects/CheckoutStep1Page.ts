import {expect, Locator, Page} from '@playwright/test';

export class CheckoutStep1Page {

    page : Page;
    firstNameField : Locator;
    lastNameField : Locator;
    postcodeField : Locator;
    continueBtn : Locator;
    errorMsgContainer : Locator;

    constructor(page:Page) {
        this.page = page;
        this.firstNameField = page.locator("#first-name");
        this.lastNameField = page.locator("#last-name");
        this.postcodeField = page.locator("#postal-code");
        this.continueBtn = page.locator("#continue");
        this.errorMsgContainer = page.locator(".error-message-container");


    }

    async fillCheckoutFields(firstname:string, lastname:string, postcode:string) {

        await this.firstNameField.fill(firstname);
        await this.lastNameField.fill(lastname);
        await this.postcodeField.fill(postcode);
    }

    async proceedToCheckoutStep2() {
        await this.continueBtn.click();

    }

    async assertErrorMessage(){
        await expect(this.errorMsgContainer).toContainText("Error: First Name is required")
    }

    async assertUrlStep1(url:string) {
        await expect(this.page).toHaveURL(url);
    }



}