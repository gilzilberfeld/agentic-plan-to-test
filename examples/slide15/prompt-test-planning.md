# Prompt: AI-Assisted Test Planning

Use this prompt after the discovery step. The AI now has context about the gov.il form.

---

```
Based on your exploration of the government form at
https://govforms.gov.il/mw/forms/NonIdentifiedForm@tehila.gov.il
create a test plan.

Include:
1. Happy path - fill all required fields with valid data and submit
2. Required field validation - submit with each required field empty
3. Invalid input - wrong format in fields that expect specific formats
4. Form behavior - what happens after submission
5. Edge cases - special characters, very long text, Hebrew vs English

Prioritize the scenarios from most critical to least critical.
```

---

**What to expect:**
- The AI produces a numbered list of test scenarios.
- Each scenario has a clear name, steps, and expected result.
- The prioritised list helps the pair pick 1–2 scenarios to implement.
