// src/components/Footer.tsx
import React from "react"
import { Link } from "react-router-dom"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2">About Darul Ma'arif</h3>
            <ul className="space-y-2">
              {["About Darul Ma'arif", "History & Timeline", "Charity Missions", "Working Committee", "Office Bearers"].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institutions Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2">Institutions</h3>
            <ul className="space-y-2">
              {[
                "Islamic Sharee-ath College", 
                "College of Islamic Da'wa", 
                "Hifzul Quran College", 
              ].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quicklinks Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2">Quicklinks</h3>
            <ul className="space-y-2">
              {[
                "Contact Us", 
                "Quick Contacts", 
                "Donate Us", 
                "Login", 
                "Location Map", 
                "National Centers", 
                "International Centers", 
                "Student Organisation", 
                "Application Forms"
              ].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Public Relation Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2">Public Relation</h3>
            <ul className="space-y-2">
              {[
                "Blogs and Publishing", 
                "Downloads", 
                "News", 
                "Events", 
                "Gallery", 
                "Videos", 
                "Live", 
                "Notifications", 
                "Brochures"
              ].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div>
              <p className="text-gray-400">Darul Ma'arif Valiyora (PO), Malappuram, Kerala-676304</p>
            </div>
            <div className="text-right md:text-right">
              <p className="text-gray-400">&copy; {currentYear} Darul Ma'arif Valiyora. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}