import { AnimatedSection } from '@/components/animated-section';
import { Badge } from '@/components/ui/badge';
import { skills, education, interests } from '@/data/skills';
import { GraduationCap } from 'lucide-react';

export const metadata = {
  title: 'About - Jihan.dev',
  description: 'Learn more about me, my skills, education, and interests',
};

export default function AboutPage() {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <div className="min-h-screen py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h1 className="text-5xl font-bold text-center mb-4">About Me</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Computer Engineering student passionate about software development, from web apps to embedded systems.
          </p>
        </AnimatedSection>

        {/* Bio Section */}
        <AnimatedSection delay={0.1}>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Who I Am
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Hi! I'm Jihan Chowdhury, a Computer Engineering student at Toronto Metropolitan University with a passion for building innovative software solutions. 
                With a 3.8 GPA, I specialize in full-stack web development and embedded systems, creating everything from modern web applications to hardware-integrated projects.
              </p>
              <p>
                My journey in tech started with curiosity about how things work - from software algorithms to digital circuits. 
                This led me to pursue Computer Engineering with a software focus, where I've developed strong foundations in data structures, 
                algorithms, object-oriented design, and both software and hardware integration.
              </p>
              <p>
                I've worked on diverse projects ranging from AI-powered analytics platforms using AWS Bedrock to embedded systems like 
                human-following robots with Arduino. I've built full-stack applications with Next.js and PostgreSQL, designed database systems 
                with Oracle SQL, and even implemented an 8-bit CPU using VHDL on an FPGA board.
              </p>
              <p>
                When I'm not coding, you'll find me participating in hackathons, contributing to open-source projects, or exploring new technologies. 
                I'm always excited to take on new challenges and collaborate on meaningful projects that push the boundaries of what's possible.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection delay={0.2}>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Technical Skills
            </h2>
            <div className="space-y-8">
              {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                <div key={category}>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {categorySkills.map((skill) => (
                      <div key={skill.name} className="group relative">
                        <Badge
                          variant="secondary"
                          className="text-sm py-2 px-4 cursor-default"
                        >
                          {skill.name}
                        </Badge>
                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Education Section */}
        <AnimatedSection delay={0.3}>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="border-l-4 border-blue-600 pl-6 py-2"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <GraduationCap className="h-6 w-6 text-blue-600 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {edu.degree} in {edu.field}
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-400">
                        {edu.school}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        {edu.location} • {edu.startDate} - {edu.endDate}
                      </p>
                    </div>
                  </div>
                  {edu.description && (
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      {edu.description}
                    </p>
                  )}
                  {edu.achievements && (
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      {edu.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Interests Section */}
        <AnimatedSection delay={0.4}>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Beyond Code
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {interests.map((interest) => (
                <div
                  key={interest.name}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-300 dark:border-gray-600 hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-3">{interest.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {interest.name}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {interest.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
