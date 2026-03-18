import { Page, expect } from '@playwright/test';

export class ProductsPage {
  private page: Page;
  private inventoryItemSelector = '[data-test="inventory-item"]';

  constructor(page: Page) {
    this.page = page;
  }

  async verifyOnProductsPage() {
    await expect(this.page).toHaveURL(/.*\/inventory/);
  }

  async getProductCount(): Promise<number> {
    return await this.page.locator(this.inventoryItemSelector).count();
  }
}