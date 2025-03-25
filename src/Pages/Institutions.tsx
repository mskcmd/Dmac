// src/pages/Institutions.tsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import siraj from "../assets/siraj.png";
export default function Institutions() {
  const institutions = [
    {
      name: "Mehar Ali Shah College Bihar",
      description:
        "A regional campus offering diverse academic programs rooted in excellence.",
      director: "Sirajudhenn",
      image: "mehar-ali-shah-image", // Placeholder for college image
      directorImage: siraj, // Placeholder for director image
      link: "/institutions/mehar-ali-shah",
    },
    // Add more institutions here if needed
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
            <h1 className="text-4xl md:text-5xl font-bold">Our Institutions</h1>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our various educational institutions and their unique
              offerings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Institution Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            {institutions.map((institution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row overflow-hidden"
              >
                {/* Institution Image */}
                <div className="md:w-1/3 h-64 md:h-auto bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">
                    {institution.image}
                  </span>
                </div>

                {/* Institution Details */}
                <div className="md:w-2/3 p-6 flex flex-col">
                  <h2 className="text-2xl font-bold text-black mb-2">
                    {institution.name}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {institution.description}
                  </p>

                  {/* Director Info */}
                  <div className="flex items-center mb-4">
                    <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                      <img
                        src={institution.directorImage}
                        alt="Director"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="text-gray-800 font-semibold">Director</p>
                      <p className="text-gray-600">{institution.director}</p>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="mt-auto">
                    <Link to={institution.link}>
                      <Button className="w-full md:w-auto bg-gradient-to-r from-gray-300 to-white text-gray-800 hover:from-gray-400 hover:to-white transition-colors border-2 border-gray-400 rounded-xl shadow-lg px-6 py-2 text-sm font-medium">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
