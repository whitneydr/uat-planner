import { describe, expect, test } from 'vitest';
import { fireEvent, getByText, render, screen } from '@testing-library/react';
import EditProjectForm from '../edit-project';


const placeholderUsers = [
  {
    id:1001,
    firstName: "Harry",
    lastName: "Styles"
  }
]

const project = {
    id: 'd3c0c28b-c9df-461c-bc03-d33a3199fefa',
    project_id: 'DT1',
    project_title: 'Decision Tree',
    due_date: new Date('Wed Jul 24 2024 00:00:00 GMT+0100 (British Summer Time)'),
    owner_id: '63cae6ea-b56a-4994-b35b-24aacba20a1a',
    status: 'complete',
    summary: 'Build a tool which allows users to go through a series of questions and get a recommended account at the end'
}

const acs = [
  {
      id: "AC1",
      criteria: "Samples must be categorised by element type",
      status: "complete"
  },
  {
      id: "AC2",
      criteria: "Life forms must be categorised by colour",
      status: "in-progress"
  },
  {
      id: "AC3",
      criteria: "Temperature must be converted to freedom units",
      status: "to-do"
  }
]

describe('Create Project Form', () => {
    render(<EditProjectForm project={project} plannerUsers={placeholderUsers} currentOwner='James Blunt' acceptanceCriteria={acs} />)
    test('Project title field exists', () => {
      expect(screen.getByLabelText('Project Title')).toBeDefined();
    })
    test('Project summary field renders', () => {
      expect(screen.getByLabelText('Project summary')).toBeDefined()
    })
    test('New project button opens new project page', async () => {
      const button = await screen.getAllByRole('link', {name: 'Cancel'})[0]
      fireEvent.click(button)
      expect(screen.findByRole('heading', {name: 'Projects'})).toBeDefined();
    })
  })