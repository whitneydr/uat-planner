
// import '@testing-library/jest-dom';
import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import SideMenu from '../dashboard/sidenav';
import { usePathname } from 'next/navigation';
import { useRouter } from "next-router-mock";

 
describe('Side navigation', () => {
  test('Projects link renders', async () => {


    render(<SideMenu />)
    const menuItem = await screen.findByText('Projects')
    expect(menuItem).toBeDefined()
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
