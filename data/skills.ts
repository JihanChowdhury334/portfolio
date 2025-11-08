export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Tools' | 'Other';
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export interface EducationItem {
  id: string;
  school: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
  achievements?: string[];
}

export interface Interest {
  name: string;
  icon: string;
  description: string;
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'Frontend', level: 'Advanced' },
  { name: 'Next.js', category: 'Frontend', level: 'Advanced' },
  { name: 'TypeScript', category: 'Frontend', level: 'Advanced' },
  { name: 'JavaScript (ES6+)', category: 'Frontend', level: 'Advanced' },
  { name: 'TailwindCSS', category: 'Frontend', level: 'Advanced' },
  { name: 'ShadCN/UI', category: 'Frontend', level: 'Intermediate' },
  { name: 'HTML5/CSS3', category: 'Frontend', level: 'Advanced' },
  
  // Backend
  { name: 'Python', category: 'Backend', level: 'Advanced' },
  { name: 'Java', category: 'Backend', level: 'Advanced' },
  { name: 'C', category: 'Backend', level: 'Advanced' },
  { name: 'C++', category: 'Backend', level: 'Intermediate' },
  { name: 'Node.js', category: 'Backend', level: 'Intermediate' },
  { name: 'Flask', category: 'Backend', level: 'Intermediate' },
  { name: 'Express', category: 'Backend', level: 'Intermediate' },
  
  // Database
  { name: 'PostgreSQL', category: 'Database', level: 'Advanced' },
  { name: 'Oracle SQL', category: 'Database', level: 'Advanced' },
  { name: 'MongoDB', category: 'Database', level: 'Intermediate' },
  { name: 'Drizzle ORM', category: 'Database', level: 'Advanced' },
  { name: 'Appwrite', category: 'Database', level: 'Intermediate' },
  
  // DevOps
  { name: 'Git', category: 'DevOps', level: 'Advanced' },
  { name: 'GitHub Actions', category: 'DevOps', level: 'Intermediate' },
  { name: 'Azure', category: 'DevOps', level: 'Intermediate' },
  { name: 'AWS', category: 'DevOps', level: 'Intermediate' },
  { name: 'Netlify', category: 'DevOps', level: 'Intermediate' },
  { name: 'Render', category: 'DevOps', level: 'Intermediate' },
  { name: 'Vercel', category: 'DevOps', level: 'Advanced' },
  { name: 'CI/CD', category: 'DevOps', level: 'Intermediate' },
  
  // Tools
  { name: 'VS Code', category: 'Tools', level: 'Expert' },
  { name: 'GitHub', category: 'Tools', level: 'Advanced' },
  { name: 'Figma', category: 'Tools', level: 'Beginner' },
  { name: 'AutoCAD', category: 'Tools', level: 'Intermediate' },
  { name: 'MATLAB', category: 'Tools', level: 'Intermediate' },
  { name: 'JUnit', category: 'Tools', level: 'Intermediate' },
  
  // Other
  { name: 'VHDL', category: 'Other', level: 'Intermediate' },
  { name: 'Arduino', category: 'Other', level: 'Intermediate' },
  { name: 'Data Structures & Algorithms', category: 'Other', level: 'Advanced' },
  { name: 'OOP', category: 'Other', level: 'Advanced' },
  { name: 'Design Patterns', category: 'Other', level: 'Intermediate' },
];

export const education: EducationItem[] = [
  {
    id: '1',
    school: 'Toronto Metropolitan University',
    degree: 'Bachelor of Engineering',
    field: 'Computer Engineering (Software Option)',
    location: 'Toronto, ON',
    startDate: '2023',
    endDate: 'Apr 2027',
    description: 'Specializing in software engineering with a strong foundation in algorithms, data structures, and digital systems.',
    achievements: [
      'Current GPA: 3.8/4.0',
      'Completed coursework in programming fundamentals, data structures, and object-oriented design',
      'Applied analytical reasoning and problem-solving in software and hardware integration projects',
      'Focus on full-stack development and embedded systems',
      'Active participant in hackathons and coding competitions'
    ]
  }
];

export const interests: Interest[] = [
  {
    name: 'Gaming',
    icon: '🎮',
    description: 'Playing strategy games and competitive titles'
  },
  {
    name: 'Hiking',
    icon: '🥾',
    description: 'Exploring nature trails and scenic routes'
  },
  {
    name: 'Lifting',
    icon: '🏋️',
    description: 'Lifting weights and staying fit'
  },
  {
    name: 'Cars',
    icon: '🚗',
    description: 'Car enthusiast - love everything automotive'
  }
];
