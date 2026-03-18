# Structured Prompt Template

Use this template when you want precise, reproducible test generation.

---

## Template

```
Context: [Short description of the application]
URL: [Page URL]
Test Plan:
1. [Scenario + expected result]
2. [Scenario + expected result]
Requirements: [Framework, patterns, rules]
```

---

## Worked Example — Gov.il Non-Identified Form

```
Context: A Hebrew government form (RTL) for submitting a non-identified request.
The form has multiple fields including text inputs, dropdowns, and checkboxes.
Some fields are required. There may be cookie banners or popups on load.

URL: https://govforms.gov.il/mw/forms/NonIdentifiedForm@tehila.gov.il

Test Plan:
1. Happy path - fill all required fields, submit, verify confirmation
2. Empty required fields - submit without filling, verify error messages
3. Invalid email format - enter invalid email, verify validation
4. Field interactions - check if fields are conditional

Requirements:
- Playwright with TypeScript
- Handle any popups or banners on page load
- Descriptive test names in English
- Each test independent
```

---

**Why structure matters:**
- Vague prompts produce vague tests.
- A structured prompt constrains the AI to your exact requirements.
- The Requirements section prevents the AI from inventing its own patterns.
