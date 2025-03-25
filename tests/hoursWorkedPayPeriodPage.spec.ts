import {test} from "@playwright/test";
import hoursWorkedPayPeriod, { HoursWorkedPayPeriodPage } from "./pages/hoursWorkedPayPeriodPage";

test.only(`Page object model happy path for second test`, async ({ page }): Promise<void> => {
    const hoursWorkedPayPeriodPage: HoursWorkedPayPeriodPage = new HoursWorkedPayPeriodPage(page);
    await hoursWorkedPayPeriodPage.checkPageLoads(page);
    await hoursWorkedPayPeriodPage.enterHours();
    await hoursWorkedPayPeriodPage.continueOn();
});