import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class MouseActionsPage extends BasePage {
  readonly mouseActionsButton: Locator;
  readonly doubleClickButton: Locator;
  readonly rightClickButton: Locator;

  constructor(page: Page) {
    super(page);
    this.mouseActionsButton = page.locator('[href="mouse.html"]');
    this.doubleClickButton = page.locator('[id="dblClickBtn"]');
    this.rightClickButton = page.locator('[id="riClickBtn"]');
  }

  async clickonmouseActionsButton() {
    await this.clickonElement(this.mouseActionsButton);
  }

  async doubleClick() {
    await this.doubleClickButton.dblclick();
  }

  async rightClick() {
    await this.rightClickButton.click({ button: 'right' });
  }
  async goBack() {
    await this.page.goBack();
  }
}
