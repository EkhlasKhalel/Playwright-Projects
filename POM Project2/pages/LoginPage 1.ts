import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly userNameField: Locator;
  readonly passwordField: Locator;
  readonly rememberMeCheckbox: Locator;
  readonly signInButton: Locator;

  constructor(page: Page) {
    super(page);
    this.userNameField = page.locator('[id="inputUsername"]');
    this.passwordField = page.locator('[id="inputPassword"]');
    this.rememberMeCheckbox = page.locator('[type="checkbox"]');
    this.signInButton = page.locator('[id="loginButton"]');
  }

  async login(username: string, password: string) {
    await this.userNameField.fill(username);
    await this.passwordField.fill(password);
    await this.rememberMeCheckbox.check();
    await this.signInButton.click();
  }
}
