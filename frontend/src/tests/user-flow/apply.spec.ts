import { test, expect } from "@playwright/test";

test.describe("Member Registration Form", () => {
  const validInputs = [
    {
      field: "Name",
      value: "Test User",
    },
    {
      field: "Email",
      value: process.env.TEST_EMAIL || "test@example.com",
    },
    {
      field: "Password",
      value: process.env.TEST_PASS || "password123",
    },
  ];

  const invalidInputs = [
    {
      field: "Name",
      value: "A",
      expectedError: "Name must be at least 2 characters",
    },
    {
      field: "Email",
      value: "invalid-email",
      expectedError: "Invalid email",
    },
    {
      field: "Password",
      value: "123",
      expectedError: "Password must be at least 8 characters",
    },
  ];

  test.beforeEach(async ({ page }) => {
    await page.goto("/apply");
  });

  test("should successfully register a new member", async ({ page }) => {
    const form = await page.locator("form");

    for (const { field, value } of validInputs) {
      const inputField = await form.getByLabel(field);
      await expect(inputField).toBeVisible();
      await inputField.fill(value);
    }

    // Submit the form
    const submitButton = form.getByRole("button", { name: "Submit" });
    await expect(submitButton).toBeEnabled();
    await submitButton.click();

    // Verify success toast appears
    const successToast = page.getByText("Member registered successfully");
    successToast.waitFor({ state: "attached" });
    await expect(successToast).toBeVisible();

    await expect(page).toHaveURL("/");
  });

  /* Regression: should not submit incomplete form */
  test("should not submit empty form", async ({ page }) => {
    const form = await page.locator("form");
    await form.getByRole("button", { name: "Submit" }).click();

    for (const { field, expectedError } of invalidInputs) {
      const formField = page.getByTestId(`error-${field.toLowerCase()}`);
      await expect(formField).toBeVisible();
      await expect(formField).toContainText(expectedError);
    }
  });
});
