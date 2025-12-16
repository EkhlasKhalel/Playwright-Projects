import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ScrollingPage extends BasePage {
  readonly scrollingElement: Locator;
  readonly scrollingField: Locator;

  constructor(page: Page) {
    super(page);
    this.scrollingElement = page.locator('[href="scrolling.html"]');
    this.scrollingField = page.locator('[id="scroll_text"]');
  }

  async clickonscrollingElement() {
    await this.clickonElement(this.scrollingElement);
  }

  async scrollToElement() {
    await this.scrollingField.scrollIntoViewIfNeeded();
  }
  async goBack() {
    await this.page.goBack();
  }
}
