import { test, expect } from '@playwright/test';

test('should navigate to the Savings Account Hub project', async ({ page }) => {
    await page.goto('http://localhost:3000/projects')
    await page.click('text=Savings Account Hub')
    await expect(page).toHaveURL('http://localhost:3000/projects/SAH/view')
    await expect(page.locator('h1')).toContainText('Savings Account Hub')
  })

  test('should navigate to the Martian Bacteria test from the Mars Rover project', async ({ page }) => {
    await page.goto('http://localhost:3000/projects/MRS/view')
    await page.getByRole('link', { name: 'Martian bacteria identified by the colour red'})
    await expect(page.locator('h1')).toContainText('Martian bacteria identified by the colour red')
  })


  test('Edit a project', async ({ page }) => {
    await page.goto('http://localhost:3000/projects/SAH/view');
    await page.getByRole('link', { name: 'Edit summary' }).click();
    await page.getByLabel('Status').selectOption('in-progress');
    await page.getByRole('button', { name: 'Update project' }).click();
    await expect(page.getByRole('link', {name: 'Savings Account Hub'})).toContainText('in-progress', {ignoreCase: true});
  });