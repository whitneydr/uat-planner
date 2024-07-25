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