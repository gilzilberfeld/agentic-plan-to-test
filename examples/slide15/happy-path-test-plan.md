# Happy Path Test Plan for Gov.il Form

## 1. Main Form Submission (Happy Path)

**Steps:**

1. Open the form at https://govforms.gov.il/mw/forms/NonIdentifiedForm@tehila.gov.il
2. Fill all required text fields with valid data (e.g., valid ID, name, phone, email, etc.)
3. Enter valid dates in date fields (format: DD/MM/YYYY)
4. Upload valid files where required (supported file types, within size limits)
5. Select required checkboxes and dropdowns
6. Add at least one row in the dynamic table and fill all required fields in that row
7. Complete all other required fields (including nested/step fields)
8. Submit the form

**Expected Result:**

- Form submits successfully
- Confirmation message or next step is displayed
- No validation errors are shown

---

## 2. Multi-Step Navigation (if applicable)

**Steps:**

1. Complete all required fields in the first step
2. Click "Next" or equivalent to proceed to the next step
3. Complete all required fields in subsequent steps
4. Submit the form

**Expected Result:**

- Each step validates required fields before allowing navigation
- Final submission succeeds and confirmation is shown

---

## 3. File Upload Happy Path

**Steps:**

1. For each required file upload field, select a valid file (correct type and size)
2. Ensure the file is accepted and listed as attached
3. Submit the form

**Expected Result:**

- Files are uploaded without error
- Form submission is successful

---

## 4. Dynamic Table Row Happy Path

**Steps:**

1. Add a new row to the dynamic table
2. Fill all required fields in the new row with valid data
3. Submit the form

**Expected Result:**

- Row is added and validated
- Form submission is successful

---

## 5. Required Checkbox/Dropdown Happy Path

**Steps:**

1. Select all required checkboxes and dropdown options
2. Submit the form

**Expected Result:**

- No validation errors for required selections
- Form submission is successful

---

## 6. Disabled/Pre-filled Fields

**Steps:**

1. Verify that disabled or pre-filled fields (e.g., current date) are present and correct
2. Submit the form with all other required fields filled

**Expected Result:**

- Disabled/pre-filled fields retain their values
- Form submission is successful

---

## 7. Confirmation and Reset

**Steps:**

1. After successful submission, observe the confirmation message or next step
2. If a reset/clear button is present, use it and verify the form resets

**Expected Result:**

- Confirmation is clear and accurate
- Reset clears all fields as expected
