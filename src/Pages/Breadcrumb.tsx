// src/components/Breadcrumb.tsx
import { Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLocation, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import React from "react"

export default function Breadcrumb() {
  const location = useLocation()
  const [currentPath, setCurrentPath] = useState("")
  
  useEffect(() => {
    // Get the current path without leading slash
    const path = location.pathname.substring(1)
    
    // Capitalize first letter and replace hyphens with spaces
    if (path) {
      setCurrentPath(path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' '))
    } else {
      setCurrentPath("Home")
    }
  }, [location])

  return (
    <div className="bg-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link to="/" className="text-gray-500 hover:text-black transition-colors">
                  <Home className="h-5 w-5" />
                </Link>
              </li>
              {currentPath !== "Home" && (
                <>
                  <li>
                    <span className="text-gray-500">/</span>
                  </li>
                  <li>
                    <span className="text-gray-800 font-medium">{currentPath}</span>
                  </li>
                </>
              )}
            </ol>
          </nav>
       
        </div>
      </div>
    </div>
  )
}