// src/Pages/Academics/index.tsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Academics() {
  const masjidImage =
    "https://res.cloudinary.com/dkj7godal/image/upload/v1742907594/DMAC/zuhzkjhef2upsj4e3xln.jpg";
  const collgeoldimage1 =
    "https://res.cloudinary.com/dkj7godal/image/upload/v1742907593/DMAC/ognfylnp5k5ntw72rwur.jpg";
  const hifzCollege =
    "https://res.cloudinary.com/dkj7godal/image/upload/v1742906322/DMAC/llz6fabvrfnfaj6dxane.jpg";
  const oldmasjidImage =
    "https://res.cloudinary.com/dkj7godal/image/upload/v1742906321/DMAC/jpgqfyedujfl7b6fwqsv.jpg";
  const academicSections = [
    {
      title: "College of Islamic Shareeh",
      description:
        "Explore our programs focused on Islamic jurisprudence and legal studies.",
      link: "/academics/islamic-shareeh",
      image: oldmasjidImage,
    },
    {
      title: "College of Islamic Science",
      description:
        "Dive into the study of Islamic theology, history, and sciences.",
      link: "/academics/islamic-science",
      image: masjidImage,
    },
    {
      title: "Thahfeezul Quran College",
      description:
        "Join our specialized program for Quran memorization and recitation.",
      link: "/academics/thahfeezul-quran",
      image: hifzCollege,
    },
    {
      title: "Edu Hub Library",
      description:
        "Access extensive resources for learning and research in our library.",
      link: "/academics/library",
      image: "library-image",
    },
    {
      title: "Kuthubu Khana",
      description:
        "Discover our collection of rare manuscripts and Islamic texts.",
      link: "/academics/kuthubu-khana",
      image: "kuthubu-image",
    },
    {
      title: "IT Lab",
      description:
        "Leverage cutting-edge technology to enhance your academic journey.",
      link: "/academics/it-lab",
      image: "itlab-image",
    },
    {
      title: "Darul Ma'arif Masjid",
      description: "Engage with our community and spiritual learning center.",
      link: "/academics/masjid",
      image: masjidImage,
    },
    {
      title: "Mehar Ali Shah College Bihar",
      description:
        "Learn about our regional campus offering diverse academic programs.",
      link: "/academics/mehar-ali-shah",
      image: "bihar-image",
    },
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
            <h1 className="text-4xl md:text-5xl font-bold">Academics</h1>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our commitment to educational excellence through our
              diverse academic offerings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Academic Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <div className="h-40 bg-gray-200 rounded-t-xl flex items-center justify-center overflow-hidden">
                  <img
                    src={section.image}
                    alt="Section Image"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-black mb-2">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {section.description}
                  </p>
                  <div className="mt-auto">
                    <Link to={section.link}>
                      <Button className="w-full bg-gradient-to-r from-gray-300 to-white text-gray-800 hover:from-gray-400 hover:to-white transition-colors border-2 border-gray-400 rounded-xl shadow-lg px-4 py-2 text-sm font-medium">
                        Read More
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
