// src/Pages/About/LeadershipSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // Assuming you have this Button component

export default function LeadershipSection() {
  // Leadership data from the previous design
  const leadershipTeam = [
    {
      name: "Abdul Kadir Baqavi Oorakam",
      position: "Principal",
      image:
        "https://res.cloudinary.com/dkj7godal/image/upload/v1742915192/DMAC/m6hrbgazrsbky75r9zds.jpg", // Replace with actual image
      description:
        "Leading with vision and dedication, Abdul Kadir Baqavi Oorakam guides our institution with wisdom and commitment to excellence.",
    },
    {
      name: "Ibrahim Saqafi Puzhakatteri",
      position: "Director",
      image:
        "https://res.cloudinary.com/dkj7godal/image/upload/v1742915192/DMAC/m0ajp3uyunjf1poj5cnu.jpg", // Replace with actual image
      description:
        "Ibrahim Saqafi Puzhakatteri oversees our mission, ensuring that our goals align with the values of education and community service.",
    },
    {
      name: "Abdurraheem Kidanzhi musliyar",
      position: "Usthad",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.QQ_VCEvVW66x7PSZJEJQgAHaHa&pid=Api&P=0&h=180", // Replace with actual image
      description:
        "A mentor and scholar, Abdurraheem Kidanzhi inspires students with his deep knowledge and passion for Islamic teachings.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100" id="leadership">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Our Leadership
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated leaders who guide Darul Ma'arif Valiyora with
            wisdom, vision, and a commitment to excellence.
          </p>
        </motion.div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadershipTeam.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                src={person.image}
                alt={person.name}
                className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
                {person.name}
              </h3>
              <p className="text-base sm:text-lg text-gray-500">
                {person.position}
              </p>
              <p className="mt-2 text-sm sm:text-base text-gray-600">
                {person.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Centered Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        ></motion.div>
      </div>
    </section>
  );
}
