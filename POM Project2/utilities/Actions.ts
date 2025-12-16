import { expect, Page } from '@playwright/test';

export class Actions {

 
  //Verify page URL
  
  static async verifyUrl(page: Page, expectedUrl: string) {
    await expect(page).toHaveURL(expectedUrl);
  }

  // Wait for specific time
  
   static async wait(page: Page, Timeout: number) {
    await page.waitForTimeout(Timeout);
  }

  


}
