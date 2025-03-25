import {test} from "@playwright/test";
import HoursWorkedPayPeriodPage from "./pages/hoursWorkedPayPeriodPage";

test(`Page object model test for hours worked pay period page`, async ({ page }): Promise<void> => {
    const hoursWorkedPayPeriodPage: HoursWorkedPayPeriodPage = new HoursWorkedPayPeriodPage(page);
    await hoursWorkedPayPeriodPage.checkPageLoads(page);
    await hoursWorkedPayPeriodPage.enterHours();
    await hoursWorkedPayPeriodPage.continueOn();
});