# Failure Example 2: Timeout on Slow Site

## What the error looks like

```
Error: locator.waitFor: Timeout 1000ms exceeded.
  waiting for locator('.form-container') to be visible

  Call log:
  - waiting for locator('.form-container') to be visible
```

## Why it happens

The test uses a 1000ms (1 second) timeout, but the gov.il form is a government site that can take
several seconds to fully load. The element exists but the test gives up before it appears.

## Prompt to fix it

```
This test is failing with a timeout error:
  Timeout 1000ms exceeded waiting for locator('.form-container')

The site takes longer than 1 second to load. Increase the timeout to a reasonable value
and use Playwright's built-in auto-waiting instead of explicit waits where possible.
```

## The fix

Remove overly short explicit timeouts and let Playwright's default auto-waiting handle it:
```typescript
// Before (too short)
await page.locator('.form-container').waitFor({ timeout: 1000 });

// After (use default timeout from playwright.config.ts, currently 30000ms)
await page.locator('.form-container').waitFor();
// or simply interact — Playwright auto-waits
await page.locator('.form-container').isVisible();
```
