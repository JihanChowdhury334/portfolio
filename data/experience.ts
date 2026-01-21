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
    company: 'League Insights AI',
    position: 'Backend Engineer',
    location: 'Toronto, ON',
    startDate: 'Nov 2025',
    endDate: 'Present',
    description:
      'Led backend development of a full-stack analytics platform that processes large-scale competitive gaming data and generates AI-driven performance insights.',
    achievements: [
      'Led technical execution of a full-stack analytics platform serving 200+ distinct users per month',
      'Built an asynchronous Flask API in Python with PostgreSQL to aggregate and process 1,000+ match records per user',
      'Designed SQL-backed data models and integrity checks to support large-scale analytics and timeline aggregation',
      'Integrated AWS-hosted AI report generation and exposed backend endpoints consumed by a Next.js dashboard',
      'Directed backend architecture and task breakdowns across a 3-person development team'
    ],
    technologies: [
      'Python',
      'Flask',
      'PostgreSQL',
      'SQLAlchemy',
      'AWS Bedrock',
      'Next.js',
      'REST APIs',
      'Async Processing'
    ]
  },
  {
    id: '2',
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
