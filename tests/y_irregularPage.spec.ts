import {test} from "@playwright/test";
import Y_IrregularPage from "./pages/y_irregularPage";

test(`Page object model happy path for second test`, async ({ page }): Promise<void> => {
    const y_irregularPage: Y_IrregularPage = new Y_IrregularPage(page);
    await y_irregularPage.checkPageLoads(page);
    await y_irregularPage.clickYesButton();
    await y_irregularPage.clickContinueButton();
});