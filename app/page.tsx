'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/animated-section';
import { ArrowRight, Download, Code2, Database, Smartphone, Cloud } from 'lucide-react';

export default function Home() {
  const techStack = [
    { name: 'Frontend', icon: Smartphone, items: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'] },
    { name: 'Backend', icon: Code2, items: ['Python', 'Java', 'C/C++', 'Node.js'] },
    { name: 'Database', icon: Database, items: ['PostgreSQL', 'Oracle SQL', 'MongoDB', 'Drizzle ORM'] },
    { name: 'DevOps', icon: Cloud, items: ['Git', 'GitHub', 'Vercel', 'Azure'] },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-6 inline-block"
            >
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Hi, I'm Jihan Chowdhury
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-4 font-medium">
              Computer Engineering Student | Software Developer
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Building exceptional software solutions from full-stack web applications to embedded systems.
              Passionate about creating scalable, efficient, and user-friendly applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/projects">
                <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="/swe_res.pdf" download>
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-6">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-4">Tech Stack</h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              I work with cutting-edge technologies to build robust and scalable solutions
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((category, index) => {
              const Icon = category.icon;
              return (
                <AnimatedSection key={category.name} delay={index * 0.1}>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all hover:scale-105">
                    <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      {category.name}
                    </h3>
                    <ul className="space-y-2">
                      {category.items.map((item) => (
                        <li
                          key={item}
                          className="text-gray-600 dark:text-gray-400 flex items-center"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-white mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
