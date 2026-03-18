# Prompt: Improve Test Readability

Use this prompt after generating tests to clean them up without changing their behaviour.

---

```
Review the test file and improve readability:

1. Rename all tests to clearly describe what they verify
   (e.g., instead of 'test1' use 'should show error when required fields are empty')
2. Rename variables to be meaningful
   (e.g., instead of 'el' use 'submitButton')
3. Remove any duplicated code
4. Add a brief comment before any complex logic

Keep all tests passing. Make one change at a time.
```

---

**What to expect:**
- Test names become self-documenting (readable in the HTML report).
- Variable names reflect what they hold, not just their type.
- Any repeated setup is extracted or simplified.
- Complex selectors or waits get a one-line comment explaining why.
