export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: 'Full-Stack' | 'Frontend' | 'Backend' | 'AI/ML';
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
  techStack: string[];
  whatILearned: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'league-insights-ai',
    title: 'League Insights AI',
    description: 'A full-year League of Legends recap engine powered by AWS Bedrock and the Riot Games API. Analyzes match history to generate personalized insights, identify strengths and weaknesses, visualize trends, and produce shareable recaps.',
    longDescription: 'An AI-powered analytics platform built for the AWS × Riot Games Hackathon that processes an entire year of League of Legends match history. Using AWS Bedrock for intelligent text generation and the Riot Developer API for data ingestion, it creates personalized year-in-review summaries complete with playstyle analysis, champion performance breakdowns, and long-term trend visualizations.',
    image: '/images/project1.jpg',
    tags: ['Python', 'AWS Bedrock', 'Flask', 'Riot Games API', 'Data Engineering'],
    category: 'AI/ML',
    githubUrl: 'https://github.com/JihanChowdhury334/League-Insights-AI',
    features: [
      'Full-year match history ingestion and analysis',
      'AI-generated summaries using AWS Bedrock',
      'Strengths/weakness detection across roles and champions',
      'Playstyle profiling with long-term trends',
      'Shareable highlights for social media'
    ],
    techStack: ['Python', 'AWS Bedrock', 'Flask', 'Riot Games API', 'Data Engineering'],
    whatILearned: [
      'Using AWS Bedrock for text generation',
      'Building scalable analytics pipelines',
      'Parsing large datasets from Riot Developer API',
      'Creating engaging AI-driven UX flows'
    ]
  },
  {
    id: '2',
    slug: 'ecommerce-dbms',
    title: 'E-Commerce DBMS',
    description: 'A fully automated e-commerce database system built with Oracle SQL and Unix Shell scripting. Features lifecycle automation, analytical views, and a complete relational schema.',
    longDescription: 'A comprehensive database management system designed for e-commerce operations. Built using Oracle SQL with Unix Shell automation, this project implements a fully normalized relational schema with automated scripts for schema creation, population, and teardown. Includes analytical SQL views for business intelligence and reporting.',
    image: '/images/project2.jpg',
    tags: ['Oracle SQL', 'Unix Shell', 'Bash', 'Database Design'],
    category: 'Backend',
    githubUrl: 'https://github.com/JihanChowdhury334/E-Commerce-DBMS',
    features: [
      'Normalized relational database schema',
      'Shell scripts for schema creation, teardown, and population',
      'Analytical SQL views for business reports',
      'Interactive terminal menu controller',
      'Reusable backend for future web/mobile extensions'
    ],
    techStack: ['Oracle SQL', 'Unix Shell', 'Bash', 'Database Design', 'ER Modeling'],
    whatILearned: [
      'Database normalization and constraints',
      'Workflow automation via shell scripting',
      'Analytical SQL and reporting views',
      'Managing database dependencies and teardown'
    ]
  },
  {
    id: '3',
    slug: 'nextjs-library-platform',
    title: 'University Library Platform',
    description: 'A full-stack library management platform with real-time borrowing, admin dashboards, authentication, and a modern dark UI. Built with Next.js 15 and PostgreSQL.',
    longDescription: 'A modern library management system featuring role-based access control, real-time book borrowing and returns, advanced search capabilities, and comprehensive admin dashboards. Optimized with debounced filtering (reducing redundant searches by 75%) and HTTP caching (cutting repeat database hits by 60%). Deployed with CI/CD pipelines for continuous delivery.',
    image: '/images/project3.jpg',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'NextAuth'],
    category: 'Full-Stack',
    githubUrl: 'https://github.com/JihanChowdhury334/nextjs-libary-platform',
    features: [
      'Real-time borrowing and returns',
      'Advanced search and filtering with 300ms debounce',
      'Admin dashboard for users and books',
      'Role-based access control',
      'PDF receipts for transactions',
      'Optimized with HTTP caching (5-10 min)'
    ],
    techStack: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'NextAuth', 'TailwindCSS', 'Vercel'],
    whatILearned: [
      'Full-stack development with App Router',
      'Authentication using NextAuth.js',
      'Schema design with Drizzle ORM',
      'Building responsive dashboards',
      'Performance optimization with caching and debouncing'
    ]
  },
  {
    id: '4',
    slug: '8bit-cpu',
    title: '8-bit CPU (FPGA)',
    description: 'A simple 8-bit CPU implemented using VHDL on an FPGA board, featuring multiple ALU variants, a decoder, registers, and FSM control logic.',
    longDescription: 'A hardware implementation of an 8-bit CPU designed in VHDL and deployed on an FPGA development board. Features include custom register files, a finite state machine for instruction control, an opcode decoder, three ALU variants for different operations, and 7-segment display output. Complete with simulation waveforms to verify design functionality.',
    image: '/images/project4.jpg',
    tags: ['VHDL', 'Quartus II', 'FPGA', 'Digital Logic'],
    category: 'Backend',
    githubUrl: 'https://github.com/JihanChowdhury334/8bit-cpu-from-scratch',
    features: [
      'Registers and sequential logic',
      'FSM and opcode decoder',
      '3 ALU variants for custom operations',
      '7-segment display output',
      'Simulation waveforms verifying design'
    ],
    techStack: ['VHDL', 'Quartus II', 'FPGA', 'Digital Logic Design'],
    whatILearned: [
      'Hardware design using VHDL',
      'Sequential logic and finite state machines',
      'ALU design and opcode mapping',
      'FPGA workflow and simulation'
    ]
  },
  {
    id: '5',
    slug: 'issue-tracker',
    title: 'Issue Tracker SaaS',
    description: 'A SaaS-style issue tracking platform featuring authentication, issue CRUD, comments, and real-time search. Built with Next.js 15 and Drizzle ORM.',
    longDescription: 'A comprehensive issue tracking and project management platform built with modern web technologies. Features secure authentication, full CRUD operations for issues, threaded comment discussions, and real-time debounced search functionality. Built with type-safe database operations using Drizzle ORM and deployed with optimized caching strategies.',
    image: '/images/project5.jpg',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'NextAuth'],
    category: 'Full-Stack',
    githubUrl: 'https://github.com/JihanChowdhury334/issue-tracker-nextjs',
    features: [
      'Secure authentication with NextAuth',
      'Issue creation and tracking',
      'Full comment threads',
      'Real-time debounced search',
      'Type-safe schema and migrations'
    ],
    techStack: ['Next.js 15', 'TypeScript', 'Neon PostgreSQL', 'Drizzle ORM', 'NextAuth', 'TailwindCSS'],
    whatILearned: [
      'Implementing authentication with NextAuth',
      'Typed database operations with Drizzle ORM',
      'Building SaaS dashboards in Next.js',
      'Optimizing performance via caching'
    ]
  },
  {
    id: '6',
    slug: 'human-following-robot',
    title: 'Human-Following Robot',
    description: 'An autonomous Arduino robot that uses ultrasonic scanning and IR sensors to track and follow a human, while avoiding obstacles.',
    longDescription: 'An embedded systems project featuring an autonomous mobile robot built with Arduino. The robot uses a servo-mounted ultrasonic sensor for environmental scanning, IR sensors for directional tracking, and a 4-wheel motor control system. It can detect, track, and follow a person while avoiding obstacles in real-time.',
    image: '/images/project6.jpg',
    tags: ['Arduino', 'C++', 'Ultrasonic Sensor', 'IR Sensors'],
    category: 'Backend',
    githubUrl: 'https://github.com/JihanChowdhury334/human-following-robot',
    features: [
      'Servo-mounted ultrasonic scanner',
      'IR-based directional sensing',
      '4-wheel motor control',
      'Obstacle avoidance',
      'Serial debugging output'
    ],
    techStack: ['Arduino', 'C++', 'Ultrasonic Sensor', 'IR Sensors', 'Motor Driver'],
    whatILearned: [
      'Embedded C++ programming',
      'Sensor fusion techniques',
      'PWM motor control',
      'Autonomous robotics basics'
    ]
  },
  {
    id: '7',
    slug: 'climate-data-analysis',
    title: 'Climate Data Analysis in C',
    description: 'A C program that processes global temperature data (1750–2015), computes statistical patterns, and generates visualizations using GNUPlot.',
    longDescription: 'A data analysis application written in C that processes over 260 years of global temperature records. The program parses CSV datasets, computes yearly and monthly averages, identifies extreme weather events, performs century-wise comparisons, and generates scientific visualizations using GNUPlot for trend analysis.',
    image: '/images/project7.jpg',
    tags: ['C', 'CSV Parsing', 'GNUPlot', 'Data Processing'],
    category: 'Backend',
    githubUrl: 'https://github.com/JihanChowdhury334/weather-data-analysis',
    features: [
      'Parsing 260+ years of temperature data',
      'Yearly and monthly averages',
      'Century-wise comparisons',
      'Extreme-weather detection',
      'Automated plotting with GNUPlot'
    ],
    techStack: ['C', 'CSV Parsing', 'GNUPlot', 'Data Processing'],
    whatILearned: [
      'Processing large datasets in C',
      'Statistical computation techniques',
      'Generating scientific plots',
      'File parsing and modular coding'
    ]
  },
  {
    id: '8',
    slug: 'java-library-app',
    title: 'Java Library Management App',
    description: 'A Java console-based library/bookstore simulation implementing OOP principles and the State design pattern for dynamic membership levels.',
    longDescription: 'A console-based library management application built in Java demonstrating core object-oriented programming principles. Features a modular class architecture with Book, Customer, and Owner entities, implements the State design pattern for Silver/Gold membership levels, and includes a complete borrow/return system.',
    image: '/images/project8.jpg',
    tags: ['Java', 'OOP', 'State Pattern'],
    category: 'Backend',
    githubUrl: 'https://github.com/JihanChowdhury334/libary-app',
    features: [
      'Book, Customer, and Owner classes',
      'Silver/Gold membership states',
      'Borrow and return system',
      'Class-based modular design',
      'User state behavior control'
    ],
    techStack: ['Java', 'OOP', 'State Pattern', 'Console Application'],
    whatILearned: [
      'OOP fundamentals (encapsulation, inheritance, polymorphism)',
      'State Pattern implementation',
      'Java class architecture',
      'Console-based system design'
    ]
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'All') return projects;
  return projects.filter(project => project.category === category);
};
