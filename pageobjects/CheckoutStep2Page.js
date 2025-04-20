const { expect } = require('@playwright/test');

class CheckoutStep2Page {

    constructor(page) {
        this.page = page;
        this.finishBtn = page.locator("#finish");
        this.productItemPrice = page.locator(".inventory_item_price");
        this.subtotalText = page.locator(".summary_subtotal_label");


    }

    async placeOrder() {
        await this.finishBtn.click();

    }

    async assertProductPrice(expectedPrice) {
        const actualPriceText = await this.productItemPrice.textContent();
        const actualPrice = parseFloat(actualPriceText.replace('$', '').trim());
        expect(actualPrice).toEqual(expectedPrice);
      }

      async assertSubtotalPrice(expectedPrice){
        const actualPriceText = await this.subtotalText.textContent();
        
        const priceMatch = actualPriceText.match(/\$(\d+\.\d+)/);
        
        if (priceMatch && priceMatch[1]) {
          const actualPrice = parseFloat(priceMatch[1]);
          expect(actualPrice).toEqual(expectedPrice);
        } else {
          throw new Error(`Could not extract price from text: "${actualPriceText}"`);
        }
      }

}
module.exports = { CheckoutStep2Page };