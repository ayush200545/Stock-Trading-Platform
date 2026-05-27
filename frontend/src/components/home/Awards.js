"use client";
import React from "react";
import { motion } from "framer-motion";

function Awards() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const listItem = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="max-w-7xl mx-auto mt-20 mb-20 p-4 md:p-8 relative z-10">
      <div className="flex flex-col md:flex-row gap-12 glass-card p-8 md:p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
        
        <motion.div 
          className="w-full md:w-1/2 flex justify-center items-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <img src="/media/images/largestBroker.svg" alt="Largest Broker in India" className="hover:scale-105 transition-transform duration-500 drop-shadow-2xl filter brightness-110 w-4/5" />
        </motion.div>
        
        <motion.div 
          className="w-full md:w-1/2 relative z-10 flex flex-col justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white mb-6">The largest stock broker in <span className="text-gradient">India</span></motion.h1>
          <motion.p variants={fadeUp} className="mb-8 text-gray-300 text-lg leading-relaxed">
            Over 2 million clients trust TradeX, contributing to more than 15% of all retail order volumes in India. 
            Experience unparalleled speed and reliability across all market segments:
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-8 p-8 bg-white/5 rounded-2xl border border-white/10 shadow-lg">
            <div className="flex-1">
              <ul className="space-y-5 m-0 p-0 list-none">
                <motion.li variants={listItem} className="flex items-center text-gray-300 font-medium text-lg">
                  <span className="text-blue-500 mr-4 text-2xl">•</span> Futures and Options
                </motion.li>
                <motion.li variants={listItem} className="flex items-center text-gray-300 font-medium text-lg">
                  <span className="text-blue-500 mr-4 text-2xl">•</span> Commodity derivatives
                </motion.li>
                <motion.li variants={listItem} className="flex items-center text-gray-300 font-medium text-lg">
                  <span className="text-blue-500 mr-4 text-2xl">•</span> Currency derivatives
                </motion.li>
              </ul>
            </div>
            <div className="flex-1">
              <ul className="space-y-5 m-0 p-0 list-none">
                <motion.li variants={listItem} className="flex items-center text-gray-300 font-medium text-lg">
                  <span className="text-purple-500 mr-4 text-2xl">•</span> Stocks & IPOs
                </motion.li>
                <motion.li variants={listItem} className="flex items-center text-gray-300 font-medium text-lg">
                  <span className="text-purple-500 mr-4 text-2xl">•</span> Direct mutual funds
                </motion.li>
                <motion.li variants={listItem} className="flex items-center text-gray-300 font-medium text-lg">
                  <span className="text-purple-500 mr-4 text-2xl">•</span> Bonds and Govt. Securities
                </motion.li>
              </ul>
            </div>
          </div>
          
          <motion.div variants={fadeUp} className="mt-6 pt-6 border-t border-white/10">
            <p className="text-gray-400 mb-4 text-sm font-semibold tracking-widest uppercase">Featured In</p>
            <img 
              src="/media/images/pressLogos.png" 
              style={{ width: "90%" }} 
              alt="Press Logos" 
              className="hover:opacity-100 opacity-70 transition-opacity duration-300 filter invert drop-shadow-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Awards;
