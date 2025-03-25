import { Page, type Locator } from 'playwright';
import {expect} from "@playwright/test";
import hoursWorkedPayPeriodPage_content from "../content/hoursWorkedPayPeriod_content";

export class HoursWorkedPayPeriodPage {
    private readonly page: Page;
    private readonly title: string;
    private readonly caption: string;
    private readonly heading: string;
    private readonly hours_label: Locator;
    private readonly continue_button: Locator;
    private readonly your_answers_subheading: string;
    private readonly previous_page_heading: string;
    private readonly start_again_link: Locator;
    private readonly change_link: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = hoursWorkedPayPeriodPage_content.pageTitle;
        this.caption = hoursWorkedPayPeriodPage_content.caption;
        this.heading = hoursWorkedPayPeriodPage_content.heading;
        this.hours_label = page.locator('#response')
        this.continue_button = page.getByRole('button', { name: hoursWorkedPayPeriodPage_content.continue_button });
        this.your_answers_subheading = hoursWorkedPayPeriodPage_content.your_answers_subheading;
        this.previous_page_heading = hoursWorkedPayPeriodPage_content.previous_page_heading;
        this.start_again_link = page.locator('a', { hasText: hoursWorkedPayPeriodPage_content.start_again_link });
        this.change_link = page.locator('a', { hasText: hoursWorkedPayPeriodPage_content.change_link }).nth(2);
    }
    
    async checkPageLoads(page: Page): Promise<void> {
        // Navigate to the landing page
        // await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year/2025-03-25');

        // Check all elements of the page
        await Promise.all([
            await expect(page).toHaveTitle(this.title),
            await expect(page.getByText(this.caption)).toBeVisible(),
            await expect(page.getByRole('heading', { name: this.heading })).toBeVisible(),
            await expect(page.getByText(this.your_answers_subheading)).toBeVisible(),
            await expect(page.getByText(this.previous_page_heading).nth(0)).toBeVisible(),
            await expect(this.start_again_link).toBeVisible(),
            await expect(this.change_link).toBeVisible(),
        ]);
    }

    async enterHours(): Promise<void> {
        await this.hours_label.fill('100');
    }

    async startAgain(): Promise<void> {
        await this.start_again_link.click();
    }

    async change(): Promise<void> {
        await this.change_link.click();
    }

    async continueOn(): Promise<void> {
        await this.continue_button.click();
    }
}

export default HoursWorkedPayPeriodPage;
