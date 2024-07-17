import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import UnderConstruction from '../dashboard/under-construction'
 
test('Under construction', () => {
  render(<UnderConstruction />)
  expect(screen.findByText('Coming soon')).toBeDefined()
})