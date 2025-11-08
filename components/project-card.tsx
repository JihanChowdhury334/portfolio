'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
        <CardHeader>
          <div className="flex items-start justify-between">
            <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </CardTitle>
            <Badge variant="secondary">{project.category}</Badge>
          </div>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 5).map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 5 && (
              <Badge variant="outline">+{project.tags.length - 5}</Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
              onClick={(e) => e.stopPropagation()}
            >
              <Button variant="default" className="w-full">
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </Button>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <Button variant="outline" size="icon">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
