import { test as base, expect } from '@playwright/test';
import { SignUpPage } from '../pages/SignUpPage';

type MyFixtures = {
  signUpPage: SignUpPage;
};

export const test = base.extend<MyFixtures>({
  signUpPage: async ({ page }, use) => {
    const signUpPage = new SignUpPage(page);
    await use(signUpPage);
  },
});

export { expect };
