// src/pages/Institutions.tsx
import React from "react"
import { motion } from "framer-motion"

export default function Institutions() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-black">Our Institutions</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our various educational institutions and their unique offerings.
          </p>
        </motion.div>
        
        {/* You can add institution listings here */}
      </div>
    </div>
  )
}



