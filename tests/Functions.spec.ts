import { test, expect, Page } from '@playwright/test';
//import { username, password } from '../Fixtures/Constants.ts';
import { url } from '../Fixtures/Constants.json';
import * as env from 'dotenv';
env.config();
//import { URL } from '../Fixtures/URLConstant.ts';

const username = process.env.APP_USERNAME!;
const password = process.env.APP_PASSWORD!;

//this test is called raw form
test('test', async ({ page }) => {

//navigate to login page
await NaviagateTologin(page);

//login with credentials
await loginWithCredentials(page, username, password);

//submit button
await clickSubmitButton(page);

//assertion
await verifyLoginSuccess(page);

});


async function NaviagateTologin(page: Page){
    await page.goto(url);
}

async function loginWithCredentials(page: Page, username: string, password: string){
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill(username);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(password);
}

async function clickSubmitButton(page: Page){
    await page.getByRole('button', { name: 'Submit' }).click();
}

async function verifyLoginSuccess(page: Page){
    await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible();
    await expect(page.getByRole('strong')).toContainText('Congratulations student. You successfully logged in!');
}