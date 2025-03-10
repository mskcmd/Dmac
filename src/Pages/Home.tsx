// src/pages/Home.tsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  // State to manage the current hero image
  const [currentImage, setCurrentImage] = useState(0);

  // Array of hero images (replace with actual image URLs or imports)
  const heroImages = [
    "https://www.publicbooks.org/wp-content/uploads/2019/03/1940-GREENSBORO-NC-Women%E2%80%99s-College-of-University-of-crop.jpg",
    "https://images.news18.com/ibnlive/uploads/2020/06/1591879200_indian-institute-of-technology-madras.jpg",
    "https://www.ssims.edu.in/wp-content/uploads/2020/03/sri-siddhartha-institute-of-business-management-tumkur-01.jpg",
  ];

  // Function to cycle through images
  const handleImageChange = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-black text-white overflow-hidden">
        <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[80vh]">
          {/* Full-width Hero Image with Click to Change */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 cursor-pointer"
            onClick={handleImageChange}
          >
            <img
              src={heroImages[currentImage]}
              alt="Hero Image"
              className="w-full h-full object-cover object-center rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-black opacity-40" />{" "}
            {/* Overlay for text readability */}
          </motion.div>

          {/* Text Content - Responsive positioning for mobile */}
          <div className="absolute bottom-24 sm:bottom-20 md:bottom-16 left-4 sm:left-6 md:left-8 max-w-xs sm:max-w-sm md:max-w-lg z-10 font-mono">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-5x lg:text-5xl font-bold leading-tight"
            >
              Welcome to{" "}
              <span className="text-gray-300">Darul Ma'arif Valiyora</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-2 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-300"
            >
              Empowering minds, nurturing souls, and building futures through
              quality education and values.
            </motion.p>
          </div>

          {/* "Read More" Button - Responsive positioning */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-4 sm:bottom-8 md:bottom-16 right-4 sm:right-6 md:right-8 z-10"
          >
            <Button className="bg-gradient-to-r from-blue-900 to-black text-white hover:from-blue-900 hover:to-black transition-colors border-2 border-blue-400 rounded-xl shadow-lg px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium">
              Read More
            </Button>
          </motion.div>

          {/* Abstract Background Shapes */}
          <div className="absolute top-0 left-0 -translate-y-1/4 -translate-x-1/4 h-64 sm:h-96 w-64 sm:w-96 rounded-full bg-gray-800 opacity-20"></div>
          <div className="absolute bottom-0 right-0 translate-y-1/4 translate-x-1/4 h-64 sm:h-96 w-64 sm:w-96 rounded-full bg-gray-800 opacity-20"></div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-black">
              Our Mission
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              We are committed to providing quality education that integrates
              Islamic values with modern knowledge to nurture well-rounded
              individuals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Quality Education",
                description:
                  "Providing high-quality education following both traditional and modern methodologies.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 sm:h-10 sm:w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14v7"
                    />
                  </svg>
                ),
              },
              {
                title: "Character Building",
                description:
                  "Focusing on moral values, ethics, and character development alongside academic excellence.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 sm:h-10 sm:w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Community Service",
                description:
                  "Encouraging students to engage in community service and contribute to society's betterment.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 sm:h-10 sm:w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-black mb-3 sm:mb-4">{item.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-black">
              Join Our Community
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Become a part of our community and contribute to our mission of
              providing quality education.
            </p>
            <div className="mt-6 sm:mt-8">
            <Button className="bg-gradient-to-r from-blue-900 to-black text-white hover:from-blue-900 hover:to-black transition-colors border-2 border-blue-400 rounded-xl shadow-lg px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium">
                Contact Us Today
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
