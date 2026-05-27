"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MOCK_STOCKS = [
  "RELIANCE", "TCS", "HDFCBANK", "INFY", "ICICIBANK", "HINDUNILVR", "SBIN", "BHARTIARTL", "ITC", "KOTAKBANK"
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const linkHover = {
    scale: 1.05,
    color: "#60a5fa",
    textShadow: "0px 0px 8px rgba(96, 165, 250, 0.4)",
    transition: { type: "spring", stiffness: 300 }
  };

  const filteredStocks = MOCK_STOCKS.filter(stock => 
    stock.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="sticky top-4 z-50 transition-all duration-300 py-3 px-6 mt-4 mx-4 md:mx-8 rounded-2xl glass-header shadow-2xl flex items-center justify-between"
    >
      <div className="flex items-center w-full max-w-7xl mx-auto">
        <a className="flex items-center no-underline mr-8" href="/home">
          <motion.div
            whileHover={{ scale: 1.05, textShadow: "0px 0px 12px rgba(96, 165, 250, 0.8)" }}
            className="text-gradient font-bold text-3xl tracking-wider"
            style={{ minWidth: "120px" }}
          >
            TradeX
          </motion.div>
        </a>

        {/* Global Search Bar */}
        <div className="hidden md:block relative flex-grow max-w-md mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search stocks (e.g., RELIANCE)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
              className="w-full bg-gray-900/60 border border-gray-700/50 rounded-full py-2 px-10 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
            <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          {/* Autocomplete Dropdown */}
          <AnimatePresence>
            {isSearchFocused && searchQuery && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 mt-2 bg-[#0a0a1a] border border-gray-800 rounded-xl shadow-2xl overflow-hidden z-50"
              >
                {filteredStocks.length > 0 ? (
                  filteredStocks.map((stock, i) => (
                    <div key={i} className="px-4 py-3 hover:bg-gray-800/50 cursor-pointer text-gray-300 hover:text-white transition-colors flex justify-between items-center">
                      <span className="font-medium">{stock}</span>
                      <span className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-400">NSE</span>
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-3 text-gray-500 text-sm">No stocks found</div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden ml-auto">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className={`md:flex items-center justify-end flex-grow ${isOpen ? 'block absolute top-full left-0 right-0 bg-[#050511]/90 p-5 mt-2 rounded-xl backdrop-blur-xl border border-white/10 flex-col space-y-4' : 'hidden'}`}>
          <ul className={`flex ${isOpen ? 'flex-col items-center w-full' : 'flex-row items-center space-x-6 mb-0 p-0 m-0 list-none'}`}>
            <li>
              <motion.a whileHover={linkHover} className="font-medium text-gray-300 hover:text-white transition-colors no-underline text-[15px]" href="/about">
                About
              </motion.a>
            </li>
            <li className={isOpen ? 'mt-4' : ''}>
              <motion.a whileHover={linkHover} className="font-medium text-gray-300 hover:text-white transition-colors no-underline text-[15px]" href="/product">
                Products
              </motion.a>
            </li>
            <li className={isOpen ? 'mt-4' : ''}>
              <motion.a whileHover={linkHover} className="font-medium text-gray-300 hover:text-white transition-colors no-underline text-[15px]" href="/pricing">
                Pricing
              </motion.a>
            </li>
            <li className={isOpen ? 'mt-4' : ''}>
              <motion.a whileHover={linkHover} className="font-medium text-gray-300 hover:text-white transition-colors no-underline text-[15px] md:mr-2" href="/support">
                Support
              </motion.a>
            </li>
            <li className={isOpen ? 'mt-6 w-full text-center' : ''}>
              <motion.a 
                href="/login"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 transition-all shadow-lg no-underline text-[15px] ${isOpen ? 'block w-full' : 'inline-block'}`}
              >
                Logout
              </motion.a>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
