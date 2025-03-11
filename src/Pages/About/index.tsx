import React from "react";
import { motion } from "framer-motion";
import Hero from "./Hero";
import HistorySection from "./HistorySection";
import MissionVisionSection from "./MissionVisionSection";
import ValuesSection from "./ValuesSection";
import LeadershipSection from "./LeadershipSection";


export default function About() {
  return (
    <div>
      <Hero 
        title="About Us"
        description="Learn about our history, mission, and the values that guide our educational institution."
      />
      <HistorySection />
      <MissionVisionSection />
      <ValuesSection />
      <LeadershipSection />
    </div>
  );
}