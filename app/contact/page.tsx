'use client';

import { AnimatedSection } from '@/components/animated-section';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h1 className="text-5xl font-bold text-center mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <AnimatedSection delay={0.1}>
            <Card className="h-full">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Send a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                      placeholder="Project inquiry"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <Button type="submit" className="w-full py-6 text-lg" disabled={isLoading}>
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </Button>
                  {status === 'success' && (
                    <p className="text-sm text-green-600 dark:text-green-400 text-center font-medium">
                      Message sent successfully! I'll get back to you soon.
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="text-sm text-red-600 dark:text-red-400 text-center font-medium">
                      Failed to send message. Please try again or email me directly.
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Contact Info */}
          <div className="space-y-6">
            <AnimatedSection delay={0.2}>
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                        <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                          Email
                        </h3>
                        <a
                          href="mailto:jihanchowdhury334@gmail.com"
                          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          jihanchowdhury334@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                          Location
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Toronto, ON
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                    Connect With Me
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href="https://github.com/JihanChowdhury334"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Github className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                      <span className="font-medium text-gray-900 dark:text-white">
                        GitHub
                      </span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/jihan-chowdhury-aa6506292/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Linkedin className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                      <span className="font-medium text-gray-900 dark:text-white">
                        LinkedIn
                      </span>
                    </a>
                    <a
                      href="mailto:jihanchowdhury334@gmail.com"
                      className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Mail className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                      <span className="font-medium text-gray-900 dark:text-white">
                        Email
                      </span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <Card className="bg-gradient-to-br from-blue-600 to-purple-600 border-none">
                <CardContent className="p-8 text-white">
                  <h3 className="text-xl font-bold mb-3">Let's Collaborate!</h3>
                  <p className="text-blue-100 mb-4">
                    I'm always interested in hearing about new projects and opportunities.
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                  </p>
                  <p className="text-sm text-blue-200">
                    Average response time: 24-48 hours
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
