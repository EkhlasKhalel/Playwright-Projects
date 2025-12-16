
import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class NebulaDragDropPage extends BasePage {
  readonly dragSource: Locator;
  readonly dropDestination: Locator;

  constructor(page: Page) {
    super(page);
    this.dragSource = page.locator('[id="draggable-Item-A"]');
    this.dropDestination = page.locator('[id="drop-right"]');
  }

  async dragAndDrop() {
    await this.dragSource.hover();
    await this.page.mouse.down();
    await this.dropDestination.hover();
    await this.page.mouse.up();
  }
}

