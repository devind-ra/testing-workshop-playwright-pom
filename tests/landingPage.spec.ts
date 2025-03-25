import {test} from "@playwright/test";
import LandingPage from "./pages/landingPage";

test.skip(`Page object model test for landing page`, async ({ page }): Promise<void> => {
    const landingPage: LandingPage = new LandingPage(page);
    await landingPage.checkPageLoads(page);
    // await landingPage.continueOn();
});