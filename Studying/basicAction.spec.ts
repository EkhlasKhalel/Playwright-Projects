


//import {test, expect ,Browser,BrowserContext, Page} from '@playwright/test';

//test("Automatinig a E2E senario saucedemo", async () => {
   // let browser:Browser;
   // let context:BrowserContext;
   // let page:Page;
   // browser = await chromium.launch({ headless: true });
   // context = await browser.newContext();
   // page = await context.newPage();


   import {test, expect, Locator} from '@playwright/test';

test("Automatinig a E2E senario saucedemo", async ({page}) => {
    let userNameFiled:Locator = page.locator('[id="user-name"]')
    let passwordField:Locator = page.locator('[id="password"]') 
    let loginButton:Locator = page.locator('[id="login-button"]')
    let sauceLabsBackpack:Locator = page.locator('[id="item_4_title_link"]') 
    let sauceLabsBackpackPrice:Locator = page.locator('[data-test="inventory-item-price"]') 
    let addToCartButton:Locator = page.locator('[id="add-to-cart"]')
    let shoppingCartElement:Locator = page.locator('[data-test="shopping-cart-badge"]')


    await page.goto("https://www.saucedemo.com/");
    await userNameFiled.fill("standard_user");
    await passwordField.pressSequentially("secret_sauce",{delay:100});
     await loginButton.click();
    //clickonElement(loginButton);
    await page.waitForTimeout(3000);
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
     await sauceLabsBackpack.click();
     await sauceLabsBackpackPrice.textContent();
     console.log(await sauceLabsBackpackPrice.textContent());
     await expect(sauceLabsBackpackPrice).toHaveText("$29.99");
     await addToCartButton.click;

     
  //  clickonElement(sauceLabsBackpack);

});

async function clickonElement(locator: Locator) {
    await locator.click
}

async function getcartContent(locator: Locator) {
    await addToCartButton.click();
}
//if this action didnt
//let outofstockmessage="Out of Stock";
//if( ! visible){

     //shoppingCartElement+++;
//}
