import {test} from "@playwright/test";
import LandingPage from "./pages/landingPage";
import Y_IrregularPage from "./pages/y_irregularPage";
import IrregularHoursAndPartYearPage from "./pages/irregularHoursAndPartYearPage";
import HoursWorkedPayPeriodPage from "./pages/hoursWorkedPayPeriodPage";

test(`Page object model happy path`, async ({ page }): Promise<void> => {
    const landingPage: LandingPage = new LandingPage(page);
    await landingPage.checkPageLoads(page);
    await landingPage.continueOn();

    const y_irregularPage: Y_IrregularPage = new Y_IrregularPage(page);
    await y_irregularPage.checkPageLoads(page);
    await y_irregularPage.clickYesButton();
    await y_irregularPage.continueOn();

    const irregularHoursAndPartYearPage: IrregularHoursAndPartYearPage = new IrregularHoursAndPartYearPage(page);
    await irregularHoursAndPartYearPage.checkPageLoads(page);
    await irregularHoursAndPartYearPage.enterDate();
    await irregularHoursAndPartYearPage.continueOn();

    const hoursWorkedPayPeriodPage: HoursWorkedPayPeriodPage = new HoursWorkedPayPeriodPage(page);
    await hoursWorkedPayPeriodPage.checkPageLoads(page);
    await hoursWorkedPayPeriodPage.enterHours();
    await hoursWorkedPayPeriodPage.continueOn();
});

test(`Page object model unhappy path - leave year error`, async ({ page }): Promise<void> => {
    const landingPage: LandingPage = new LandingPage(page);
    await landingPage.checkPageLoads(page);
    await landingPage.continueOn();

    const y_irregularPage: Y_IrregularPage = new Y_IrregularPage(page);
    await y_irregularPage.checkPageLoads(page);
    await y_irregularPage.clickYesButton();
    await y_irregularPage.continueOn();

    const irregularHoursAndPartYearPage: IrregularHoursAndPartYearPage = new IrregularHoursAndPartYearPage(page);
    await irregularHoursAndPartYearPage.checkPageLoads(page);
    await irregularHoursAndPartYearPage.continueOn();
    await irregularHoursAndPartYearPage.checkForErrorMessage();
});

