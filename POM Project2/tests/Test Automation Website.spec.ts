import { test } from '@playwright/test';
import { LoginPage, ClickingPage, CheckboxRadioPage, ScrollingPage, MouseActionsPage, DropdownPage, ChallengePage } from '../pages';
import { Constants } from '../utilities/Constants';
import { Actions } from '../utilities/Actions';

test("Automating a E2E senario Test Automation Practice website", async ({ page }) => {
  let loginPage = new LoginPage(page);
  let clickingPage = new ClickingPage(page);
  let checkboxRadioPage = new CheckboxRadioPage(page);
  let scrollingPage = new ScrollingPage(page);
  let mouseActionsPage = new MouseActionsPage(page);
  let dropdownPage = new DropdownPage(page);
  let challengePage = new ChallengePage(page);

  await loginPage.goto(Constants.PRACTICE_APP_URL);
  await loginPage.login(Constants.PRACTICE_USERNAME, Constants.PRACTICE_PASSWORD);
  await Actions.verifyUrl(page, Constants.PRACTICE_MAIN_PAGE_URL);

  await clickingPage.navigate();
  await clickingPage.submit();
  await clickingPage.goBack();

  await checkboxRadioPage.navigate();
  await checkboxRadioPage.selectCheckbox();
  await checkboxRadioPage.selectRadioButton();
  await checkboxRadioPage.goBack();

  await scrollingPage.navigate();
  await scrollingPage.scrollToElement();
  await scrollingPage.goBack();

  await mouseActionsPage.navigate();
  await mouseActionsPage.doubleClick();
  await mouseActionsPage.rightClick();
  await mouseActionsPage.goBack();

  await dropdownPage.navigate();
  await dropdownPage.selectOption(Constants.DROPDOWN_VALUE);
  await dropdownPage.goBack();

  await challengePage.navigate();
  await challengePage.fillForm(
    Constants.TEST_FIRST_NAME,
    Constants.TEST_LAST_NAME,
    Constants.TEST_JOB_TITLE,
    Constants.TEST_YEARS_OF_EXPERIENCE
  );
  await challengePage.submit();
  await Actions.wait(page, 3000);
});