import { test, expect } from '@playwright/test';

test('Navigate from test to project, and then back to dashboard', async ({ page }) => {
    await page.goto('http://localhost:3000/tests/SBT-02-01/view');
    await page.getByRole('link', { name: 'Self buttering toaster' }).click();
    await expect(page.locator('h1')).toContainText('Self buttering toaster');
    await page.getByRole('link', { name: 'Back to Project List' }).click();
    await expect(page.locator('h1')).toContainText('Projects');
  });

  test('Create a new test', async ({ page }) => {
    await page.goto('http://localhost:3000/projects');
    await page.getByRole('link', { name: '+ New Test' }).click();
    await page.getByLabel('Project title').selectOption('Savings Account Hub');
    await page.getByLabel('Test Title').click();
    await page.getByLabel('Test Title').fill('Table still displays');
    await page.getByLabel('Test description').click();
    await page.getByLabel('Test description').fill('Table can be seen on the page');
    await page.locator('#acceptance-criteria-1').click();
    await page.locator('#acceptance-criteria-1').fill('AC1');
    await page.locator('#acceptance-criteria-2').click();
    await page.locator('#acceptance-criteria-2').fill('AC2');
    await page.getByLabel('Due date').fill('2024-07-26');
    await page.getByLabel('Status').selectOption('in-progress');
    await page.getByLabel('Assignee').selectOption('3620f4e1-3b27-4143-b0b5-694005596e3d');
    await page.getByRole('button', { name: 'Create test' }).click();
    await expect(page.getByRole('link', {name: 'Table still displays'})).toBeDefined();
  });

  test('Navigate to test and update', async ({ page }) => {
    await page.goto('http://localhost:3000/tests/SAH-03-01/view');
    await page.getByRole('link', { name: 'Edit description' }).click();
    await page.getByLabel('Status').selectOption('passed');
    await page.getByRole('button', { name: 'Update test' }).click();
    await expect(page.getByRole('link', {name: 'Table displays'})).toContainText('passed', {ignoreCase: true});
  });