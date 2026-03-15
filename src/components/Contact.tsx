"use client";

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-900 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-4"
        >
          Let's build something great.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 text-center mb-12 text-lg"
        >
          Have a project in mind? I'd love to hear about it.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
              <p className="text-gray-400 mb-6">
                I'm always interested in new opportunities and exciting projects.
                Let's connect and discuss how we can work together.
              </p>
            </div>

            <div className="space-y-4">
              <a href="mailto:hello@mathew.com" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Mail size={20} className="mr-3" />
                hello@mathew.com
              </a>

              <div className="flex space-x-4 pt-4">
                <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}