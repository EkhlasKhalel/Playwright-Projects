import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ChallengePage extends BasePage {
  readonly challengeButton: Locator;
  readonly firstnameField: Locator;
  readonly lastnameField: Locator;
  readonly jobtitleField: Locator;
  readonly radiolevelOption: Locator;
  readonly genderOption: Locator;
  readonly yearsofexperienceOption: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    super(page);
    this.challengeButton = page.locator('[href="Challenge.html"]');
    this.firstnameField = page.locator('[id="first-name"]');
    this.lastnameField = page.locator('[id="last-name"]');
    this.jobtitleField = page.locator('[id="job-title"]');
    this.radiolevelOption = page.locator('[id="radio-button-1"]');
    this.genderOption = page.locator('[id="checkbox-3"]');
    this.yearsofexperienceOption = page.locator('[id="select-menu"]');
    this.submitButton = page.locator('[id="submit-btn"]');
  }

  async clickonchallengeButton() {
    await this.clickonElement(this.challengeButton);
  }

  async fillForm(firstName: string, lastName: string, jobTitle: string, yearsOfExperience: string) {
   
    await this.firstnameField.fill(firstName);
    await this.lastnameField.fill(lastName);
    await this.jobtitleField.fill(jobTitle);
    await this.radiolevelOption.check();
    await this.genderOption.check();
    await this.yearsofexperienceOption.selectOption(yearsOfExperience);
  }

  async submit() {
    await this.submitButton.click();
  }
}
