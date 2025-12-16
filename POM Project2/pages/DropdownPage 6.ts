import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class DropdownPage extends BasePage {
  readonly dropdownButton: Locator;
  readonly dropdownOptions: Locator;

  constructor(page: Page) {
    super(page);
    this.dropdownButton = page.locator('[href="dropDown.html"]');
    this.dropdownOptions = page.locator('.container');
  }

  async clickondropdownButton() {
    await this.clickonElement(this.dropdownButton);
  }

  async selectOption(value: string) {
    await this.dropdownOptions.selectOption(value);
  }
  async goBack() {
    await this.page.goBack();
  }
}
