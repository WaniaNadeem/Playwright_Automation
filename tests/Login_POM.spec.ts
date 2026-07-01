import { test } from '@playwright/test';
import LoginPage from '../Pages/Login';
import { VALID_CREDENTIALS, INVALID_CREDENTIALS, ERROR_MESSAGES } from '../Fixtures/Constants';
 
test.describe('Login Page', () => {
  test('Verify user can login in to the system with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
 
    await loginPage.goto();
    await loginPage.login(VALID_CREDENTIALS.USERNAME, VALID_CREDENTIALS.PASSWORD);
    await loginPage.verifySuccessfulLogin();
  });
});
 
test.describe('Negative username test', () => {
  test('Verify user cannot login in the system with invalid username', async ({ page }) => {
    const loginPage = new LoginPage(page);
 
    await loginPage.goto();
    await loginPage.login(INVALID_CREDENTIALS.USERNAME, VALID_CREDENTIALS.PASSWORD);
    await loginPage.verifyErrorMessage(ERROR_MESSAGES.INVALID_USERNAME);
  });
});
 
test.describe('Negative password test', () => {
  test('Verify user cannot login in the system with invalid Password', async ({ page }) => {
    const loginPage = new LoginPage(page);
 
    await loginPage.goto();
    await loginPage.login(VALID_CREDENTIALS.USERNAME, INVALID_CREDENTIALS.PASSWORD);
    await loginPage.verifyErrorMessage(ERROR_MESSAGES.INVALID_PASSWORD);
  });
});
 