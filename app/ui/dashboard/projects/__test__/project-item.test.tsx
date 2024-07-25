import { describe, expect, test } from 'vitest';
import { fireEvent, getByText, render, screen } from '@testing-library/react';
import ProjectItem from '../project-item';

const projectDetails = {
    id: 'SAH',
    title: 'Savings Account Hub',
    deadline: '2024-08-08',
    owner: 'James Blunt',
    status: 'complete'
}

describe('Project item', () => {
    render(<ProjectItem id={projectDetails.id} title={projectDetails.title} deadline={projectDetails.deadline} owner={projectDetails.owner} status={projectDetails.status} />)
    test('Project title displays', () => {
      expect(screen.getByText('Savings Account Hub')).toBeDefined();
    })
    test('Project ID displays', () => {
      expect(screen.getByText('SAH')).toBeDefined()
    })
    test('Project item opens project page', async () => {
      const button = await screen.getByRole('link', {name: 'SAH Savings Account Hub Due date: 2024-08-08 Project owner: James Blunt complete'})
      fireEvent.click(button)
      expect(screen.findByRole('heading', {level: 1, name: 'Savings Account Hub'})).toBeDefined();
    })
  })