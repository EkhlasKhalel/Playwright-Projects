import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class NebulaLoginPage extends BasePage {
  readonly userNameField: Locator;
  readonly passwordField: Locator;
  readonly signInButton: Locator;

  constructor(page: Page) {
    super(page);
    this.userNameField = page.locator('[id="username-input"]');
    this.passwordField = page.locator('[id="password-input"]');
    this.signInButton = page.locator('[id="btn-login"]');
  }

  async login(username: string, password: string) {
    await this.userNameField.fill(username);
    await this.passwordField.fill(password);
    await this.signInButton.click();
  }
}
