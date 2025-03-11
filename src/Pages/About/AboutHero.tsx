// src/pages/about/AboutHero.jsx
import React from "react";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Learn about our history, mission, and the values that guide our educational institution.
          </p>
        </motion.div>
      </div>
    </section>
  );
}