# Prompt: POM Refactor for Gov.il Form

Use this prompt to apply Page Object Model to the gov.il tests.

---

```
Refactor the generated test files into Page Object Model pattern.

The gov.il form is a single page, but treat different sections as separate page objects:
- Create a class for each logical section of the form
- Methods for each user action (fillField, submitForm, etc.)
- Selectors as private properties
- Update test files to use the page objects
- Keep all tests passing after refactoring
```

---

**Suggested structure:**

```
pages/
  GovFormPage.ts        ← main form interactions
  GovFormResultPage.ts  ← post-submission confirmation
```

**Example page object shape:**

```typescript
export class GovFormPage {
  private readonly submitButton = page.getByRole('button', { name: /שלח|Submit/i });

  async dismissCookieBanner() { ... }
  async fillRequiredFields(data: FormData) { ... }
  async submit() { ... }
  async getFieldError(fieldName: string) { ... }
}
```
