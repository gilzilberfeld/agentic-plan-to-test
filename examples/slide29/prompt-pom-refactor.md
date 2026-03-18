# Prompt: Refactor to Page Object Model

Use this prompt to refactor flat test files into the Page Object Model (POM) pattern.

---

```
Refactor the generated test files into Page Object Model pattern.
Create:
- A page object class for each page
- Methods for each user action
- Selectors as private properties in the page class
- Update all test files to use the page objects
- Keep all tests passing after refactoring
```

---

**What to expect:**
- A new file like `pages/LoginPage.ts` or `pages/SauceDemoPage.ts` is created.
- The page class has private selector strings and public action methods (`login()`, `getErrorMessage()`, etc.).
- Test files become shorter and read like plain English: `await loginPage.login('user', 'pass')`.
- All tests still pass — behaviour is unchanged, only structure improves.
