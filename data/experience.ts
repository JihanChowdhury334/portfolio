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
    company: 'Cox\'s Driving School & Accounting Firm',
    position: 'Freelance Software Developer',
    location: 'Toronto, ON',
    startDate: 'Jul 2025',
    endDate: 'Aug 2025',
    description: 'Developed and deployed responsive business websites using modern web technologies.',
    achievements: [
      'Developed and deployed responsive business websites using React, Next.js, and Tailwind CSS',
      'Integrated Google Maps, client sign-up flows, and contact forms to streamline onboarding',
      'Implemented SEO optimizations and mobile-first design, increasing site traffic and client inquiries',
      'Deployed via Azure/Netlify ensuring strong performance, reliability, and fast load times'
    ],
    technologies: ['React', 'Next.js', 'TailwindCSS', 'Azure', 'Netlify', 'Google Maps API', 'SEO']
  }
];
