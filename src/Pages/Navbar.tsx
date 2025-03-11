import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown, ChevronUp } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import image from "../assets/DM_logo-01-1.png";
import React from "react";

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [academicsDropdownOpen, setAcademicsDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileAcademicsOpen, setMobileAcademicsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when route changes
  useEffect(() => {
    setAboutDropdownOpen(false);
    setAcademicsDropdownOpen(false);
    setMobileAboutOpen(false);
    setMobileAcademicsOpen(false);
  }, [location.pathname]);

  const aboutDropdownItems = [
    { label: "Our History", href: "/about/history" },
    { label: "Mission & Vision", href: "/about/mission-vision" },
    { label: "Core Values", href: "/about/values" },
    { label: "Leadership", href: "/about/leadership" },
  ];

  const academicsDropdownItems = [
    { label: "Overview", href: "/academics" },
    { label: "Programs", href: "/academics/programs" },
    { label: "Faculty", href: "/academics/faculty" },
    { label: "Research", href: "/academics/research" },
    { label: "Library", href: "/academics/library" },
  ];

  const navItems = [
    { label: "Home", href: "/" },
    { 
      label: "About", 
      href: "/about",
      hasDropdown: true,
      dropdownItems: aboutDropdownItems,
      isDropdownOpen: aboutDropdownOpen,
      setDropdownOpen: setAboutDropdownOpen
    },
    { 
      label: "Academics", 
      href: "/academics",
      hasDropdown: true,
      dropdownItems: academicsDropdownItems,
      isDropdownOpen: academicsDropdownOpen,
      setDropdownOpen: setAcademicsDropdownOpen
    },
    { label: "Institutions", href: "/institutions" },
    { label: "Admission", href: "/admission" },
    { label: "Give", href: "/give" },
    { label: "Contact Us", href: "/contact" },
  ];

  // Check if current path is in a section
  // const isInSection = (path: string, section: string): boolean => {
  //   return path.startsWith(section);
  // };

  // Handle dropdown click outside
  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (aboutDropdownOpen && !event.target.closest('.about-dropdown')) {
        setAboutDropdownOpen(false);
      }
      if (academicsDropdownOpen && !event.target.closest('.academics-dropdown')) {
        setAcademicsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [aboutDropdownOpen, academicsDropdownOpen]);

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
              <div key={item.label} className={`relative ${item.hasDropdown ? (item.label === 'About' ? 'about-dropdown' : 'academics-dropdown') : ''}`}>
                {item.hasDropdown ? (
                  <div className="inline-flex items-center">
                    <button
                      onClick={() => item.setDropdownOpen(!item.isDropdownOpen)}
                      className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors ${
                        location.pathname.startsWith(item.href)
                          ? "text-black border-b-2 border-black"
                          : "text-gray-600 hover:text-black"
                      }`}
                    >
                      {item.label}
                      {item.isDropdownOpen ? (
                        <ChevronUp className="ml-1 h-4 w-4" />
                      ) : (
                        <ChevronDown className="ml-1 h-4 w-4" />
                      )}
                    </button>
                  </div>
                ) : (
                  <NavLink
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
                )}

                {/* Dropdown Menu */}
                {item.hasDropdown && item.isDropdownOpen && (
                  <div className="absolute mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    {item.dropdownItems.map((dropdownItem) => (
                      <NavLink
                        key={dropdownItem.label}
                        to={dropdownItem.href}
                        className={({ isActive }) =>
                          `block px-4 py-2 text-sm transition-colors ${
                            isActive
                              ? "text-black bg-gray-100 font-medium"
                              : "text-gray-700 hover:bg-gray-50 hover:text-black"
                          }`
                        }
                        onClick={() => item.setDropdownOpen(false)}
                      >
                        {dropdownItem.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: Donate Button */}
          <div className="hidden sm:flex items-center">
            <Button
              variant="outline"
              className="flex items-center gap-2 border-black hover:bg-gray-100 transition-colors"
              onClick={() =>
                window.open(
                  "upi://pay?pa=9061450356@upi&pn=RecipientName&mc=123456&mode=02&purpose=00",
                  "_blank"
                )
              }
            >
              <span className="font-medium">Donate</span>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="sm:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(true)}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] bg-black">
                <div className="flex flex-col space-y-6 mt-6 text-white">
                  {navItems.map((item) => (
                    <div key={item.label}>
                      {item.hasDropdown ? (
                        <>
                          <button
                            className={`flex items-center justify-between w-full text-lg font-medium transition-colors ${
                              location.pathname.startsWith(item.href)
                                ? "text-yellow-400 font-semibold"
                                : "text-gray-300 hover:text-white"
                            }`}
                            onClick={() => {
                              if (item.label === 'About') {
                                setMobileAboutOpen(!mobileAboutOpen);
                              } else if (item.label === 'Academics') {
                                setMobileAcademicsOpen(!mobileAcademicsOpen);
                              }
                            }}
                          >
                            <span>{item.label}</span>
                            {(item.label === 'About' && mobileAboutOpen) || (item.label === 'Academics' && mobileAcademicsOpen) ? (
                              <ChevronUp className="h-4 w-4" />
                            ) : (
                              <ChevronDown className="h-4 w-4" />
                            )}
                          </button>
                          
                          {/* Mobile Dropdown Items */}
                          {((item.label === 'About' && mobileAboutOpen) || 
                             (item.label === 'Academics' && mobileAcademicsOpen)) && (
                            <div className="pl-4 mt-2 mb-2 flex flex-col space-y-2">
                              {item.dropdownItems.map((dropdownItem) => (
                                <NavLink
                                  key={dropdownItem.label}
                                  to={dropdownItem.href}
                                  className={({ isActive }) =>
                                    `text-base transition-colors ${
                                      isActive
                                        ? "text-yellow-400"
                                        : "text-gray-400 hover:text-gray-200"
                                    }`
                                  }
                                  onClick={() => setIsOpen(false)}
                                >
                                  {dropdownItem.label}
                                </NavLink>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <NavLink
                          to={item.href}
                          className={({ isActive }) =>
                            `text-lg font-medium transition-colors ${
                              isActive
                                ? "text-yellow-400 font-semibold"
                                : "text-gray-300 hover:text-white"
                            }`
                          }
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </NavLink>
                      )}
                    </div>
                  ))}
                  <Button
                    className="mt-4 bg-yellow-400 text-black hover:bg-yellow-500 transition-colors"
                    onClick={() => {
                      window.open(
                        "upi://pay?pa=9061450356@upi&pn=RecipientName&mc=123456&mode=02&purpose=00",
                        "_blank"
                      );
                      setIsOpen(false);
                    }}
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
