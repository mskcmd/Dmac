// src/pages/academics/index.jsx
import React from "react";
import { motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";

export default function Academics() {
  const location = useLocation();
  const isRootAcademicsPage = location.pathname === "/academics";

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
              Discover our academic programs, faculty, research initiatives, and educational resources.
            </p>
          </motion.div>
        </div>
      </section>

      {isRootAcademicsPage ? <AcademicsOverview /> : <Outlet />}
    </div>
  );
}

// A component that renders on the main Academics page
function AcademicsOverview() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-black">Academic Excellence</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Explore the various aspects of our academic offerings by navigating to the specific sections below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Programs", path: "/academics/programs", description: "Explore our diverse academic programs and courses." },
            { title: "Faculty", path: "/academics/faculty", description: "Meet our distinguished faculty members and instructors." },
            { title: "Research", path: "/academics/research", description: "Learn about our research initiatives and scholarly activities." },
            { title: "Library", path: "/academics/library", description: "Discover our extensive library resources and facilities." }
          ].map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all p-6 border-t-2 border-black"
              onClick={() => window.location.href = section.path}
              style={{ cursor: 'pointer' }}
            >
              <h3 className="text-xl font-semibold text-black mb-2">{section.title}</h3>
              <p className="text-gray-600">{section.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}