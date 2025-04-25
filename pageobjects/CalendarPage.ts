import {expect, Locator, Page} from '@playwright/test';

export class CalendarPage {

    page : Page;
    datePickerBox: Locator;
    calendarNavigationLabel: Locator;
    calendarNavigationBackArrow: Locator;
    calendarSelectMonth: Locator;
    dateInputs: Locator;

    constructor(page:Page) {
        this.page = page;
        this.datePickerBox = page.locator(".react-date-picker__inputGroup");
        this.calendarNavigationLabel = page.locator(".react-calendar__navigation__label");
        this.calendarNavigationBackArrow = page.locator(".react-calendar__navigation__arrow.react-calendar__navigation__prev-button");
        this.calendarSelectMonth = page.locator(".react-calendar__year-view__months__month");
        this.dateInputs = page.locator(".react-date-picker__inputGroup input");

    }

    async navigateToPage() {
        await this.page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    }

    async openCalendar() {
        await this.datePickerBox.click();
    }

    async navigateToYearSelector() {
        await this.calendarNavigationLabel.click();
        await this.calendarNavigationLabel.click();
    }

    async scrollToPreviousDecade(numberOfClicks: number) {
        for (let i = 0; i < numberOfClicks; i++) {
            await this.calendarNavigationBackArrow.click();
        }
    }

    async selectYear(year: string) {
        await this.page.getByText(year).click();
    }

    async selectMonth(monthNumber: string) {
        const monthIndex = Number(monthNumber) - 1;
        await this.calendarSelectMonth.nth(monthIndex).click();
    }

    async selectDay(day: string) {
        await this.page.locator(`//abbr[text()='${day}']`).click();
    }

    async selectDate(year: string, month: string, day: string) {
        await this.openCalendar();
        await this.navigateToYearSelector();
        await this.scrollToPreviousDecade(4);
        await this.selectYear(year);
        await this.selectMonth(month);
        await this.selectDay(day);
    }

    async verifySelectedDate(expectedDay: string, expectedMonth: string, expectedYear: string) {
        const inputs = await this.dateInputs.all();
    
        if (inputs.length >= 4) {
            const fullDate = await inputs[0].inputValue();
            const expectedFullDate = `${expectedYear}-${expectedMonth.padStart(2, '0')}-${expectedDay.padStart(2, '0')}`;
            expect(fullDate).toEqual(expectedFullDate);
        }
        expect(await inputs[1].inputValue()).toEqual(expectedMonth);
        expect(await inputs[2].inputValue()).toEqual(expectedDay);   
        expect(await inputs[3].inputValue()).toEqual(expectedYear);  
    }



}