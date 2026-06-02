import { test, expect } from '@playwright/test';
test.describe('Login Page', () =>{
test('Verify user can login in to the system with valid credentials', async ({ page }) => {

  await page.goto('https://practicetestautomation.com/practice-test-login/');
 

  // Step 1 - Fill Username
       await expect(page.getByRole('textbox',{name: 'username'})).toBeVisible()
       await page.getByRole('textbox', {name: 'username'}).fill('student');   

//step 2 - fill password
      await expect(page.getByRole('textbox',{name: 'Password'})).toBeVisible()
       await page.getByRole('textbox',{name: 'Password'}).fill('Password123');

// Step 3 - Click button
      await expect(page.getByRole('button',{name: 'Submit'})).toBeEnabled()
      await page.getByRole('button', { name: 'Submit'}).click();
      await expect(page).toHaveURL(/practicetestautomation\.com\/logged-in-successfully\/?/); // URL Visible
      await page.waitForTimeout(1000);
});
});

test.describe('Negative username test', () =>{
test('Verify user cannot login in the system with invalid username', async ({ page }) => {

  await page.goto('https://practicetestautomation.com/practice-test-login/');
 

  // Step 1 - Fill Username
       await expect(page.getByRole('textbox',{name: 'username'})).toBeVisible()
       await page.getByRole('textbox', {name: 'username'}).fill('incorrectUser');   

//step 2 - fill password
      await expect(page.getByRole('textbox',{name: 'Password'})).toBeVisible()
       await page.getByRole('textbox',{name: 'Password'}).fill('Password123');

// Step 3 - Click button
      await expect(page.getByRole('button',{name: 'Submit'})).toBeEnabled()
      await page.getByRole('button', { name: 'Submit'}).click();
// step 4 - Verify error msg
      const errorMessage = page.locator('#error'); // error message is displayed
      await expect(errorMessage).toBeVisible();
      await expect(errorMessage).toHaveText('Your username is invalid!'); // error message Visible
      await page.waitForTimeout(1000);
});
});

test.describe('Negative password test', () =>{
test('Verify user cannot login in the system with invalid Password', async ({ page }) => {

  await page.goto('https://practicetestautomation.com/practice-test-login/');
 

  // Step 1 - Fill Username
       await expect(page.getByRole('textbox',{name: 'username'})).toBeVisible()
       await page.getByRole('textbox', {name: 'username'}).fill('student');   

//step 2 - fill password
      await expect(page.getByRole('textbox',{name: 'Password'})).toBeVisible()
       await page.getByRole('textbox',{name: 'Password'}).fill('incorrectPassword');

// Step 3 - Click button
      await expect(page.getByRole('button',{name: 'Submit'})).toBeEnabled()
      await page.getByRole('button', { name: 'Submit'}).click();
// step 4 - Verify error msg
      const errorMessage = page.locator('#error'); // error message is displayed
      await expect(errorMessage).toBeVisible();
      await expect(errorMessage).toHaveText('Your password is invalid!'); // error message Visible
      await page.waitForTimeout(1000);
});
});


