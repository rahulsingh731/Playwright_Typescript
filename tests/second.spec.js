import {test as base, expect} from '@playwright/test';
//fixtures example


const test = base.extend({
    loginPage: async({browser},use)=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/client');
    await page.fill('//input[@id="userEmail"]', 'rahulsingh@test.com');
    await page.fill('//input[@id="userPassword"]',"Test@123");
    await page.click('//input[@id="login"]');
    await use(page); //to use the page in the test
    await context.close();
    }
});

test("Navigate to Home Page",async({loginPage})=>{
    console.log(await loginPage.title());
    await expect(loginPage.locator("div#res").nth(0)).toContainText("Showing 3 results");
});