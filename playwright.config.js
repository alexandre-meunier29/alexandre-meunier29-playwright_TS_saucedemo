// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';
import { trace } from 'console';

const config = ({
  testDir: './tests',
  expect : {
    timeout: 20*1000,
  },
  reporter: 'html',

  use: {
    browserName : 'chromium',
    headless : false,
    screenshot : 'off',
    trace : 'retain-on-failure'


  },

});
module.exports = config
