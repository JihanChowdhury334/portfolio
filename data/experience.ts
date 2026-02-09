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
    company: 'Hitachi Rail GTS Canada Inc.',
    position: 'AI Intern – Procurement',
    location: 'Toronto, ON (Hybrid)',
    startDate: 'Feb 2026',
    endDate: 'Dec 2026',
    description:
      'Working with the Procurement and Supply Chain team to support the development, customization, and deployment of AI-driven tools and automation solutions that enhance procurement efficiency, data accuracy, and decision-making.',
    achievements: [
      'Collaborating with Procurement, Supply Chain, and IT teams to identify automation opportunities within procurement workflows',
      'Supporting the design and deployment of AI-driven tools such as document analyzers, chatbots, and automation solutions',
      'Assisting with integration of AI solutions into internal procurement platforms and enterprise systems',
      'Contributing to testing, validation, and performance monitoring of deployed automation tools',
      'Documenting processes and supporting internal users with guides and training materials'
    ],
    technologies: [
      'Python',
      'Automation',
      'SQL',
      'APIs',
      'AI Tools'
    ]
  },
  {
    id: '2',
    company: 'League Insights AI',
    position: 'Backend Engineer',
    location: 'Toronto, ON',
    startDate: 'Nov 2025',
    endDate: 'Jan 2026',
    description:
      'Led backend development of a full-stack analytics platform that processes large-scale competitive gaming data and generates AI-driven performance insights.',
    achievements: [
      'Led technical execution of a full-stack analytics platform, owning an asynchronous Flask API (Python) with PostgreSQL serving 200+ distinct players in a month and supporting 1,000+ match records per player',
      'Implemented SQL-backed data models and integrity checks to support large-scale aggregation',
      'Integrated AWS-hosted AI report generation and exposed endpoints consumed by a Next.js dashboard',
      'Directed technical execution across a 3-person team by defining backend interfaces and task breakdowns'
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
    id: '3',
    company: 'AS Tax, Accounting & Financial Services',
    position: 'Software Engineer (Contract)',
    location: 'Toronto, ON',
    startDate: 'May 2025',
    endDate: 'Aug 2025',
    description:
      'Built an internal web application to centralize client data management and replace spreadsheet-based tracking workflows.',
    achievements: [
      'Built an internal web application to centralize client records and replace spreadsheet-based tracking workflows',
      'Designed and maintained PostgreSQL schemas for clients, associated documents, and role-based access',
      'Implemented secure internal authentication and session management using NextAuth',
      'Reduced redundant database queries by 70% by caching frequently accessed client data',
      'Reduced duplicate client records by 100% for new entries using email-based uniqueness constraints'
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
