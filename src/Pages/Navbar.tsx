// src/components/Navbar.tsx
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import React from "react";
import image from "../assets/DM_logo-01-1.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Institutions", href: "/institutions" },
    { label: "Admission", href: "/admission" },
    { label: "Give", href: "/give" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <nav
      className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/">
              <img
                src={image}
                alt="Darul Ma'arif Valiyora Logo"
                className="h-20 w-auto" // Increased height
              />
            </NavLink>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden sm:flex flex-grow justify-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                className={({ isActive }) =>
                  `inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-black border-b-2 border-black"
                      : "text-gray-600 hover:text-black"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Right: Donate Button */}
          <div className="hidden sm:flex items-center">
            <Button
              variant="outline"
              className="flex items-center gap-2 border-black hover:bg-gray-100 transition-colors"
            >
              <span className="font-medium">Donate</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
              </svg>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="sm:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px]">
                <div className="flex flex-col space-y-6 mt-6 text-white">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.label}
                      to={item.href}
                      className={({ isActive }) =>
                        `text-lg font-medium transition-colors ${
                          isActive
                            ? "text-white font-semibold"
                            : "text-gray-400 hover:text-white"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                  <Button className="mt-4 bg-black text-white hover:bg-gray-800 transition-colors">
                    Donate
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
