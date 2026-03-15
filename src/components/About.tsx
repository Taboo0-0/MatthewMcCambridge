"use client";

import { motion } from 'framer-motion';

const experiences = [
  {
    year: '2024',
    title: 'Software Engineering Intern',
    company: 'Tech Startup',
    description: 'Built scalable web applications using React and Node.js'
  },
  {
    year: '2023',
    title: 'Computer Science Student',
    company: 'University',
    description: 'Focus on algorithms, system design, and software engineering'
  },
  {
    year: '2022',
    title: 'Freelance Developer',
    company: 'Self-employed',
    description: 'Developed custom web solutions for small businesses'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Who I Am</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              I'm a passionate computer science student with a keen interest in building elegant,
              efficient software solutions. My journey in tech started with curiosity about how
              things work behind the scenes, and it has evolved into a deep appreciation for
              clean code and thoughtful design.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community. I believe
              in the power of technology to solve real-world problems and create meaningful experiences.
            </p>
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-white mb-3">Interests</h4>
              <div className="flex flex-wrap gap-2">
                {['Software Engineering', 'System Design', 'Startups', 'Building Tools'].map((interest) => (
                  <span key={interest} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-gray-700">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div className="text-sm text-blue-400 font-semibold mb-1">{exp.year}</div>
                  <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                  <div className="text-gray-400 mb-2">{exp.company}</div>
                  <p className="text-gray-300 text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}