import { test, expect } from '@playwright/test';

// DELIBERATELY BROKEN: does not dismiss the cookie banner / consent overlay before
// interacting with the form. The overlay sits on top of the fields and blocks clicks.
// Expected failure: Element is not visible / click intercepted
// Use with examples/slide22/failure-popup-blocker.md

test('should fill the first field on the gov.il form (broken - popup not dismissed)', async ({ page }) => {
  await page.goto('https://govforms.gov.il/mw/forms/NonIdentifiedForm@tehila.gov.il');

  // No banner dismissal — immediately try to interact with the first text input.
  // If a cookie/accessibility overlay is present this will fail.
  const firstInput = page.locator('input[type="text"]').first();
  await firstInput.fill('test value');

  await expect(firstInput).toHaveValue('test value');
});
