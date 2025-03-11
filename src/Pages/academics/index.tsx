// src/Pages/Academics/index.tsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Academics() {
  const academicSections = [
    {
      title: "Academic Programs",
      description: "Explore our diverse range of academic programs designed to meet the needs of our students.",
      link: "/academics/programs",
      image: "programs-image"
    },
    {
      title: "Faculty",
      description: "Meet our distinguished faculty members who are leaders in their respective fields.",
      link: "/academics/faculty",
      image: "faculty-image"
    },
    {
      title: "Research",
      description: "Learn about our research initiatives and contributions to knowledge and society.",
      link: "/academics/research",
      image: "research-image"
    },
    {
      title: "Library",
      description: "Discover our extensive library resources that support learning and research.",
      link: "/academics/library",
      image: "library-image"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold">Academics</h1>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our commitment to educational excellence through our diverse academic offerings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Academic Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {academicSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">{section.image}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">{section.title}</h3>
                  <p className="text-gray-600 mb-4">{section.description}</p>
                  <Link 
                    to={section.link} 
                    className="inline-flex items-center text-black font-medium hover:underline"
                  >
                    Learn More
                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

