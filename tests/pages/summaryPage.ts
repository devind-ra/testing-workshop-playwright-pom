import { Page, type Locator } from 'playwright';
import {expect} from "@playwright/test";
import summaryPage_content from '../content/summaryPage_content';

export class SummaryPage {
    private readonly page: Page;
    private readonly title: string;
    private readonly caption: string;
    private readonly heading: string;
    private readonly text_line1: string;
    private readonly text_line2: string;
    private readonly list_heading: string; 
    private readonly list_item1: string; 
    private readonly list_item2: string; 
    private readonly list_item3: string; 
    private readonly list_item4: string; 
    private readonly your_answers_subheading: string;
    private readonly previous_page_heading1: string;
    private readonly previous_page_heading2: string;
    private readonly previous_page_heading3: string;
    private readonly start_again_link: Locator;
    private readonly change_link1: Locator;
    private readonly change_link2: Locator;
    private readonly change_link3: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = summaryPage_content.pageTitle;
        this.caption = summaryPage_content.caption;
        this.heading = summaryPage_content.heading;
        this.text_line1 = summaryPage_content.text_line1;
        this.text_line2 = summaryPage_content.text_line2;
        this.list_heading = summaryPage_content.list_heading;
        this.list_item1 = summaryPage_content.list_item1;
        this.list_item2 = summaryPage_content.list_item2;
        this.list_item3 = summaryPage_content.list_item3;
        this.list_item4 = summaryPage_content.list_item4;
        this.your_answers_subheading = summaryPage_content.your_answers_subheading;
        this.previous_page_heading1 = summaryPage_content.previous_page_heading1;
        this.previous_page_heading2 = summaryPage_content.previous_page_heading2;
        this.previous_page_heading3 = summaryPage_content.previous_page_heading3;
        this.start_again_link = page.locator('a', { hasText: summaryPage_content.start_again_link });
        this.change_link1 = page.locator('a', { hasText: summaryPage_content.change_link });
        this.change_link2 = page.locator('a', { hasText: summaryPage_content.change_link });
        this.change_link3 = page.locator('a', { hasText: summaryPage_content.change_link });
    }

    async checkPageLoads(page: Page): Promise<void> {
        // Check all elements of the page

        // await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year/2025-03-25/100.0');

        await Promise.all([
            await expect(page).toHaveTitle(this.title),
            await expect(page.getByText(this.caption)).toBeVisible(),
            await expect(page.getByRole('heading', { name: this.heading })).toBeVisible(),
            await expect(page.getByText(this.text_line1)).toBeVisible(),
            await expect(page.getByText(this.text_line2)).toBeVisible(),
            await expect(page.getByText(this.list_heading)).toBeVisible(),
            await expect(page.getByText(this.list_item1)).toBeVisible(),
            await expect(page.getByText(this.list_item2)).toBeVisible(),
            await expect(page.getByText(this.list_item3)).toBeVisible(),
            await expect(page.getByText(this.list_item4)).toBeVisible(),
            await expect(page.getByText(this.your_answers_subheading).nth(1)).toBeVisible(),
            await expect(page.getByText(this.previous_page_heading1).nth(0)).toBeVisible(),
            await expect(page.getByText(this.previous_page_heading2).nth(0)).toBeVisible(),
            await expect(page.getByText(this.previous_page_heading3).nth(0)).toBeVisible(),
            await expect(this.start_again_link).toBeVisible(),
            await expect(this.change_link1.nth(2)).toBeVisible(),
            await expect(this.change_link2.nth(3)).toBeVisible(),
            await expect(this.change_link3.nth(4)).toBeVisible(),
        ]);
    }

    async startAgain(): Promise<void> {
        await this.start_again_link.click();
    }

    async changeIrregularHours(): Promise<void> {
        await this.change_link1.click();
    }

    async changeLeaveYearStart(): Promise<void> {
        await this.change_link2.click();
    }

    async changePayPeriodHours(): Promise<void> {
        await this.change_link3.click();
    }
}

export default SummaryPage;
