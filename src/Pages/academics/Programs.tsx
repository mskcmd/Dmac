// Create a placeholder for each Academic section component
// src/Pages/Academics/Programs.tsx
import React from "react";
import { motion } from "framer-motion";

export default function AcademicsPrograms() {
  return (
    <div>
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold">Academic Programs</h1>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our diverse range of academic programs designed to meet the needs of our students.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600">Programs content will go here...</p>
        </div>
      </section>
    </div>
  );
}