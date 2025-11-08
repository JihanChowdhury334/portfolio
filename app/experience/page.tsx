import { AnimatedSection } from '@/components/animated-section';
import { Timeline } from '@/components/timeline';
import { experiences } from '@/data/experience';

export const metadata = {
  title: 'Experience - Jihan.dev',
  description: 'My professional work experience as a software engineer',
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h1 className="text-5xl font-bold text-center mb-4">Work Experience</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            My journey as a software engineer, building impactful products and growing my technical expertise.
          </p>
        </AnimatedSection>

        <Timeline experiences={experiences} />
      </div>
    </div>
  );
}
