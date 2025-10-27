import { test, expect, Locator, Page } from "@playwright/test";

test.describe("Footer", () => {
  const footerData: Locator[] = [];

  test.beforeEach(async ({ page }: { page: Page }) => {
    await page.goto("/");
    const footer = await page.locator("footer");

    await expect(footer).toBeVisible();

    const footerLinks = await footer
      .filter({ hasText: /\w+/ })
      .getByRole("link")
      .all();

    footerData.push(...footerLinks.slice(1));
  });

  test("Footer is Visible", async () => {
    expect(footerData.length).toBeGreaterThan(1);
  });

  test("Footer links work", async ({ page }) => {
    for (const n of footerData) {
      const dest = await n.getAttribute("href");
      await expect(dest).toBeTruthy();

      console.info(`[Footer] Navigating to ${dest}`);
      await n.click();
      await expect(page).toHaveURL(dest!);
    }
  });
});
