import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [['html', { open: 'false' }],
 ['allure-playwright']],
  //Parallel execution & retries set
  workers: 4,
  fullyParallel: true,
  retries: 2,

  use: {
    screenshot: 'only-on-failure',
    video: 'on',
    trace: 'retain-on-failure'
  }
});
