import { test, expect } from '@playwright/test';

// Replace selectors and values with actual ones from the form
const FORM_URL = 'https://govforms.gov.il/mw/forms/NonIdentifiedForm@tehila.gov.il';

// Utility: Fill all required fields with valid data
async function fillRequiredFields(page) {
  // Example selectors, update as needed
  await page.fill('input[aria-label="מספר ח.. / ע. מ / ת. ז*"]', '123456789');
  await page.fill('input[aria-label="pathName to service*"]', 'Valid Service');
  await page.fill('input[aria-label="dd*"]', '21/04/2026');
  await page.setInputFiles('input[type="file"][aria-label="שש*"]', 'tests/fixtures/sample.pdf');
  await page.check('input[type="checkbox"][aria-label="bool to service*"]');
  await page.check('input[type="checkbox"][aria-label="bool from service*"]');
  await page.selectOption('select[aria-label="list from service*"]', { index: 1 });
  // ...add all other required fields
}

test.describe('Gov.il Form Happy Path', () => {
  test('Main form submission', async ({ page }) => {
    await page.goto(FORM_URL);
    await fillRequiredFields(page);
    await page.click('button:has-text("לשלב הבא")');
    // If multi-step, fill next step fields here
    // await fillRequiredFieldsStep2(page);
    // await page.click('button:has-text("Submit")');
    // Expect confirmation
    await expect(page.locator('text=הבקשה התקבלה')).toBeVisible();
  });

  test('File upload happy path', async ({ page }) => {
    await page.goto(FORM_URL);
    await fillRequiredFields(page);
    // Check that file is listed as attached
    await expect(page.locator('text=sample.pdf')).toBeVisible();
  });

  test('Dynamic table row happy path', async ({ page }) => {
    await page.goto(FORM_URL);
    await fillRequiredFields(page);
    await page.click('button:has-text("הוספת row")');
    // Fill required fields in new row
    await page.fill('input[aria-label="columnNameToService*"]', 'ColName');
    await page.fill('input[aria-label="valueToService*"]', 'Value');
    // ...add other required fields for the row
    await page.click('button:has-text("לשלב הבא")');
    await expect(page.locator('text=הבקשה התקבלה')).toBeVisible();
  });

  test('Required checkbox/dropdown happy path', async ({ page }) => {
    await page.goto(FORM_URL);
    await fillRequiredFields(page);
    // Check required checkboxes and select dropdowns
    await page.check('input[type="checkbox"][aria-label="bool to service*"]');
    await page.selectOption('select[aria-label="list from service*"]', { index: 1 });
    await page.click('button:has-text("לשלב הבא")');
    await expect(page.locator('text=הבקשה התקבלה')).toBeVisible();
  });

  test('Disabled/pre-filled fields', async ({ page }) => {
    await page.goto(FORM_URL);
    // Check disabled field value
    const dateValue = await page.inputValue('input[aria-label="תאריך פתיחה"]');
    expect(dateValue).toMatch(/\d{2}\/\d{2}\/\d{4}/);
    await fillRequiredFields(page);
    await page.click('button:has-text("לשלב הבא")');
    await expect(page.locator('text=הבקשה התקבלה')).toBeVisible();
  });

  test('Confirmation and reset', async ({ page }) => {
    await page.goto(FORM_URL);
    await fillRequiredFields(page);
    await page.click('button:has-text("לשלב הבא")');
    await expect(page.locator('text=הבקשה התקבלה')).toBeVisible();
    // Reset form
    await page.click('input[type="checkbox"][aria-label="איפוס שדות"]');
    // Check that fields are cleared
    expect(await page.inputValue('input[aria-label="מספר ח.. / ע. מ / ת. ז*"]')).toBe('');
  });
});
