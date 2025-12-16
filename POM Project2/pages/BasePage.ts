import { Locator, Page } from '@playwright/test';


export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string) {
    await this.page.goto(url);
  }

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async goBack() {
    await this.page.goBack();
  }
  async clickonElement(element: Locator) {
    await element.click();
  }

  async waitForTimeout(Timeout: number) {
    await this.page.waitForTimeout(Timeout);
  }

}
