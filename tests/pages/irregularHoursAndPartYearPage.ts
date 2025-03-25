import { Page, type Locator } from 'playwright';
import {expect} from "@playwright/test";
import irregularHoursAndPartYear_content from "../content/irregularHoursAndPartYearPage_content";

export class IrregularHoursAndPartYearPage {
    private readonly page: Page;
    private readonly title: string;
    private readonly caption: string;
    private readonly heading: string;
    private readonly text_line1: string;
    private readonly day_label: string;
    private readonly month_label: string;
    private readonly year_label: string;
    private readonly continue_button: Locator;
    private readonly your_answers_subheading: string;
    private readonly previous_page_heading: string;
    private readonly start_again_link: Locator;
    private readonly change_link: Locator;
    private readonly date: Date; 

    constructor(page: Page) {
        this.date = new Date();
        this.page = page;
        this.title = irregularHoursAndPartYear_content.pageTitle;
        this.caption = irregularHoursAndPartYear_content.caption;
        this.heading = irregularHoursAndPartYear_content.heading;
        this.text_line1 = irregularHoursAndPartYear_content.text_line1;
        this.day_label = irregularHoursAndPartYear_content.day_label;
        this.month_label = irregularHoursAndPartYear_content.month_label;
        this.year_label = irregularHoursAndPartYear_content.year_label; 
        this.continue_button = page.getByRole('button', { name: irregularHoursAndPartYear_content.continue_button });
        this.your_answers_subheading = irregularHoursAndPartYear_content.your_answers_subheading;
        this.previous_page_heading = irregularHoursAndPartYear_content.previous_page_heading;
        this.start_again_link = page.locator('a', { hasText: irregularHoursAndPartYear_content.start_again_link });
        this.change_link = page.locator('a', { hasText: irregularHoursAndPartYear_content.change_link }).nth(2);
    }

    async checkPageLoads(page: Page): Promise<void> {
        // Check all elements of the page

        // await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year');

        await Promise.all([
            await expect(this.continue_button).toBeVisible(),
            await expect(page).toHaveTitle(this.title),
            await expect(page.getByText(this.caption)).toBeVisible(),
            await expect(page.getByRole('heading', { name: this.heading })).toBeVisible(),
            await expect(page.getByText(this.text_line1)).toBeVisible(),
            await expect(page.getByLabel(this.day_label)).toBeVisible(),
            await expect(page.getByLabel(this.month_label)).toBeVisible(),
            await expect(page.getByLabel(this.year_label)).toBeVisible(),
            await expect(page.getByText(this.your_answers_subheading)).toBeVisible(),
            await expect(page.getByText(this.previous_page_heading).nth(0)).toBeVisible(),
            await expect(this.start_again_link).toBeVisible(),
            await expect(this.change_link).toBeVisible(),
        ]);
    }

    async enterDate(): Promise<void> {
        await this.page.getByLabel(irregularHoursAndPartYear_content.day_label).fill(this.date.getUTCDate().toString())
        await this.page.getByLabel(irregularHoursAndPartYear_content.month_label).fill((this.date.getUTCMonth()+1).toString())
        await this.page.getByLabel(irregularHoursAndPartYear_content.year_label).fill(this.date.getUTCFullYear().toString())
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

export default IrregularHoursAndPartYearPage;
