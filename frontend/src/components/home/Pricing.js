"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

function Pricing() {
  const [tradesPerMonth, setTradesPerMonth] = useState(50);
  const averageCompetitorFee = 35; // ₹35 per trade
  const tradeXFee = 20; // ₹20 flat fee for intraday

  const monthlySavings = tradesPerMonth * (averageCompetitorFee - tradeXFee);
  const yearlySavings = monthlySavings * 12;

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", type: "spring", bounce: 0.3 } }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, type: "spring", bounce: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 mt-20 mb-32 relative z-10">
      {/* Background Animated Blobs */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none"
      ></motion.div>

      <div className="flex flex-col md:flex-row gap-12 items-center">
        <motion.div 
          className="w-full md:w-5/12 p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <motion.h1 variants={fadeUp} className="mb-6 text-4xl md:text-5xl font-bold text-gradient">Calculate Your Edge</motion.h1>
          <motion.p variants={fadeUp} className="text-gray-300 text-lg leading-relaxed mb-8">
            We pioneered the concept of discount broking and price transparency
            in India. Use our calculator to see exactly how much you save with TradeX.
          </motion.p>
          
          <motion.div 
            variants={scaleUp}
            whileHover={{ scale: 1.02 }}
            className="mt-8 p-8 glass-card border border-blue-500/30 rounded-3xl relative overflow-hidden shadow-2xl shadow-blue-900/20"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
            <h3 className="text-2xl font-bold text-white mb-6">Savings Estimator</h3>
            
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-400 mb-4">
                <span className="font-medium text-lg">Trades per month</span>
                <motion.span 
                  key={tradesPerMonth}
                  initial={{ scale: 1.5, color: "#fff" }}
                  animate={{ scale: 1, color: "#60a5fa" }}
                  className="font-extrabold text-2xl text-blue-400"
                >
                  {tradesPerMonth}
                </motion.span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="500" 
                value={tradesPerMonth} 
                onChange={(e) => setTradesPerMonth(e.target.value)}
                className="w-full h-3 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500 shadow-inner"
              />
            </div>
            
            <div className="flex justify-between items-end border-t border-gray-700/50 pt-6">
              <div>
                <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold mb-1">Projected Yearly Savings</p>
                <motion.p 
                  key={yearlySavings}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-4xl md:text-5xl font-extrabold text-green-400 drop-shadow-[0_0_15px_rgba(74,222,128,0.5)]"
                >
                  ₹{yearlySavings.toLocaleString('en-IN')}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <div className="w-full md:w-1/12"></div>
        
        <motion.div 
          className="w-full md:w-6/12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="flex flex-col sm:flex-row gap-8 text-center">
            <motion.div 
              variants={scaleUp} 
              whileHover={{ y: -10, scale: 1.05 }}
              className="flex-1 p-10 glass-card border border-white/10 hover:border-blue-500/50 transition-all shadow-xl bg-gray-900/50 backdrop-blur-xl rounded-3xl"
            >
              <h1 className="mb-4 text-6xl font-extrabold text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]">₹0</h1>
              <p className="text-gray-300 font-medium text-lg leading-relaxed mt-6">
                Free equity delivery and
                <br />
                direct mutual funds
              </p>
            </motion.div>
            <motion.div 
              variants={scaleUp} 
              whileHover={{ y: -10, scale: 1.05 }}
              className="flex-1 p-10 glass-card border border-white/10 hover:border-purple-500/50 transition-all shadow-xl bg-gray-900/50 backdrop-blur-xl rounded-3xl"
            >
              <h1 className="mb-4 text-6xl font-extrabold text-purple-400 drop-shadow-[0_0_15px_rgba(192,132,252,0.5)]">₹20</h1>
              <p className="text-gray-300 font-medium text-lg leading-relaxed mt-6">
                Intraday and F&O
                <br />
                flat rate per trade
              </p>
            </motion.div>
          </div>
          
          <motion.div variants={fadeUp} className="mt-12 text-center">
            <a href="/pricing" className="inline-flex items-center text-blue-400 font-bold hover:text-white transition-colors group text-xl bg-blue-900/30 px-8 py-4 rounded-full border border-blue-500/30 hover:bg-blue-600 shadow-lg" style={{ textDecoration: "none" }}>
              View detailed pricing tiers 
              <motion.i 
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="fa fa-long-arrow-right ml-3" 
                aria-hidden="true"
              ></motion.i>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Pricing;
