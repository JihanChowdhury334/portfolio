import { notFound } from 'next/navigation';
import { getProjectBySlug, projects } from '@/data/projects';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/projects">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>

        <AnimatedSection>
          {/* Header */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800 mb-8">
            <div className="flex items-start justify-between mb-4">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h1>
              <Badge variant="secondary" className="text-sm">
                {project.category}
              </Badge>
            </div>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex gap-3">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="default">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </a>
              )}
            </div>
          </div>
        </AnimatedSection>

        {/* Overview */}
        <AnimatedSection delay={0.1}>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Overview
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.longDescription}
            </p>
          </div>
        </AnimatedSection>

        {/* Features */}
        <AnimatedSection delay={0.2}>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Key Features
            </h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        {/* Tech Stack */}
        <AnimatedSection delay={0.3}>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Technology Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* What I Learned */}
        <AnimatedSection delay={0.4}>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              What I Learned
            </h2>
            <ul className="space-y-3">
              {project.whatILearned.map((learning, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">💡</span>
                  <span className="text-gray-700 dark:text-gray-300">{learning}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
