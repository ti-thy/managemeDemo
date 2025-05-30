export const USERS = [
  {
    id: '1',
    username: 'alice',
    email: 'alice@gmail.com',
    linkedEmails: [
      'alice@gmail.com',
      'alice.work@gmail.com',
    ],
  },
  {
    id: '2',
    username: 'ben',
    email: 'ben@gmail.com',
    linkedEmails: [
      'ben@gmail.com',
      'ben.work@gmail.com',
    ],
  }
];

export const EVENTS = [
  // Alice's events with clashes on May 30, 2025
  {
    id: '1',
    email: 'alice@gmail.com',
    summary: 'Team Sync Meeting',
    start: '2025-05-30T09:00:00Z',
    end: '2025-05-30T10:00:00Z',
    location: 'Conference Room A',
    description: 'Weekly team sync to discuss project updates.',
    priority: 'high',
  },
  {
    id: '2',
    email: 'alice.work@gmail.com',
    summary: 'Client Presentation',
    start: '2025-05-30T09:30:00Z', // Clashes with Team Sync Meeting
    end: '2025-05-30T10:30:00Z',
    location: 'Virtual - Zoom',
    description: 'Present Q2 results to key client.',
    priority: 'high',
  },
  {
    id: '3',
    email: 'alice@gmail.com',
    summary: 'Lunch with Team',
    start: '2025-05-30T12:00:00Z',
    end: '2025-05-30T13:00:00Z',
    location: 'Downtown Cafe',
    description: 'Team lunch to celebrate project milestone.',
    priority: 'medium',
  },
  {
    id: '4',
    email: 'alice.work@gmail.com',
    summary: 'Project Review',
    start: '2025-05-30T14:00:00Z',
    end: '2025-05-30T15:30:00Z',
    location: 'Office Room 101',
    description: 'Review project deliverables with stakeholders.',
    priority: 'high',
  },
  {
    id: '5',
    email: 'alice.work@gmail.com',
    summary: 'Training Session',
    start: '2025-05-30T14:30:00Z', // Clashes with Project Review
    end: '2025-05-30T16:00:00Z',
    location: 'Training Room B',
    description: 'Training on new software tools.',
    priority: 'medium',
  },

  // Ben's events with clashes on May 30, 2025 (for primary email)
  {
    id: '6',
    email: 'ben@gmail.com',
    summary: 'Marketing Strategy Session',
    start: '2025-05-30T11:00:00Z',
    end: '2025-05-30T12:30:00Z',
    location: 'Marketing Office',
    description: 'Plan Q3 marketing campaigns.',
    priority: 'high',
  },
  {
    id: '7',
    email: 'ben.work@gmail.com',
    summary: 'Seminar on Digital Trends',
    start: '2025-05-30T12:00:00Z', // Clashes with Marketing Strategy Session
    end: '2025-05-30T13:30:00Z',
    location: 'Convention Center',
    description: 'Attend seminar on digital marketing trends.',
    priority: 'medium',
  },
  {
    id: '8',
    email: 'ben@gmail.com',
    summary: 'Lunch Break',
    start: '2025-05-30T13:00:00Z',
    end: '2025-05-30T14:00:00Z',
    location: 'Italian Bistro',
    description: 'Lunch with colleagues.',
    priority: 'medium',
  },

  // Additional events for ben.work@gmail.com to ensure clashes when logged in with this email
  {
    id: '9',
    email: 'ben.work@gmail.com',
    summary: 'Client Meeting',
    start: '2025-05-30T15:00:00Z',
    end: '2025-05-30T16:00:00Z',
    location: 'Virtual - Zoom',
    description: 'Discuss project updates with client.',
    priority: 'high',
  },
  {
    id: '10',
    email: 'ben.work@gmail.com',
    summary: 'Team Briefing',
    start: '2025-05-30T15:30:00Z', // Clashes with Client Meeting
    end: '2025-05-30T16:30:00Z',
    location: 'Office Room 202',
    description: 'Brief team on new project requirements.',
    priority: 'high',
  },
];