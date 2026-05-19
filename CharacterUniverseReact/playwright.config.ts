import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  testMatch: '**/*.e2e.test.ts',
  use: {
    trace: 'on-first-retry',
    baseURL: 'http://localhost:5178',
  },
});
