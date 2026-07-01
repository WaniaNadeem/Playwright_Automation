/*import {Locator, Page} from '@playwright/test';

export default class LoginPage {
    readonly loginField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;


  constructor(page: Page) {
    this.loginField = page.getByRole('textbox', { name: 'Username' });
    this.passwordField = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }
  async EnterUsername(username: string) {
    await this.loginField.fill(username);
  }
}*/

import { Page, Locator, expect } from '@playwright/test';
import { URLS } from '../Fixtures/Constants';
 
export default class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly errorMessage: Locator;
 
  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByRole('textbox', { name: 'username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.errorMessage = page.locator('#error');
  }
 
  // Navigate to the login page
  async goto() {
    await this.page.goto(URLS.LOGIN_PAGE);
  }
 
  // Fill username field (with visibility check)
  async fillUsername(username: string) {
    await expect(this.usernameInput).toBeVisible();
    await this.usernameInput.fill(username);
  }
 
  // Fill password field (with visibility check)
  async fillPassword(password: string) {
    await expect(this.passwordInput).toBeVisible();
    await this.passwordInput.fill(password);
  }
 
  // Click submit button (with enabled check)
  async clickSubmit() {
    await expect(this.submitButton).toBeEnabled();
    await this.submitButton.click();
  }
 
  // Full login flow - fills both fields and submits
  async login(username: string, password: string) {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickSubmit();
  }
 
  // Validate error message text is shown correctly
  async verifyErrorMessage(expectedText: string) {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toHaveText(expectedText);
  }
 
  // Validate successful login redirect
  async verifySuccessfulLogin() {
    await expect(this.page).toHaveURL(URLS.LOGGED_IN_URL_PATTERN);
  }
}