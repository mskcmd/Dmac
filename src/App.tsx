// src/App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import AboutHistory from "./Pages/About/History";
import AboutMissionVision from "./Pages/About/MissionVision";
import AboutValues from "./Pages/About/Values";
import AboutLeadership from "./Pages/About/Leadership";

import Institutions from "./Pages/Institutions";
import Admission from "./Pages/Admission";
import Give from "./Pages/Give";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import Academics from "./Pages/academics";
import AcademicsPrograms from "./Pages/academics/Programs";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* About Section Routes */}
          <Route path="/about/history" element={<AboutHistory />} />
          <Route path="/about/mission-vision" element={<AboutMissionVision />} />
          <Route path="/about/values" element={<AboutValues />} />
          <Route path="/about/leadership" element={<AboutLeadership />} />
          
          {/* Academics Section Routes */}
          <Route path="/academics" element={<Academics />} />
          <Route path="/academics/programs" element={<AcademicsPrograms />} />
          {/* <Route path="/academics/faculty" element={<AcademicsFaculty />} />
          <Route path="/academics/research" element={<AcademicsResearch />} />
          <Route path="/academics/library" element={<AcademicsLibrary />} /> */}
          
          {/* Other Main Routes */}
          <Route path="/institutions" element={<Institutions />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/give" element={<Give />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;