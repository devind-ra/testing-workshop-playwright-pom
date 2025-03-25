import {test} from "@playwright/test";
import SummaryPage from "./pages/summaryPage";

test(`Page object model happy path for second test`, async ({ page }): Promise<void> => {
    const summaryPage: SummaryPage = new SummaryPage(page);
    await summaryPage.checkPageLoads(page);
});