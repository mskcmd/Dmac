
// src/pages/about/Mission.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section id="mission" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-black">Mission & Vision</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our guiding principles that shape our educational approach and institutional values.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-sm"
          >
            <h3 className="text-2xl font-bold text-black mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide comprehensive education that integrates Islamic values with modern knowledge, fostering intellectual growth, moral development, and social responsibility in our students.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-black mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Providing quality education that meets international standards</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-black mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Nurturing moral values and ethical character in students</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-black mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Fostering a sense of social responsibility and community service</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-sm"
          >
            <h3 className="text-2xl font-bold text-black mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be a leading educational institution that produces knowledgeable, skilled, and morally upright individuals who contribute positively to society and uphold universal human values.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-black mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Becoming a center of excellence in education and research</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-black mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Developing future leaders with strong moral foundations</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-black mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Creating a positive impact on society through education and service</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
