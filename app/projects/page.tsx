'use client';

import { useState } from 'react';
import { AnimatedSection } from '@/components/animated-section';
import { ProjectCard } from '@/components/project-card';
import { projects, getProjectsByCategory } from '@/data/projects';
import { Button } from '@/components/ui/button';

const categories = ['All', 'Full-Stack', 'Frontend', 'Backend', 'AI/ML'];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredProjects = getProjectsByCategory(activeCategory);

  return (
    <div className="min-h-screen py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h1 className="text-5xl font-bold text-center mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            A collection of projects showcasing my skills in full-stack development, AI/ML, and modern web technologies.
          </p>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
