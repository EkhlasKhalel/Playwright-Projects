

import {test, expect, Locator} from '@playwright/test';

test("Automatinig a E2E senario Test Automation Practice website", async ({page}) => {
let userNameFiled:Locator = page.locator('[id="inputUsername"]') 
let passwordField:Locator = page.locator('[id="inputPassword"]')
let rememberMeCheckbox:Locator = page.locator('[type="checkbox"]')
let signInButton:Locator = page.locator('[id="loginButton"]')
let clickingButton:Locator = page.locator('[href="clicking.html"]')
let submitButton:Locator = page.locator('[id="submit-btn"]')  
let checkboxButton:Locator = page.locator('[href="checkbox_Radio.html"]')    
let checkboxoptions:Locator = page.locator('[id="Ahly"]')
let radiobuttonoptions:Locator = page.locator('[id="radio-button-3"]')
let scrollingElement:Locator = page.locator('[href="scrolling.html"]')   
const scrollingfiled:Locator = page.locator('[id="scroll_text"]')
let  mouseActionsButton:Locator = page.locator('[href="mouse.html"]')  
let doubleClickButton:Locator = page.locator('[id="dblClickBtn"]')
let rightClickButton:Locator = page.locator('[id="riClickBtn"]')
let dropdownButton:Locator = page.locator('[href="dropDown.html"]')
let dropdownOptions:Locator = page.locator('.container')
let challengeButton:Locator = page.locator('[href="Challenge.html"]')
let firstnameField:Locator = page.locator('[id="first-name"]')
let lastnameField:Locator = page.locator('[id="last-name"]')
let jobtitleField:Locator = page.locator('[id="job-title"]')
let radiolevelOption:Locator = page.locator('[id="radio-button-1"]')
let genderOption:Locator = page.locator('[id="checkbox-3"]')
let yearsofexperienceOption:Locator = page.locator('[id="select-menu"]')
submitButton = page.locator('[id="submit-btn"]')

    await page.goto("https://aa-practice-test-automation.vercel.app/#");
    await userNameFiled.fill("admin");
    await passwordField.fill("admin");
    await rememberMeCheckbox.check();
    await signInButton.click();
    await expect(page).toHaveURL('https://aa-practice-test-automation.vercel.app/Pages/main.html');
    await clickingButton.click();
    await submitButton.click();
    await page.goBack();
    await checkboxButton.click();
    await checkboxoptions.check();
    await radiobuttonoptions.check();
    await page.goBack();
    await scrollingElement.click();
    await scrollingfiled.scrollIntoViewIfNeeded();
    await page.goBack();
    await mouseActionsButton.click();
    await doubleClickButton.dblclick();
    await rightClickButton.click({button:'right'});
    await page.goBack();
    await dropdownButton.click();
    await dropdownOptions.selectOption("1");
    await page.goBack();
    await challengeButton.click();
    await firstnameField.fill("John");
    await lastnameField.fill("Doe");
    await jobtitleField.fill("QA Engineer");    
    await radiolevelOption.check();
    await genderOption.check();
    await yearsofexperienceOption.selectOption("5-9");
    await submitButton.click();
    await page.waitForTimeout(3000);
});


test("Automatinig a E2E senario Nebula TestLab", async ({page}) =>{
    let userNameFiled:Locator = page.locator('[id="username-input"]')
    let passwordField:Locator = page.locator('[id="password-input"]')
    let signInButton:Locator = page.locator('[id="btn-login"]')
    let alertbutton:Locator = page.locator('[id="btn-alert"]')  
     const promptbutton:Locator = page.locator('[id="btn-prompt"]')
     let dragsource:Locator = page.locator('[id="draggable-Item-A"]')
    let dropdestination:Locator = page.locator('[id="drop-right"]')


    await page.goto("https://nebula-test-lab-lv1.vercel.app/");
    await userNameFiled.fill("trainer");
    await passwordField.fill("selenium123");
    await signInButton.click();
    await expect(page).toHaveURL('https://nebula-test-lab-lv1.vercel.app/');

    //Alert Handling
   page.once('dialog', async dialog => {
    console.log("Alert message",dialog.message());
    await dialog.accept();  
    });
    await alertbutton.click();

    //Prompt Handling ok option 
    
    page.once('dialog', async dialog => {
    console.log("Prompt dialog:", dialog.message());
    await dialog.accept("Playwright Automation");  
    
    });
    await promptbutton.click();
    await page.waitForTimeout(1000);

    //Prompt Handling cancel option
    page.once('dialog', async dialog => {
    console.log("Prompt dialog:", dialog.message());
    await dialog.dismiss(); 

    await promptbutton.click();

});

//drag and drop handling
await dragsource.hover;
await page.mouse.down();
await dropdestination.hover;
await page.mouse.up();
await page.waitForTimeout(3000);
});