import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import image from "../assets/DM_logo-01-1.png";
import React from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State to control menu

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
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
              <img src={image} alt="Logo" className="h-20 w-auto" />
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
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="sm:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] bg-black">
                <div className="flex flex-col space-y-6 mt-6 text-white">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.label}
                      to={item.href}
                      className={({ isActive }) =>
                        `text-lg font-medium transition-colors ${
                          isActive ? "text-yellow-400 font-semibold" : "text-gray-300 hover:text-white"
                        }`
                      }
                      onClick={() => setIsOpen(false)} // Close menu when clicking a link
                    >
                      {item.label}
                    </NavLink>
                  ))}
                  <Button
                    className="mt-4 bg-yellow-400 text-black hover:bg-yellow-500 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
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
