import { test, expect } from '@playwright/test';

test.describe('Saucedemo Login', () => {
  test('should log in with valid credentials and land on the products page', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await expect(page).toHaveURL(/\/inventory/);
    await expect(page.locator('.inventory_list')).toBeVisible();
  });
});
