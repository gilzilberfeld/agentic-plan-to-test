# Workshop: Agentic Plan to Test

A 3-hour hands-on workshop using MCP + Playwright to go from zero to automated tests — no prior test automation experience required.

## Setup

### 1. Clone the repo

```bash
git clone <repo-url>
cd workshop-agentic-plan
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Playwright browsers

```bash
npx playwright install
```

### 4. Add MCP settings to VS Code

Open VS Code settings (`Ctrl+Shift+P` → `Open User Settings (JSON)`) and paste the contents of [examples/slide07/mcp-settings.json](examples/slide07/mcp-settings.json):

```json
{
  "mcp": {
    "servers": {
      "playwright": {
        "command": "npx",
        "args": ["@playwright/mcp@latest"]
      }
    }
  }
}
```

Reload VS Code after saving.

## Running the tests

```bash
# Run all tests
npm test

# Run only the fallback login test (slide 10)
npm run test:slide10

# Run the deliberately broken tests (slide 22)
npm run test:slide22

# Open the HTML report
npm run test:report
```

## Project structure

```
examples/         ← Facilitator prompts and MCP config (one folder per slide)
tests/            ← Playwright test files (one folder per slide)
  slide10/        ← Fallback login test for saucedemo
  slide22/        ← Deliberately broken tests for debugging exercise
  slide29/        ← Empty — facilitator prepares POM before/after example
playwright.config.ts
package.json
README.md
```

## Target applications

| App | URL |
|-----|-----|
| Swag Labs (simple) | https://www.saucedemo.com |
| Gov.il form (real) | https://govforms.gov.il/mw/forms/NonIdentifiedForm@tehila.gov.il |

## Facilitator notes

- Files marked `// TODO: Facilitator to prepare before workshop` are intentionally empty.
- Prompts in `examples/` are in English for best AI results.
- The broken tests in `tests/slide22/` are meant to fail — use them to demonstrate the debugging exercise.
