# Failure Example 3: Cookie Banner Blocks Element

## What the error looks like

```
Error: locator.fill: Error: Element is not visible
  - or -
Error: locator.click: Target closed
  - or -
Error: locator.click: intercept was blocked by another element:
  <div class="cookie-banner" ...>
```

## Why it happens

The gov.il page may display a cookie consent banner or an accessibility overlay on first load.
The test tries to interact with a form field before dismissing the banner.
The banner sits on top of the field, blocking the click or fill action.

## Prompt to fix it

```
This test is failing because a cookie banner or overlay is blocking interaction with the form fields.
Error: Element is not visible / click intercepted

Please update the test to:
1. Check for a cookie banner or consent dialog on page load
2. Dismiss it if present (click Accept or close button)
3. Then proceed with filling the form fields

Use a conditional check so the test still works if the banner is not shown.
```

## The fix

Add a banner-dismissal step before interacting with the form:
```typescript
// Dismiss cookie banner if present
const cookieBanner = page.locator('[class*="cookie"], [id*="cookie"], [class*="consent"]');
if (await cookieBanner.isVisible()) {
  await cookieBanner.getByRole('button', { name: /accept|אישור/i }).click();
  await cookieBanner.waitFor({ state: 'hidden' });
}

// Now safe to interact with the form
await page.locator('input[name="email"]').fill('test@example.com');
```
