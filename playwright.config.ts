import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

const baseURL = process.env.BASE_URL;
const defaultTimeout = Number(process.env.DEFAULT_TIMEOUT) || 30000;
const expectTimeout = Number(process.env.EXPECT_TIMEOUT) || 5000;

if (!baseURL) {
  throw new Error('BASE_URL is not defined. Please check your .env file.');
}

export default defineConfig({
  testDir: './tests/specs',
  timeout: defaultTimeout,
  expect: {
    timeout: expectTimeout,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { open: 'never' }], ['list']],

  use: {
    baseURL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
