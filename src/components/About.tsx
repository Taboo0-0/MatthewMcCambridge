"use client";

import { motion } from 'framer-motion';

const experiences = [
  {
    year: '2025',
    title: 'McCambridge Consulting Ltd – Technology Intern',
    company: 'Web Development',
    description: 'Shadowed senior developers and was involved in discussion on ongoing projects.'
  },
  {
    year: '2022-2026',
    title: 'Computer Science Student',
    company: 'Secondary School',
    description: 'Learning all fundamental concepts of computer science and software development, with a focus on building projects and contributing to open-source.'
  },
  {
    year: '2020-Present',
    title: 'Freelance Developer',
    company: 'Self-employed',
    description: 'Developing customs projects for clients, including websites, automation tools, and small applications. Focused on delivering high-quality, efficient solutions tailored to client needs.'
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

        {/* Spotify Playlist */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <div className="flex justify-center">
            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/playlist/7GAW29EzL2w1DZq4MpqeBd?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}