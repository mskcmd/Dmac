// src/Pages/About/LeadershipSection.tsx
import React from "react";
import { motion } from "framer-motion";

export default function LeadershipSection() {
  const leadershipTeam = [
    {
      name: "Dr. Ahmed Khan",
      position: "Chairman",
      description: "Dr. Khan brings over 30 years of experience in education leadership and a vision for integrating traditional values with modern education."
    },
    {
      name: "Prof. Sarah Johnson",
      position: "Principal",
      description: "Prof. Johnson has dedicated her career to developing innovative teaching methodologies and fostering academic excellence."
    },
    {
      name: "Mr. Mohammed Ali",
      position: "Director of Administration",
      description: "Mr. Ali oversees the day-to-day operations of our institution, ensuring efficient administration and resource management."
    }
  ];

  return (
    <section className="py-16 bg-gray-100" id="leadership">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadershipTeam.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Leadership Photo</span>
              </div>
              <h3 className="text-xl font-semibold text-black">{person.name}</h3>
              <p className="text-gray-800 font-medium">{person.position}</p>
              <p className="mt-2 text-gray-600">{person.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}