import {test,expect, webkit} from '@playwright/test';

test('Basic QA Test', async () => {
    const browser = await webkit.launch({headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");
    
    const items = await page.locator("div.product");
    const count = await items.count();
    for(let i=0;i<count;i++){
        const text = await items.nth(i).locator("h4").textContent();
        if(text.includes("Raspberry - 1/4 Kg")){
            await items.nth(i).locator("button").click();
            break;
        }
    }
    await page.waitForTimeout(10000);
    await page.close();
    await context.close();
    await browser.close();

    // await page.pause();
});
