import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';

test('valid user', async ({ page }) => {
const loginPage = new LoginPage(page);
await loginPage.visit();
await loginPage.login('standard_user','secret_sauce');
expect(await loginPage.getPageTitle()).toBe('Products');
});

test('locked_out_user', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.visit();
  await loginPage.login('locked_out_user','secret_sauce');
  expect(await loginPage.getErrorMessage()).toContain('user has been locked out');
  });

