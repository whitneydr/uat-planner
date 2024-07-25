import { describe, expect, test } from 'vitest';
import { fireEvent, getByText, render, screen } from '@testing-library/react';
import CreateProjectForm from '../create-project';


const placeholderUsers = [
  {
    id:1001,
    firstName: "Harry",
    lastName: "Styles"
  }
]


describe('Create Project Form', () => {
    render(<CreateProjectForm plannerUsers={placeholderUsers} />)
    test('Project title field exists', () => {
      render(<CreateProjectForm plannerUsers={placeholderUsers} />)
      expect(screen.getByLabelText('Project Title')).toBeDefined();
    })
    test('Project summary field renders', () => {
      expect(screen.getByLabelText('Project summary')).toBeDefined()
    })
    test('New project button opens new project page', async () => {
      const button = await screen.getAllByRole('button', {name: 'Cancel'})[0]
      fireEvent.click(button)
      expect(screen.findByRole('heading', {name: 'Projects'})).toBeDefined();
    })
    test('New test button opens new test page', async () => {
      const button = await screen.getAllByRole('link', {name: '+ New Test'})[0]
      fireEvent.click(button)
      expect(screen.findByText('Create New Test')).toBeDefined();
    })
  })