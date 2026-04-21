import { test, expect } from '@playwright/test';

test('Login and verify products page', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://www.saucedemo.com/');

  // Fill in username and password
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');

  // Click the login button
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify that the URL contains '/inventory'
  await expect(page).toHaveURL(/\/inventory/);

  // Optionally, check for a product title to confirm page loaded
  await expect(page.getByText('Products')).toBeVisible();
});
