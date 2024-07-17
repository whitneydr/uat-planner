import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from '../dashboard/header';

describe('Header', () => {
  test('New test button renders', () => {
    render(<Header />)
    expect(screen.findByText('+ New test')).toBeDefined()
  })
  test('New project button renders', () => {
    render(<Header />)
    expect(screen.findByText('+ New project')).toBeDefined()
  })
})
