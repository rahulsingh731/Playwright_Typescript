import { test } from '@playwright/test';
import loginPage from '../pageobjects/loginpage';

test('Login Test using POM', async ({ page }) => {
  const lp = new loginPage(page);

  await lp.goto();
  await lp.login('rahulsingh@test.com', 'Test@123');
  await lp.assertSucessLogin();
});
test.afterEach(async ({ page }) => {
  console.log('✅ Test finished');
});