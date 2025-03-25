import React from "react";
import Hero from "./Hero";
import HistorySection from "./HistorySection";

export default function AboutHistory() {
  return (
    <div>
      <Hero 
        title="Our History" 
        description="Discover the journey of Jamia Darul Ma'arifil  from its founding to the present day."
      />
      <HistorySection />
    </div>
  );
}