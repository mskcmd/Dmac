// src/Pages/About/Values.tsx (Standalone page version)
import React from "react";
import Hero from "./Hero";
import ValuesSection from "./ValuesSection";

export default function AboutValues() {
  return (
    <div>
      <Hero 
        title="Our Core Values" 
        description="The principles that guide our institution and form the foundation of our educational philosophy."
      />
      <ValuesSection />
    </div>
  );
}