export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'AS Tax, Accounting & Financial Services',
    position: 'Software Engineering Intern',
    location: 'Toronto, ON',
    startDate: 'May 2025',
    endDate: 'Aug 2025',
    description:
      'Built an internal web application to modernize client data management and replace spreadsheet-based workflows.',
    achievements: [
      'Built an internal web application to centralize client records and replace spreadsheet-based tracking workflows',
      'Designed and maintained PostgreSQL schemas for clients, documents, and role-based access control',
      'Implemented secure authentication and session management using NextAuth',
      'Reduced redundant database queries by approximately 70% by caching frequently accessed client data',
      'Eliminated duplicate client records for new entries using email-based uniqueness constraints'
    ],
    technologies: [
      'Next.js',
      'React',
      'PostgreSQL',
      'NextAuth',
      'TypeScript',
      'REST APIs'
    ]
  }
];

