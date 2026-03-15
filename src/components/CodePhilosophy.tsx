"use client";

import { motion } from 'framer-motion';

export default function CodePhilosophy() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-black relative overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/20 rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Code Philosophy
          </motion.h2>

          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 leading-relaxed italic"
          >
            "Great software is invisible. It feels simple, fast, and obvious — even when the engineering behind it is complex."
          </motion.blockquote>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-400 mt-6 text-lg"
          >
            I believe in writing code that not only works, but works beautifully. Every line should tell a story,
            every function should have purpose, and every user interaction should feel effortless.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}