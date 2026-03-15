"use client";

import { motion } from 'framer-motion';

const skills = {
  Languages: ['JavaScript', 'TypeScript', 'Python', 'Java'],
  Frontend: ['React', 'Next.js', 'TailwindCSS', 'Framer Motion'],
  Backend: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'],
  DevOps: ['Docker', 'AWS', 'Vercel', 'Git'],
  Tools: ['VS Code', 'Figma', 'Postman', 'Jest']
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-black dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Tech Stack
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, techs], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{category}</h3>
              <div className="grid grid-cols-2 gap-3">
                {techs.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (index * 0.05) }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-800/50 rounded-lg p-3 text-center text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-200 cursor-pointer"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}