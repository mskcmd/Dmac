

// src/pages/about/History.jsx
import React from "react";
import { motion } from "framer-motion";

export default function History() {
  return (
    <section id="history" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-black">Our History</h2>
            <div className="mt-6 space-y-4 text-gray-600">
              <p>
                Founded in 1985, Sa-adiya has grown from a small educational institute to a comprehensive educational complex that serves thousands of students.
              </p>
              <p>
                Our journey began with a vision to provide quality education that balances traditional values with modern knowledge, preparing students to excel in both religious and worldly pursuits.
              </p>
              <p>
                Over the decades, we have expanded our facilities, diversified our academic programs, and strengthened our commitment to educational excellence and community service.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-80 rounded-lg bg-gray-200 shadow-lg overflow-hidden">
              {/* Placeholder for history image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-500 text-lg">Historical Building Image</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
