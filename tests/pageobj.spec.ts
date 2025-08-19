import { test } from '@playwright/test';
import loginPage from '../pageobjects/loginpage';


test.beforeEach(()=>{
test.info().annotations.push({ type: 'feature', description: 'Rahul Shetty Academy' });
  test.info().annotations.push({ type: 'story', description: 'When user tries to login into website' });
  test.info().annotations.push({ type: 'severity', description: 'low' });
  test.info().annotations.push({ type: 'owner', description: 'QA Team' });
})


test('Login Test using POM', async ({ page }) => {
  const lp = new loginPage(page);

  await lp.goto();
  await lp.login('rahulsingh@test.com', 'Test@123');
  await lp.assertSucessLogin();
});
test.afterEach(async ({ page }) => {
  console.log('✅ Test finished');
});