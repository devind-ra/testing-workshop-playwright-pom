import {test} from "@playwright/test";
import IrregularHoursAndPartYearPage from "./pages/irregularHoursAndPartYearPage";

test.only(`Page object model happy path for second test`, async ({ page }): Promise<void> => {
    const irregularHoursAndPartYearPage: IrregularHoursAndPartYearPage = new IrregularHoursAndPartYearPage(page);
    await irregularHoursAndPartYearPage.checkPageLoads(page);
    await irregularHoursAndPartYearPage.enterDate();
    await irregularHoursAndPartYearPage.continueOn();
});