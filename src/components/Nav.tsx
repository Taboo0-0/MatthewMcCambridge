"use client";

import { motion } from 'framer-motion';

export default function Nav() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-bold text-white"
        >
          Matthew
        </motion.div>

        <div className="flex items-center space-x-8">
          <div className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}