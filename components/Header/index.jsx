"use client";
import React, { useState } from "react";
import Image from "next/image"; // Keep if you plan to add a logo image
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white-100/30 backdrop-blur-sm border-b border-blue-300/20"> {/* Updated background and border */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-6 px-6 md:px-12">

        {/* Left nav (desktop only) */}
        <div className="hidden md:flex gap-6">
          
         
        </div>

        {/* Center logo */}
        <div className="flex-shrink-0">
          <Link href="#" className="text-3xl font-extrabold text-gray-800 drop-shadow-sm"> {/* Updated text color and shadow */}
            5101DESIGNS
          </Link>
        </div>

        {/* Right nav (desktop only) */}
        <div className="hidden md:flex gap-6">
          
        </div>

        {/* Hamburger (mobile only) */}
        <button
          className="md:hidden text-gray-800 focus:outline-none" // Updated text color
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8" // Increased size for better tap target
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                menuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-100/50 backdrop-blur-md text-gray-800 px-6 py-4 space-y-4 border-t border-white/70"> {/* Updated background, border, and text color */}
          <a href="#features" className="block hover:text-blue-500 transition-colors duration-300"> {/* Consistent hover color */}
            Services
          </a>
          <a href="#pricing" className="block hover:text-blue-500 transition-colors duration-300">
            Designs
          </a>
          <a href="#about" className="block hover:text-blue-500 transition-colors duration-300">
            Testimonials
          </a>
          <a href="#" className="block hover:text-blue-500 transition-colors duration-300">
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;