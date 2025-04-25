import {expect, Locator, Page} from '@playwright/test';

export class CheckoutStep2Page {

  page : Page;
  finishBtn : Locator;
  productItemPrice : Locator;
  subtotalText : Locator;

    constructor(page : Page) {
        this.page = page;
        this.finishBtn = page.locator("#finish");
        this.productItemPrice = page.locator(".inventory_item_price");
        this.subtotalText = page.locator(".summary_subtotal_label");


    }

    async placeOrder() {
        await this.finishBtn.click();

    }

    async assertProductPrice(expectedPrice:number) {
        const actualPriceText = await this.productItemPrice.textContent();
        if (actualPriceText === null) {
          throw new Error("Failed to get product price text - element not found or has no text");
      }
        const actualPrice = parseFloat(actualPriceText.replace('$', '').trim());
        expect(actualPrice).toEqual(expectedPrice);
      }

      async assertSubtotalPrice(expectedPrice: number){
        const actualPriceText = await this.subtotalText.textContent();

        if (actualPriceText === null) {
          throw new Error("Failed to get subtotal price text - element not found or has no text");
        }
        
        const priceMatch = actualPriceText.match(/\$(\d+\.\d+)/);
        
        if (priceMatch && priceMatch[1]) {
          const actualPrice = parseFloat(priceMatch[1]);
          expect(actualPrice).toEqual(expectedPrice);
        } else {
          throw new Error(`Could not extract price from text: "${actualPriceText}"`);
        }
      }

}
