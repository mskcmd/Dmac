// src/Pages/About/ValuesSection.tsx
import React from "react";
import { motion } from "framer-motion";

export default function ValuesSection() {
  const values = [
    {
      title: "Excellence",
      description:
        "Striving for the highest standards in education, administration, and all our endeavors.",
    },
    {
      title: "Integrity",
      description:
        "Maintaining honesty, transparency, and ethical conduct in all our actions and decisions.",
    },
    {
      title: "Respect",
      description:
        "Treating all individuals with dignity and respecting diversity of thoughts and backgrounds.",
    },
    {
      title: "Compassion",
      description:
        "Showing kindness, empathy, and concern for the welfare of others in our community.",
    },
    {
      title: "Responsibility",
      description:
        "Taking ownership of our actions and being accountable to our students, staff, and community.",
    },
    {
      title: "Innovation",
      description:
        "Embracing new ideas, approaches, and technologies to continuously improve our educational offerings.",
    },
  ];

  return (
    <section className="py-16 bg-white" id="values">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-t-2 border-black"
            >
              <h3 className="text-xl font-semibold text-black mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
