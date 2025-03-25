import { Page, type Locator } from 'playwright';
import {expect} from "@playwright/test";
import y_irregularPage_content from "../content/y_irregularPage_content";

export class Y_IrregularPage {
    private readonly page: Page;
    private readonly title: string;
    private readonly heading: string;
    private readonly text_line1: string;
    private readonly continue_button: Locator;
    private readonly yes_radio_button: Locator;
    private readonly no_radio_button: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.title = y_irregularPage_content.pageTitle;
        this.heading = y_irregularPage_content.heading;
        this.text_line1 = y_irregularPage_content.text_line1;
        this.yes_radio_button = page.locator('#response-0');
        this.no_radio_button = page.locator('#response-1');
        this.continue_button = page.getByRole('button', { name: 'Continue' });
    }

    async checkPageLoads(page: Page): Promise<void> {
        // Navigate to the landing page
        // await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement/y');

        // Check all elements of the page
        await Promise.all([
            await expect(page).toHaveTitle(this.title),
            await expect(page.getByRole('heading', { name: this.heading })).toBeVisible(),
            await expect(page.getByText(this.text_line1)).toBeVisible(),
            await expect(this.yes_radio_button).toBeVisible(),
            await expect(this.no_radio_button).toBeVisible(),
            await expect(this.continue_button).toBeVisible(),
        ]);
    }

    async clickYesButton(): Promise<void> {
        await this.yes_radio_button.click();
    }

    async continueOn(): Promise<void> {
        await this.continue_button.click();
    }
}

export default Y_IrregularPage;
