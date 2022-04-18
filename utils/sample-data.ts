import { v4 as uuidv4 } from 'uuid';
import { Project, Task, User } from '../interfaces';

/** Dummy user data. */
export const sampleUserData: User[] = [
  {
    id: 101,
    name: 'John Doe',
    avatar:
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
  },
  {
    id: 102,
    name: 'Jane Done',
    avatar:
      'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
  },
  {
    id: 103,
    name: 'Juan Dela Cruz',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
  },
];

export const sampleProjects: Project[] = [
  { id: 50, name: 'eRx App' },
  { id: 51, name: 'Passport Mobile' },
  { id: 52, name: 'Online Banking Project' },
];

export const kanbanItems: Task[] = [
  {
    id: uuidv4(),
    title: 'Change text size of Page Title',
    description: 'Lorem ipsum dolor amet',
    labels: [
      {
        type: 'success',
        content: 'Low',
      },
      {
        type: 'info',
        content: 'UI/UX',
      },
    ],
    commentCount: 3,
    attachmentCounts: 2,
  },
  {
    id: uuidv4(),
    title: 'Add a tooltip on avatars',
    description: 'Lorem ipsum dolor amet',
    labels: [
      {
        type: 'warn',
        content: 'Mid',
      },
      {
        type: 'info',
        content: 'UI/UX',
      },
    ],
    commentCount: 5,
    attachmentCounts: 3,
  },
];

export const kanbanColumns = {
  [uuidv4()]: {
    name: 'To Do',
    items: kanbanItems,
  },
  [uuidv4()]: {
    name: 'In Progress',
    items: [],
  },
  [uuidv4()]: {
    name: 'For Review',
    items: [
      {
        id: uuidv4(),
        title: 'Medical List',
        description: 'Lorem ipsum dolor amet',
        labels: [
          {
            type: 'danger',
            content: 'High',
          },
          {
            type: 'warn',
            content: 'Feature',
          },
        ],
        commentCount: 9,
        attachmentCounts: 5,
      },
    ],
  },
  [uuidv4()]: {
    name: 'To Staging',
    items: [],
  },
  [uuidv4()]: {
    name: 'Testing',
    items: [],
  },
  [uuidv4()]: {
    name: 'Done',
    items: [],
  },
};
