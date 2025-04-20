// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';
import { trace } from 'console';

const config = ({
  testDir: './tests',
  retries: 1,
  workers: 1,
  expect: {
    timeout: 20 * 1000,
  },

  reporter: [
    ['html'],
    ['allure-playwright', {
      detail: true,
      outputFolder: 'allure-results',
      suiteTitle: false
    }]
  ],

  use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'off',
    trace: 'retain-on-failure'


  },

});
module.exports = config
