import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ClickingPage extends BasePage {
  readonly clickingButton: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    super(page);
    this.clickingButton = page.locator('[href="clicking.html"]');
    this.submitButton = page.locator('[id="submit-btn"]');
  }

  async clickonclickingButton() {
    await this.clickonElement(this.clickingButton);
  }

  async submit() {
    await this.submitButton.click();
  }
  async goBack() {
    await this.page.goBack();
  }
}
