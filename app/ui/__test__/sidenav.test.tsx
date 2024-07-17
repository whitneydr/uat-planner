import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import SideMenu from '../dashboard/sidenav';
 
describe('Side navigation', () => {
  test('Projects link renders', async () => {
    render(<SideMenu />)
    expect(screen.findByText('Projects')).toBeDefined
  })
  test('Tests link renders', async () => {
    render(<SideMenu />)
    expect(screen.findByText('Tests')).toBeDefined()
  })
  test('Reports link renders', async () => {
    render(<SideMenu />)
    expect(screen.findByText('Reports')).toBeDefined()
  })
})
