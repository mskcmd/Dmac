import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, useAnimation } from "framer-motion";
import logo from "../assets/DM_logo-01-1.png";
import image1 from "../assets/01.jpg";
import image2 from "../assets/aaa.jpg";
import image3 from "../assets/ds.jpg";
import image4 from "../assets/FD_06505.png";
import image5 from "../assets/Darul Maarif.png";

export default function Home() {
  // State to manage the current hero image
  const [currentImage, setCurrentImage] = useState(0);

  // Array of hero images (replace with actual image URLs or imports)
  const heroImages = [image2, image3, image5];

  // Function to cycle through images
  const handleImageChange = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  };

  // Dummy data for departments (replace image URLs with actual ones)
  const departments = [
    {
      name: "DWAWA",
      description:
        "The Dwawa department focuses on outreach and community engagement, spreading knowledge and values through meaningful initiatives.",
      image: image2,
    },
    {
      name: "SHAREA",
      description:
        "Share'a department provides in-depth education on Islamic law and principles, fostering a deep understanding of Sharia practices.",
      image: image5,
    },
    {
      name: "HIFSZ DAEA",
      description:
        "Hifsz Daea combines memorization of the Quran with outreach, nurturing students to become ambassadors of Islamic teachings.",
      image: image4,
    },
    {
      name: "HIFZ",
      description:
        "The Hifz department is dedicated to the memorization of the Quran, guiding students to achieve mastery with devotion.",
      image: image1,
    },
  ];

  // Statistics Section Component
  const StatCounter = ({ end, label }: { end: number; label: string }) => {
    const controls = useAnimation();
    const [count, setCount] = useState(0);

    useEffect(() => {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
      });

      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 60); // 60 FPS
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }, [end, controls]);

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        className="text-center"
      >
        <motion.h3 className="text-3xl sm:text-4xl font-bold text-gray-800">
          {count}
        </motion.h3>
        <p className="mt-2 text-base sm:text-lg text-gray-600">{label}</p>
      </motion.div>
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-200 to-white text-gray-800 overflow-hidden">
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
              className="w-full h-full object-position-center object-cover rounded-lg shadow-2xl max-h-[80vh]"
            />
            <div className="absolute inset-0 bg-black opacity-40" />{" "}
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
              <span className="text-white">Darul Ma'arif Valiyora</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-2 sm:mt-4 text-base sm:text-lg md:text-xl text-white"
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
            <Button className="bg-gradient-to-r from-gray-300 to-white text-gray-800 hover:from-gray-400 hover:to-white transition-colors border-2 border-gray-400 rounded-xl shadow-lg px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium">
              Read More
            </Button>
          </motion.div>

          {/* Abstract Background Shapes */}
          <div className="absolute top-0 left-0 -translate-y-1/4 -translate-x-1/4 h-64 sm:h-96 w-64 sm:w-96 rounded-full bg-gray-300 opacity-20"></div>
          <div className="absolute bottom-0 right-0 translate-y-1/4 translate-x-1/4 h-64 sm:h-96 w-64 sm:w-96 rounded-full bg-gray-300 opacity-20"></div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gray-100 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Our Achievements
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              We take pride in our impact and success in shaping the future of
              our students.
            </p>
          </motion.div>

          <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <StatCounter end={200} label="Students" />
            <StatCounter end={4} label="Departments" />
            <StatCounter end={100} label="Success Rate (%)" />
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Our Departments
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Explore the diverse departments at Darul Ma'arif Valiyora, each
              dedicated to a unique aspect of Islamic education and outreach.
            </p>
          </motion.div>

          <div className="mt-10 sm:mt-12">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="py-8 sm:py-12"
              >
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-8`}
                >
                  {/* Department Image */}
                  <div className="w-full md:w-1/2">
                    <motion.img
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      src={dept.image}
                      alt={dept.name}
                      className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg"
                    />
                  </div>

                  {/* Department Content */}
                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-2xl sm:text-3xl font-bold text-gray-800"
                    >
                      {dept.name}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="mt-4 text-base sm:text-lg text-gray-600"
                    >
                      {dept.description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="mt-6"
                    >
                      <Button className="bg-gradient-to-r from-gray-300 to-white text-gray-800 hover:from-gray-400 hover:to-white transition-colors border-2 border-gray-400 rounded-xl shadow-lg px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium">
                        Read More
                      </Button>
                    </motion.div>
                    <motion.hr
                      initial={{ opacity: 0, width: 0 }}
                      whileInView={{ opacity: 1, width: "100%" }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className="mt-6 border-gray-300"
                    />
                  </div>
                </div>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Join Our Community
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Become a part of our community and contribute to our mission of
              providing quality education.
            </p>
            <div className="mt-6 sm:mt-8">
              <Button className="bg-gradient-to-r from-gray-300 to-white text-gray-800 hover:from-gray-400 hover:to-white transition-colors border-2 border-gray-400 rounded-xl shadow-lg px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium">
                Contact Us Today
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
