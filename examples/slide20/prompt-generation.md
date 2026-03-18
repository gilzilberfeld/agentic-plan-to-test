# Prompt: Generate Test Cases

Use this prompt to generate 1–2 test cases from the test plan you created.

---

```
Based on this test plan, generate a Playwright test in TypeScript for the following scenario:

Scenario: Happy path - fill all required fields with valid data and submit the form.

Target URL: https://govforms.gov.il/mw/forms/NonIdentifiedForm@tehila.gov.il

Steps:
1. Navigate to the form
2. Handle any popups or banners
3. Fill all required fields with valid test data
4. Submit the form
5. Verify submission confirmation appears

Requirements:
- Save as tests/gov-form-happy-path.spec.ts
- Use descriptive test name
- Add clear assertions
```

---

**Tip:** Start with the happy path. Once it works, use the same prompt shape to generate a validation scenario:

```
Scenario: Required field validation - submit the form without filling any fields,
verify that an error message appears for each required field.
```
