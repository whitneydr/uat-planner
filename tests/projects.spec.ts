import { test, expect } from '@playwright/test';

test('should navigate to the Savings Account Hub project', async ({ page }) => {
    // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
    await page.goto('http://localhost:3000/projects')
    // Find an element with the text 'About' and click on it
     await page.click('text=Savings Account Hub')
    // The new URL should be "/about" (baseURL is used there)
     await expect(page).toHaveURL('http://localhost:3000/projects/SAH/view')
    // The new page should contain an h1 with "About"
    await expect(page.locator('h1')).toContainText('Savings Account Hub')
  })

  test('should navigate to the Martian Bacteria test from the Mars Rover project', async ({ page }) => {
    // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
    await page.goto('http://localhost:3000/projects/MRS/view')
    // Find an element with the text 'About' and click on it
     await page.click('text=Martian bacteria')
    // The new URL should be "/about" (baseURL is used there)
     await expect(page).toHaveURL('http://localhost:3000/tests/MRS-02/view')
    // The new page should contain an h1 with "About"
    await expect(page.locator('h1')).toContainText('Martian bacteria identified by the colour red')
  })


  test('Navigate to project and update', async ({ page }) => {
    await page.goto('http://localhost:3000/projects/SAH/view');
    await page.getByRole('link', { name: 'Edit summary' }).click();
    await page.getByLabel('Status').selectOption('in-progress');
    await page.getByRole('button', { name: 'Update project' }).click();
    await expect(page.getByRole('link', {name: 'Savings Account Hub'})).toContainText('in-progress', {ignoreCase: true});
  });