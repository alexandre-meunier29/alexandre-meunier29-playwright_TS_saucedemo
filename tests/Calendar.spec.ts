import { test, expect } from '@playwright/test';
import { POManager } from '../pageobjects/POManager';

test("Pick my birth date in calendar", async ({ page }) => {
    const poManager = new POManager(page);
    const year = "1989";
    const month = "12";
    const day = "21";

    const calendarPage = poManager.getCalendarPage();
    await calendarPage.navigateToPage();
    await calendarPage.selectDate(year, month, day);
    await calendarPage.verifySelectedDate(day, month, year);
});