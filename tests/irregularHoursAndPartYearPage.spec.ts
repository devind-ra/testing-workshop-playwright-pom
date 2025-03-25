import {test} from "@playwright/test";
import IrregularHoursAndPartYearPage from "./pages/irregularHoursAndPartYearPage";

test.skip(`Page object model test for irregular hours and part year page`, async ({ page }): Promise<void> => {
    const irregularHoursAndPartYearPage: IrregularHoursAndPartYearPage = new IrregularHoursAndPartYearPage(page);
    await irregularHoursAndPartYearPage.checkPageLoads(page);
    await irregularHoursAndPartYearPage.enterDate();
    await irregularHoursAndPartYearPage.continueOn();
});