import {test as base, expect} from '@playwright/test';
//fixtures example

test.beforeEach(()=>{

test.info().annotations.push({ type: 'feature', description: 'E-commerce Checkout' });
  test.info().annotations.push({ type: 'story', description: 'Place order with Credit Card' });
  test.info().annotations.push({ type: 'severity', description: 'critical' });
  test.info().annotations.push({ type: 'owner', description: 'QA Team' });
})

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