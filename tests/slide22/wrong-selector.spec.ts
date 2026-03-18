import { test, expect } from '@playwright/test';

// DELIBERATELY BROKEN: uses a selector that does not exist on the page.
// Expected failure: Timeout waiting for locator('#submit-form')
// Use with examples/slide22/failure-wrong-selector.md

test('should submit the gov.il form (broken - wrong selector)', async ({ page }) => {
  await page.goto('https://govforms.gov.il/mw/forms/NonIdentifiedForm@tehila.gov.il');

  // This selector does not exist on the page — the real button has a different selector
  await page.locator('#submit-form').click();

  await expect(page.locator('.confirmation-message')).toBeVisible();
});
