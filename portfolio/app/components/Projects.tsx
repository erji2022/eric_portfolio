
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectsShowcase() {
  const projects = [
    {
      title: 'Knowlecy – AI-Powered Research Copilot',
      description:
	  'Knowlecy is a web app that helps researchers draft and manage papers with AI through a chat interface, PDF reading copilot, and writing assistant.',
      image: '/knowlecy.png',
      link: 'https://deliverable-1-2-knowlecy-release.vercel.app/',
    },
    {
      title: 'Pet Adoption Platform – Full-Stack App',
      description:
	  'A full-stack mock adoption platform where pet seekers can browse pets and shelters can connect with potential adopters.',
      image: '/pet.png',
      link: 'https://petpal-frontend.vercel.app/'
    },
    {
      title: 'Environmental Impact – Data Visualization',
      description:
	  'An interactive, scroll-based visualization that uses multiple datasets to show how human activities affect climate, air quality, plastic waste, and water resources.',
      image: '/316.png',
      link: 'https://csc-316-project.vercel.app/'
    },
    {
    title: 'Autotranslate Chat App',
    description:'Single device chat system built on Java language which translates texts and audio message between users',
    image: '/Screenshot_20221204_125121.png',
    link: 'https://github.com/CSC207-2022F-UofT/course-project-translate-chat-program'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800/50 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
                <Link
                  href={project.link}
                  target="_blank"
                  className="inline-block mt-4 text-green-600 dark:text-green-400 font-medium hover:underline"
                >
                  View Project →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
