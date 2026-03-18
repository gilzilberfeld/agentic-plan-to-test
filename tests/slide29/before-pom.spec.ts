import { test, expect } from '@playwright/test';

test('Login journey - navigate to saucedemo, login, and verify products page', async ({ page }) => {
  // Navigate to saucedemo.com
  await page.goto('https://www.saucedemo.com');
  
  // Wait for page to load
  await page.waitForLoadState('networkidle');
  
  // Fill in login credentials
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  
  // Click login button
  await page.click('[data-test="login-button"]');
  
  // Verify that we're on the products/inventory page
  await expect(page).toHaveURL(/.*\/inventory/);
  
  // Verify that products are displayed
  const productCount = await page.locator('[data-test="inventory-item"]').count();
  expect(productCount).toBeGreaterThan(0);
});
