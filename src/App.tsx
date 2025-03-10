// src/App.tsx
import React from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./Pages/Navbar"
// import Breadcrumb from "./Pages/Breadcrumb"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Institutions from "./Pages/Institutions"
import Admission from "./Pages/Admission"
import Give from "./Pages/Give"
import Contact from "./Pages/Contact"
import Footer from "./Pages/Footer"


function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      {/* <Breadcrumb /> */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/institutions" element={<Institutions />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/give" element={<Give />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App