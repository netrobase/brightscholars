"use client";
import { useState, useEffect } from "react";
import Image from 'next/image';
import { FaBars } from "react-icons/fa";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Toggle no-scroll class on body based on menuOpen state
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Clean up on component unmount
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = () => {
    setMenuOpen(false);
    // Scroll to the respective section
  };

  return (
    <>
      {/* Header Section */}
      <header className={`fixed w-full top-0 left-0 z-30 flex justify-between items-center py-6 px-8 md:px-16 transition-all duration-300 ${
        scrolled || menuOpen ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        {/* Logo */}
        <div className="logo">
          <Image src="/img/logo.svg" alt="Logo" width={200} height={200} />
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex md:space-x-8">
          <a href="#home" className="text-gray-800 font-semibold hover:text-main-color">Home</a>
          <a href="#about" className="text-gray-800 font-semibold hover:text-main-color">About</a>
          <a href="#courses" className="text-gray-800 font-semibold hover:text-main-color">Courses</a>
          <a href="#contact" className="text-gray-800 font-semibold hover:text-main-color">Contact</a>
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
        <div className="fixed inset-0 z-20 flex justify-start items-start mt-20" onClick={() => setMenuOpen(false)}>
          <div className="bg-white w-64 h-full p-8 space-y-6 shadow-lg z-30" onClick={(e) => e.stopPropagation()}>
            <a href="#home" className="text-gray-800 font-semibold hover:text-main-color block" onClick={handleMenuItemClick}>Home</a>
            <a href="#about" className="text-gray-800 font-semibold hover:text-main-color block" onClick={handleMenuItemClick}>About</a>
            <a href="#courses" className="text-gray-800 font-semibold hover:text-main-color block" onClick={handleMenuItemClick}>Courses</a>
            <a href="#contact" className="text-gray-800 font-semibold hover:text-main-color block" onClick={handleMenuItemClick}>Contact</a>
          </div>
        </div>
      )}

      <style jsx global>{`
        /* Lock scrolling when the no-scroll class is added */
        .no-scroll {
          overflow: hidden;
        }
      `}</style>
    </>
  );
}
