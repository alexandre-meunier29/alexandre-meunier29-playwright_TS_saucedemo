const {test, expect} =require('@playwright/test');




test.only("Pick my birth date in calendar", async({browser,page})=>{

    const year = "1989";
    const month = "12";
    const day = "21";
    const expectedDate = [day,month,year];

    page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    await page.locator(".react-date-picker__inputGroup").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.locator(".react-calendar__navigation__arrow.react-calendar__navigation__prev-button").click();
    await page.locator(".react-calendar__navigation__arrow.react-calendar__navigation__prev-button").click();
    await page.locator(".react-calendar__navigation__arrow.react-calendar__navigation__prev-button").click();
    await page.locator(".react-calendar__navigation__arrow.react-calendar__navigation__prev-button").click();
    await page.getByText(year).click();
    await page.locator(".react-calendar__year-view__months__month").nth(Number(month)-1).click();
    await page.locator("//abbr[text()='"+day+"']").click();

    const inputs = await page.locator(".react-date-picker__inputGroup input").all();
    for(let i=1; i<inputs.lengt; i++){
        const value = await inputs[index].inputValue();
        expect(value).toEqual(expectedList[index]);
    }
    

})