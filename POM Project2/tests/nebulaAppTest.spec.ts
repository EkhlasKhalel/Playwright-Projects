import { test } from '@playwright/test';
import { NebulaLoginPage, NebulaAlertPage, NebulaDragDropPage } from '../pages';
import { Constants } from '../utilities/Constants';
import { Actions } from '../utilities/Actions';


  test("E2E Scenario - Dialog Handling and Drag Drop", async ({ page }) => {
    // Initialize page objects
    let nebulaLoginPage = new NebulaLoginPage(page);
    let nebulaAlertPage = new NebulaAlertPage(page);
    let nebulaDragDropPage = new NebulaDragDropPage(page);

    // Navigate to Nebula application
    await nebulaLoginPage.goto(Constants.NEBULA_APP_URL);

    // Test 1: Login
    await nebulaLoginPage.login(Constants.NEBULA_USERNAME, Constants.NEBULA_PASSWORD);
    await Actions.verifyUrl(page, Constants.NEBULA_APP_URL);

    // Test 2: Alert Handling
    await nebulaAlertPage.handleAlert();

    // Test 3: Prompt Handling - Accept Option
  
    await nebulaAlertPage.handlePromptAccept("Playwright Automation");
    
    // Test 4: Prompt Handling - Dismiss Option
    
    await nebulaAlertPage.handlePromptDismiss();

    // Test 5: Drag and Drop Handling
    
    await nebulaDragDropPage.dragAndDrop();
    await Actions.wait(page,2000);
    
  });
