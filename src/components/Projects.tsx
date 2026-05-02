"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Pomodoro Timer',
    description: 'A clean, distraction-free Pomodoro timer with focus analytics and site blocking.',
    image: '/MatthewMcCambridge/pomoimg.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'Chrome Extension'],
    demo: 'https://chromewebstore.google.com/detail/pomo-%E2%80%94-minimalist-pomodor/heeenniacnjglmmgmcladfflcdjlabei?authuser=0&hl=en-GB'
  },
  {
    id: 2,
    title: 'Coming Soon',
    description: '',
    image: '/MatthewMcCambridge/comingsoon.jpg',
    tech: [],
    github: 'https://github.com',
    demo: 'https://github.com/Taboo0-0'
  },
  {
    id: 3,
    title: 'Coming Soon',
    description: '',
    image: '/MatthewMcCambridge/comingsoon.jpg',
    tech: [],
    github: 'https://github.com',
    demo: 'https://github.com/Taboo0-0'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-black dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto w-fit">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-800 text-gray-300 text-sm rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {/* {project.github && (
                    <a href={project.github} className="flex items-center text-gray-400 hover:text-white transition-colors">
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                  )} */}
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white transition-colors">
                    <ExternalLink size={16} className="mr-1" />
                    Project
                  </a>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}