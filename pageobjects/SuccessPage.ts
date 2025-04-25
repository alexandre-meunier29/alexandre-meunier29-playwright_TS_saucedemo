import {expect, Locator, Page} from '@playwright/test';


export class SuccessPage {

    page : Page;
    headerTitle : Locator;

    constructor(page:Page)
    {
        this.page = page;
        this.headerTitle = page.locator(".complete-header");
        
    }

    async assertSuccesMessage(){

    await expect(this.headerTitle).toContainText("Thank you for your order!");
    }


}
