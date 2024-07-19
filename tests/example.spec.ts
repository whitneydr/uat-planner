import { test, expect } from '@playwright/test';
 
test('should navigate to the test dashboard', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/projects')
  // Find an element with the text 'About' and click on it
   await page.click('text=Tests')
  // The new URL should be "/about" (baseURL is used there)
   await expect(page).toHaveURL('http://localhost:3000/tests')
  // The new page should contain an h1 with "About"
  await expect(page.locator('h1')).toContainText('Tests')
})

test('should navigate to the reports dashboard', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/projects')
  // Find an element with the text 'About' and click on it
   await page.click('text=Reports')
  // The new URL should be "/about" (baseURL is used there)
   await expect(page).toHaveURL('http://localhost:3000/reports')
  // The new page should contain an h1 with "About"
  await expect(page.locator('h1')).toContainText('Coming soon')
})

test('should navigate to the projects dashboard', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/tests')
  // Find an element with the text 'About' and click on it
   await page.click('text=Projects')
  // The new URL should be "/about" (baseURL is used there)
   await expect(page).toHaveURL('http://localhost:3000/projects')
  // The new page should contain an h1 with "About"
  await expect(page.locator('h1')).toContainText('Projects')
})

test('should navigate to the create project', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/projects')
  // Find an element with the text 'About' and click on it
   await page.click('text=+ New project')
  // The new URL should be "/about" (baseURL is used there)
   await expect(page).toHaveURL('http://localhost:3000/projects/create')
  // The new page should contain an h1 with "About"
  await expect(page.locator('h1')).toContainText('Create New Project')
})

test('should navigate to the create test', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/projects')
  // Find an element with the text 'About' and click on it
   await page.click('text=+ New test')
  // The new URL should be "/about" (baseURL is used there)
   await expect(page).toHaveURL('http://localhost:3000/tests/create')
  // The new page should contain an h1 with "About"
  await expect(page.locator('h1')).toContainText('Create New Test')
})

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

test('should navigate to the Martian Bacteria test', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/tests')
  // Find an element with the text 'About' and click on it
   await page.click('text=Martian bacteria')
  // The new URL should be "/about" (baseURL is used there)
   await expect(page).toHaveURL('http://localhost:3000/tests/MRS-02/view')
  // The new page should contain an h1 with "About"
  await expect(page.locator('h1')).toContainText('Martian bacteria identified by the colour red')
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