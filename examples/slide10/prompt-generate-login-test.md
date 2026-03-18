# Prompt: Generate Login Test

Use this prompt after completing the Hello World exercise (the AI has already performed the login journey).

---

```
Generate a Playwright test in TypeScript based on the journey you just performed:
navigate to saucedemo.com, log in with standard_user / secret_sauce,
and verify that the products page is displayed (URL contains '/inventory').

Save the test as tests/login.spec.ts
```

---

**What to expect:**
- The AI generates a `.spec.ts` file with a describe block and at least one test.
- The test navigates to the site, fills credentials, clicks Login, and asserts the URL.
- You can run it with: `npx playwright test tests/login.spec.ts`
