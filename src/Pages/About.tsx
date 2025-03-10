// src/pages/About.tsx
import React from "react"
import { motion } from "framer-motion"

export default function About() {
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
            <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              Learn about our history, mission, and the values that guide our educational institution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
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

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-black">Mission & Vision</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Our guiding principles that shape our educational approach and institutional values.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-2xl font-bold text-black mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide comprehensive education that integrates Islamic values with modern knowledge, fostering intellectual growth, moral development, and social responsibility in our students.
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-black mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Providing quality education that meets international standards</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-black mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Nurturing moral values and ethical character in students</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-black mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Fostering a sense of social responsibility and community service</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-2xl font-bold text-black mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be a leading educational institution that produces knowledgeable, skilled, and morally upright individuals who contribute positively to society and uphold universal human values.
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-black mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Becoming a center of excellence in education and research</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-black mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Developing future leaders with strong moral foundations</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-black mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Creating a positive impact on society through education and service</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
           // src/pages/About.tsx (continued)

<h2 className="text-3xl font-bold text-black">Our Core Values</h2>
<p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
  The principles that guide our institution and form the foundation of our educational philosophy.
</p>
</motion.div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
{[
  {
    title: "Excellence",
    description: "Striving for the highest standards in education, administration, and all our endeavors."
  },
  {
    title: "Integrity",
    description: "Maintaining honesty, transparency, and ethical conduct in all our actions and decisions."
  },
  {
    title: "Respect",
    description: "Treating all individuals with dignity and respecting diversity of thoughts and backgrounds."
  },
  {
    title: "Compassion",
    description: "Showing kindness, empathy, and concern for the welfare of others in our community."
  },
  {
    title: "Responsibility",
    description: "Taking ownership of our actions and being accountable to our students, staff, and community."
  },
  {
    title: "Innovation",
    description: "Embracing new ideas, approaches, and technologies to continuously improve our educational offerings."
  }
].map((value, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-t-2 border-black"
  >
    <h3 className="text-xl font-semibold text-black mb-2">{value.title}</h3>
    <p className="text-gray-600">{value.description}</p>
  </motion.div>
))}
</div>
</div>
</section>

{/* Leadership Team */}
<section className="py-16 bg-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
viewport={{ once: true }}
className="text-center mb-12"
>
<h2 className="text-3xl font-bold text-black">Our Leadership</h2>
<p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
  Meet the dedicated individuals who guide our institution towards excellence.
</p>
</motion.div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
{[
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
].map((person, index) => (
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
</div>
)
}