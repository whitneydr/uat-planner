import { describe, expect, test } from 'vitest'
import { fireEvent, getByText, render, screen } from '@testing-library/react'
import Header from '../dashboard/header';

describe('Header', () => {
  render(<Header />)
  test('New test button renders', () => {
    expect(screen.findByText('+ New test')).toBeDefined()
  })
  test('New project button renders', () => {
    expect(screen.findByText('+ New project')).toBeDefined()
  })
  test('New project button opens new project page', async () => {
    const button = await screen.getAllByRole('link', {name: '+ New Project'})[0]
    fireEvent.click(button)
    expect(screen.findByText('Create New Project')).toBeDefined();
  })
  test('New test button opens new test page', async () => {
    const button = await screen.getAllByRole('link', {name: '+ New Test'})[0]
    fireEvent.click(button)
    expect(screen.findByText('Create New Test')).toBeDefined();
  })
})
