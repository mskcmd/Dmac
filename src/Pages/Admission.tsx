// src/pages/Admission.tsx
import React from "react"
import { motion } from "framer-motion"

export default function Admission() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-black">Admission</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Information about our admission process, requirements, and application procedures.
          </p>
        </motion.div>
        
        {/* You can add admission information here */}
      </div>
    </div>
  )
}