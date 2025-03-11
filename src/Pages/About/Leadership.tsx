// src/Pages/About/Leadership.tsx (Standalone page version)
import React from "react";
import Hero from "./Hero";
import LeadershipSection from "./LeadershipSection";

export default function AboutLeadership() {
  return (
    <div>
      <Hero 
        title="Our Leadership" 
        description="Meet the dedicated individuals who guide our institution towards excellence."
      />
      <LeadershipSection />
    </div>
  );
}