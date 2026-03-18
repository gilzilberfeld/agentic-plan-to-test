# Prompt: Debug a Failing Test

When a test fails, paste the error and use this prompt to ask the AI to diagnose it.

---

```
This test is failing with the following error:
[paste error message]

The test is trying to fill the required fields on the government form and submit it.

Please diagnose the problem and suggest a fix. Change only what's needed to fix this specific error.
```

---

**Tips for effective debugging prompts:**
- Always include the full error message (including stack trace if available).
- Tell the AI what the test is *supposed* to do, not just what it's doing wrong.
- Ask for a targeted fix — without this, the AI may rewrite the whole test.
- If the fix introduces a new failure, paste the new error and repeat.
