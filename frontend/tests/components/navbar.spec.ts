import { test, expect, Locator, Page } from "@playwright/test";

test.describe("Navigation Bar", () => {
  const navigationData: Locator[] = [];

  const getNavitionData = async (page: Page) => {
    await page.goto("/");
    const navbar = await page.getByRole("navigation");

    await expect(navbar).toBeVisible();

    const navigation = await navbar
      .filter({ has: page.getByRole("listitem") })
      .getByRole("link")
      .all();

    navigationData.push(...navigation);
  };

  test("Navigation Links are present", async ({ page }) => {
    await getNavitionData(page);
    await expect(navigationData.length).toBeGreaterThan(1);
  });

  test(`Navigation is working`, async ({ page }) => {
    await getNavitionData(page);
    for (const n of navigationData) {
      const dest = await n.getAttribute("href");
      await expect(dest).toBeTruthy();

      console.info(`[Navigation Bar] Navigating to ${dest}`);
      await n.click();
      await expect(page).toHaveURL(dest!);
    }
  });

  // TODO: Add Page title hooks
  /* test(`Title is correct: ${p.title}`, async ({ page }) => {
    await getNavitionData(page);
    for (const n of navigationData) {
      const destination = await n.getAttribute("href");
      await expect(destination).toBeTruthy();
      
      await page.goto(destination)
      await expect(page).toHaveTitle(`Share Your Music Club | ${title}`);
    }
  }); */
});
