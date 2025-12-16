
import { Page, Locator, Dialog } from '@playwright/test';
import { BasePage } from './BasePage';

export class NebulaAlertPage extends BasePage {
  readonly alertButton: Locator;
  readonly promptButton: Locator;

  constructor(page: Page) {
    super(page);
    this.alertButton = page.locator('[id="btn-alert"]');
    this.promptButton = page.locator('[id="btn-prompt"]');
  }

  async handleAlert() {
    this.page.once('dialog', async (dialog: Dialog) => {
      console.log('Alert message', dialog.message());
      await dialog.accept();
    });
    await this.alertButton.click();
  }

  async handlePromptAccept(input: string) {
    this.page.once('dialog', async (dialog: Dialog) => {
      console.log('Prompt dialog:', dialog.message());
      await dialog.accept(input);
    });
    await this.promptButton.click();
  }

  async handlePromptDismiss() {
    this.page.once('dialog', async (dialog: Dialog) => {
      console.log('Prompt dialog:', dialog.message());
      await dialog.dismiss();
    });
    await this.promptButton.click();
  }
}

