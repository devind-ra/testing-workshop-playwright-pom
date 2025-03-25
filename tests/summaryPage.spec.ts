import {test} from "@playwright/test";
import SummaryPage from "./pages/summaryPage";

test.skip(`Page object model test for summary page`, async ({ page }): Promise<void> => {
    const summaryPage: SummaryPage = new SummaryPage(page);
    await summaryPage.checkPageLoads(page);
});