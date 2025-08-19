import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [['html', { open: 'false' }]],
  //Parallel execution & retries set
  workers: 2,
  fullyParallel: true,
  retries: 2
});
