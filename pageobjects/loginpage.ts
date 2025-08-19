import {test,expect, Page} from '@playwright/test';


export default class loginPage{
    constructor(private page:Page){}

async goto() {
    await this.page.goto('https://rahulshettyacademy.com/client');
  }
async login(username: string, password: string) {
    await this.page.fill('#userEmail', username);
    await this.page.fill('#userPassword', password);
    await this.page.click('//input[@id="login"]');
  }

async assertSucessLogin(){
    await expect(this.page.locator("div#res").nth(0)).toContainText("Showing 3 results");
}

}