import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { ProductsPage } from './pages/ProductsPage';

test('Login journey - navigate to saucedemo, login, and verify products page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await productsPage.verifyOnProductsPage();

  const productCount = await productsPage.getProductCount();
  expect(productCount).toBeGreaterThan(0);
});
