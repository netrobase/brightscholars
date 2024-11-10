"use client";
import { useState } from "react";
import Image from 'next/image';
import { FaBars } from "react-icons/fa";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Header Section */}
      <header className={`fixed w-full top-0 left-0 z-30 flex justify-between items-center bg-transparent py-6 px-8 md:px-16 transition-all duration-300 ${menuOpen ? 'bg-white shadow-md' : ''}`}>
        {/* Logo */}
        <div className="logo">
          <Image src="/img/logo.svg" alt="Logo" width={200} height={200} />
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex md:space-x-8">
          <a href="#" className="text-gray-800 font-semibold hover:text-main-color">Home</a>
          <a href="#" className="text-gray-800 font-semibold hover:text-main-color">About</a>
          <a href="#" className="text-gray-800 font-semibold hover:text-main-color">Courses</a>
          <a href="#" className="text-gray-800 font-semibold hover:text-main-color">Contact</a>
        </nav>

        {/* Header Icons and Mobile Menu Toggle */}
        <div className="header-icons flex items-center space-x-6">
          <i className="fas fa-search text-xl"></i>
          <i className="fas fa-user text-xl"></i>
          <i className="fas fa-cart-plus text-xl"></i>
          
          {/* Mobile Hamburger Icon */}
          <FaBars 
            className="text-2xl cursor-pointer text-black md:hidden" 
            aria-expanded={menuOpen} 
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </header>

      {/* Full-Screen Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-20 bg-[#f66962] bg-opacity-50 flex justify-start items-start" onClick={() => setMenuOpen(false)}>
          <div className="bg-white w-64 h-full p-8 space-y-4 shadow-lg z-30" onClick={(e) => e.stopPropagation()}>
            <a href="#" className="text-gray-800 font-semibold hover:text-main-color">Home</a>
            <a href="#" className="text-gray-800 font-semibold hover:text-main-color">About</a>
            <a href="#" className="text-gray-800 font-semibold hover:text-main-color">Courses</a>
            <a href="#" className="text-white font-semibold hover:text-main-color">Contact</a>
          </div>
        </div>
      )}
    </>
  );
}
