// src/pages/about/History.jsx
import React from "react";
import { motion } from "framer-motion";
import image4 from "../../assets/aaa.jpg";


export default function History() {
  return (
    <section id="history" className="py-16 bg-white">
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
                Jamia Darul Ma'arifil Islamiyya is one of the premier Islamic
                institutions in Southern India. It was established by veteran
                scholar and visionary, Ustad OKM Bappu Musliyar in 1975.
                Installed in Valiyora, a pacific village in the valley of river
                Kadalundi, it is the centre for carving par excellence
                generations, spiritually tuned & academically well bred, to lead
                the community.
              </p>
              <p>
                Our journey began with a vision to provide quality education
                that balances traditional values with modern knowledge,
                preparing students to excel in both religious and worldly
                pursuits.
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
                <span className="text-gray-500 text-lg">
                  <img src={image4}  alt=""/>{" "}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
