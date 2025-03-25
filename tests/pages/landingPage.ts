import { Page, type Locator } from 'playwright';
import {expect} from "@playwright/test";
import landingPage_content from "../content/landingPage_content";

export class LandingPage {
    private readonly page: Page;
    private readonly title: string;
    private readonly heading: string;
    private readonly text_line1: string;
    private readonly text_line2: string;
    private readonly list_item1: string;
    private readonly list_item2: string;
    private readonly start_button: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = landingPage_content.pageTitle;
        this.heading = landingPage_content.heading;
        this.text_line1 = landingPage_content.text_line1;
        this.text_line2 = landingPage_content.text_line2;
        this.list_item1 = landingPage_content.list_item1;
        this.list_item2 = landingPage_content.list_item2;
        this.start_button = page.locator('a', { hasText: landingPage_content.start_button });
    }

    async checkPageLoads(page: Page): Promise<void> {
        // Navigate to the landing page
        await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement');

        // Check all elements of the page
        await Promise.all([
            await expect(this.start_button).toBeVisible(),
            await expect(page).toHaveTitle(this.title),
            await expect(page.getByRole('heading', { name: this.heading })).toBeVisible(),
            await expect(page.getByText(this.text_line1)).toBeVisible(),
            await expect(page.getByText(this.text_line2)).toBeVisible(),
            await expect(page.getByText(this.list_item1)).toBeVisible(),
            await expect(page.getByText(this.list_item2)).toBeVisible(),
        ]);
    }

    async continueOn(): Promise<void> {
        // Click the continue button
        await this.start_button.click();
    }
}

export default LandingPage;
