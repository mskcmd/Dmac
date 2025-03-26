import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, 
  ChevronLeft 
} from "lucide-react";

export default function MobileHeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  // Image URLs
  const heroImages = [
    "https://res.cloudinary.com/dkj7godal/image/upload/v1742907594/DMAC/zuhzkjhef2upsj4e3xln.jpg",
    "https://res.cloudinary.com/dkj7godal/image/upload/v1742907593/DMAC/ognfylnp5k5ntw72rwur.jpg",
    "https://res.cloudinary.com/dkj7godal/image/upload/v1742906322/DMAC/llz6fabvrfnfaj6dxane.jpg"
  ];

  const handleImageChange = (direction = 'next') => {
    if (direction === 'next') {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    } else {
      setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    }
  };

  // Auto-advance images
  useEffect(() => {
    const interval = setInterval(() => {
      handleImageChange('next');
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[80vh] overflow-hidden">
      {/* Background Image with Parallax and Zoom Effect */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentImage}
          initial={{ 
            opacity: 0, 
            scale: 1.1,
            filter: "brightness(0.6)"
          }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            filter: "brightness(0.7)"
          }}
          exit={{ 
            opacity: 0, 
            scale: 1.1,
            filter: "brightness(0.6)"
          }}
          transition={{ 
            duration: 1, 
            ease: "easeInOut"
          }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src={heroImages[currentImage]} 
            alt={`Hero image ${currentImage + 1}`}
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>

      {/* Navigation Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-2 z-10">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleImageChange('prev')}
          className="bg-white/20 rounded-full p-2"
        >
          <ChevronLeft className="text-white" />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleImageChange('next')}
          className="bg-white/20 rounded-full p-2"
        >
          <ChevronRight className="text-white" />
        </motion.button>
      </div>

      {/* Content Overlay */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute bottom-0 left-0 right-0 p-6 text-white text-center"
      >
        {/* Image Indicators */}
        <div className="flex justify-center space-x-2 mb-4">
          {heroImages.map((_, index) => (
            <motion.div
              key={index}
              className={`h-1 w-8 rounded-full transition-all duration-300 ${
                currentImage === index 
                  ? 'bg-white' 
                  : 'bg-white/50'
              }`}
              initial={{ scale: 1 }}
              animate={{ 
                scale: currentImage === index ? 1.2 : 1,
                width: currentImage === index ? 32 : 20
              }}
            />
          ))}
        </div>

        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h1 className="text-2xl sm:text-3xl font-bold mb-3 drop-shadow-lg">
            Darul Ma'arif Valiyora
          </h1>
          <p className="text-sm sm:text-base mb-4 opacity-90 max-w-md mx-auto drop-shadow-md">
            Empowering minds, nurturing souls, and building futures through quality education and values.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              className="bg-white/20 text-white border-white/30 hover:bg-white/30"
            >
              Explore More
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}