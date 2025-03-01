import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{
        opacity: 1,
        y: show ? 0 : -100
      }}
      transition={{ duration: 0.3 }}
      className="fixed font-poppins top-0 rounded-b-xl left-0 right-0 z-50 bg-gradient-to-r from-blue-600 to-purple-600"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-3xl font-bold text-white hover:text-gray-200 transition duration-300">
            Smart <span className="text-yellow-400">Scholars</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="relative group text-white px-4 py-2 rounded-md text-md font-medium transition duration-300">
              <span className="relative z-10">Home</span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-md opacity-0 group-hover:opacity-100 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left"></span>
            </Link>
            <Link to="/notes" className="relative group text-white px-4 py-2 rounded-md text-md font-medium transition duration-300">
              <span className="relative z-10">Notes</span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-md opacity-0 group-hover:opacity-100 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left"></span>
            </Link>
            <Link to="/result" className="relative group text-white px-4 py-2 rounded-md text-md font-medium transition duration-300">
              <span className="relative z-10">Results</span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-md opacity-0 group-hover:opacity-100 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left"></span>
            </Link>
            <Link to="/jobs" className="relative group text-white px-4 py-2 rounded-md text-md font-medium transition duration-300">
              <span className="relative z-10">Jobs</span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-md opacity-0 group-hover:opacity-100 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left"></span>
            </Link>

            {/* Search */}
            <div className="relative">
              {!isSearchOpen ? (
                <button
                  className="p-2 text-white hover:text-yellow-400 rounded-full hover:bg-white/10 transition duration-300 hover:rotate-12"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <FaSearch className="h-5 w-5" />
                </button>
              ) : (
                <motion.input
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "250px", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search courses..."
                  className="absolute right-0 p-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  autoFocus
                  onBlur={() => setIsSearchOpen(false)}
                />
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-yellow-400 p-2 rounded-md transition duration-300"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link to="/" className="relative group block text-white px-3 py-2 rounded-md text-base font-medium transition duration-300" 
                onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="relative z-10">Home</span>
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-md opacity-0 group-hover:opacity-100 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left"></span>
                </Link>
                <Link to="/notes" className="relative group block text-white px-3 py-2 rounded-md text-base font-medium transition duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="relative z-10">Notes</span>
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-md opacity-0 group-hover:opacity-100 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left"></span>
                </Link>
                <Link to="/result" className="relative group block text-white px-3 py-2 rounded-md text-base font-medium transition duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="relative z-10">Results</span>
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-md opacity-0 group-hover:opacity-100 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left"></span>
                </Link>
                <Link to="/jobs" className="relative group block text-white px-3 py-2 rounded-md text-base font-medium transition duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="relative z-10">Jobs</span>
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-md opacity-0 group-hover:opacity-100 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left"></span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
