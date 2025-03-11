import React from "react";
import Hero from "./Hero";
import MissionVisionSection from "./MissionVisionSection";

export default function AboutMissionVision() {
  return (
    <div>
      <Hero 
        title="Mission & Vision" 
        description="Understand the guiding principles that shape our educational approach."
      />
      <MissionVisionSection />
    </div>
  );
}