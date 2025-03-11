import { Home, Youtube, Facebook, Twitter } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function Breadcrumb() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState("Home");

  useEffect(() => {
    const pathSegments = location.pathname.split("/").filter((segment) => segment);
    setCurrentPath(pathSegments.length > 0 ? pathSegments.join(" > ") : "Home");
  }, [location]);

  return (
    <div className="bg-blue-950 py-1 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link to="/" className="text-white hover:text-gray-200 transition-colors">
                  <Home className="h-6 w-6" />
                </Link>
              </li>
              {currentPath !== "Home" && (
                <>
                  <li>
                    <span className="text-gray-300">/</span>
                  </li>
                  <li>
                    <span className="font-medium">{currentPath}</span>
                  </li>
                </>
              )}
            </ol>
          </nav>
          <div className="flex space-x-4">
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              <Youtube className="h-6 w-6" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
