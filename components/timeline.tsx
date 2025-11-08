'use client';

import { motion } from 'framer-motion';
import type { Experience } from '@/data/experience';

interface TimelineProps {
  experiences: Experience[];
}

export function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600" />

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } flex-col md:space-x-8`}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-gray-950 z-10" />

            {/* Content card */}
            <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} ml-8 md:ml-0`}>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-shadow">
                <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2">
                  {exp.startDate} - {exp.endDate}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {exp.position}
                </h3>
                <h4 className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                  {exp.company} • {exp.location}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
                
                <div className="space-y-2 mb-4">
                  <h5 className="font-semibold text-gray-900 dark:text-white">Key Achievements:</h5>
                  <ul className={`space-y-1 text-sm text-gray-600 dark:text-gray-400 ${index % 2 === 0 ? 'md:list-inside' : ''}`}>
                    {exp.achievements.slice(0, 3).map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Empty space for the other side */}
            <div className="hidden md:block w-5/12" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
