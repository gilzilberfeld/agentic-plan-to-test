import { test, expect } from '@playwright/test';

// DELIBERATELY BROKEN: uses an absurdly short timeout (500ms).
// The gov.il site takes several seconds to load.
// Expected failure: Timeout 500ms exceeded waiting for locator('.form-container')
// Use with examples/slide22/failure-timeout.md

test('should load the gov.il form (broken - timeout too short)', async ({ page }) => {
  await page.goto('https://govforms.gov.il/mw/forms/NonIdentifiedForm@tehila.gov.il');

  // 500ms is far too short for a government site — will always time out
  await page.locator('.form-container').waitFor({ state: 'visible', timeout: 500 });

  await expect(page.locator('.form-container')).toBeVisible();
});
