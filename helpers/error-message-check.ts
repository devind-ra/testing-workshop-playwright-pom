import { Page } from 'playwright';
import { expect } from "@playwright/test";


export class ErrorHelp {
    async checkForErrorMessage(page: Page, errorHeading: string, errorMessage: string): Promise<void> {
        console.log(errorHeading);
        console.log(errorMessage);
        const errorHeadingLocator = page.locator('.govuk-error-summary__title');
        await expect(errorHeadingLocator).toBeVisible();
        await expect(errorHeadingLocator).toHaveText(errorHeading);
    
        const errorTextLocator = page.locator('a', { hasText: errorMessage });
        await expect(errorTextLocator).toBeVisible();
        await expect(errorTextLocator).toHaveText(errorMessage);
    }
}