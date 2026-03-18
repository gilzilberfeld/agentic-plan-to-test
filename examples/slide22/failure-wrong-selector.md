# Failure Example 1: Wrong Selector

## What the error looks like

```
Error: locator.click: Error: strict mode violation: locator('#submit-form') resolved to 2 elements
  - or -
Error: locator.click: Timeout 30000ms exceeded.
  waiting for locator('#submit-form')
```

## Why it happens

The test uses a hardcoded selector `#submit-form` that does not match the actual button in the DOM.
The real submit button may have a different id, class, or no id at all.

## Prompt to fix it

```
This test is failing with the error:
  Timeout 30000ms exceeded waiting for locator('#submit-form')

The test is trying to click the submit button on the gov.il form.
Open the page, inspect the actual submit button, and update the selector.
Change only the selector — keep the rest of the test unchanged.
```

## The fix

Replace the wrong selector with the correct one found by inspecting the live page.
For example:
```typescript
// Before (wrong)
await page.locator('#submit-form').click();

// After (correct — example only, verify against live page)
await page.getByRole('button', { name: /שלח|Submit/i }).click();
```
