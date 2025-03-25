// src/pages/Give.tsx
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Give() {
  const donationDetails = {
    accountNumber: "185720100000042",
    bankName: "Canara Bank",
    branch: "Parappur",
    ifscCode: "CNRB00001857",
    phoneNumber: "9061450356",
    qrImage:
      "https://res.cloudinary.com/dkj7godal/image/upload/v1742915682/DMAC/xx5yomypj97kjacjhpxm.jpg", // Placeholder for QR code image
    extraImage:
      "https://res.cloudinary.com/dkj7godal/image/upload/v1742915682/DMAC/xx5yomypj97kjacjhpxm.jpg", // Placeholder for extra donation-related image
  };

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
            <h1 className="text-4xl md:text-5xl font-bold">Give</h1>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              Support our mission through donations and contributions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16 bg-white relative">
        {/* Extra Image as Background Overlay */}
        <div
          className="absolute inset-0 bg-gray-200 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: `url(${donationDetails.extraImage})`,
          }}
        >
          <div className="absolute inset-0 bg-white/80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-lg mx-auto bg-gray-50 rounded-2xl shadow-xl p-8 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Make a Donation
            </h2>
            <p className="text-gray-600 mb-6">
              Your contribution helps us continue our mission of educational
              excellence.
            </p>

            {/* QR Code */}
            {/* QR Code */}
            <div className="mb-6">
              <div className="w-40 h-48 mx-auto bg-gray-200 flex items-center justify-center rounded-lg shadow-sm overflow-hidden">
                <img
                  src={donationDetails.qrImage}
                  alt="QR Code for Donation"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">Scan to Pay</p>
            </div>

            {/* Donation Details */}
            <div className="text-gray-700 space-y-3 bg-white p-6 rounded-lg shadow-inner">
              <p>
                <span className="font-semibold">A/C No:</span>{" "}
                {donationDetails.accountNumber}
              </p>
              <p>
                <span className="font-semibold">Bank:</span>{" "}
                {donationDetails.bankName}
              </p>
              <p>
                <span className="font-semibold">Branch:</span>{" "}
                {donationDetails.branch}
              </p>
              <p>
                <span className="font-semibold">IFSC Code:</span>{" "}
                {donationDetails.ifscCode}
              </p>
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                {donationDetails.phoneNumber}
              </p>
            </div>

            {/* Button */}
            <div className="mt-8">
              <Button className="w-full bg-gradient-to-r from-gray-300 to-white text-gray-800 hover:from-gray-400 hover:to-white transition-colors border-2 border-gray-400 rounded-xl shadow-lg px-6 py-3 text-base font-medium">
                Donate Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
