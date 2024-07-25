import { test, expect } from '@playwright/test';
 



test('should navigate to the Martian Bacteria test', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/tests')
  // Find an element with the text 'About' and click on it
   await page.click('text=Martian bacteria')
  // The new page should contain an h1 with "About"
  await expect(page.locator('h1')).toContainText('Martian bacteria identified by the colour red')
})





/*
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
*/