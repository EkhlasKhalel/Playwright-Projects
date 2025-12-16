import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckboxRadioPage extends BasePage {
  readonly checkboxButton: Locator;
  readonly checkboxOptions: Locator;
  readonly radiobuttonOptions: Locator;

  constructor(page: Page) {
    super(page);
    this.checkboxButton = page.locator('[href="checkbox_Radio.html"]');
    this.checkboxOptions = page.locator('[id="Ahly"]');
    this.radiobuttonOptions = page.locator('[id="radio-button-3"]');
  }

  async clickonCheckboxButton() {
    await this.clickonElement(this.checkboxButton);
  }

  async selectCheckbox() {
    await this.checkboxOptions.check();
  }

  async selectRadioButton() {
    await this.radiobuttonOptions.check();
  }
  async goBack() {
    await this.page.goBack();
  }
}
