import React from "react";
import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  description: string;
}

export default function Hero({ title, description }: HeroProps) {
  return (
    <section className="bg-black text-white py-16" id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
