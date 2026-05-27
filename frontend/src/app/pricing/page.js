"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.1 } 
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", type: "spring", bounce: 0.4 } }
  };

  return (
    <div className="min-h-screen bg-[#050511] pt-24 pb-32 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20 pointer-events-none"
      ></motion.div>
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20 pointer-events-none"
      ></motion.div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16 relative">
          <motion.h1 
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6"
          >
            Unbeatable <span className="text-gradient">Pricing</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Zero hidden charges. Transparent fees. Choose the plan that fits your trading style and start maximizing your profits.
          </motion.p>

          {/* Toggle Button */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            className="flex justify-center items-center"
          >
            <div className="bg-gray-900/80 p-1.5 rounded-full border border-gray-800 flex items-center shadow-2xl relative">
              <motion.div 
                className="absolute top-1.5 bottom-1.5 w-[160px] bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg"
                animate={{ x: isAnnual ? 160 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              ></motion.div>
              <button 
                className={`relative w-[160px] py-3 rounded-full font-bold text-sm z-10 transition-colors ${!isAnnual ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                onClick={() => setIsAnnual(false)}
              >
                Monthly Billing
              </button>
              <button 
                className={`relative w-[160px] py-3 rounded-full font-bold text-sm z-10 transition-colors flex items-center justify-center gap-2 ${isAnnual ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                onClick={() => setIsAnnual(true)}
              >
                Annual Billing
                <span className="bg-green-500/20 text-green-400 text-[10px] px-2 py-0.5 rounded-full border border-green-500/30">-20%</span>
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
        >
          {/* Basic Plan */}
          <motion.div 
            variants={cardVariants} 
            whileHover={{ y: -10, scale: 1.02 }}
            className="glass-card p-8 rounded-3xl border border-gray-800 hover:border-gray-700 transition-all flex flex-col relative group shadow-xl bg-gray-900/40 backdrop-blur-xl"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-700 to-gray-600 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="text-2xl font-bold text-white mb-2">Investor Basic</h3>
            <p className="text-gray-400 text-sm mb-6 h-10">Perfect for long-term investors and beginners.</p>
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-white">₹0</span>
              <span className="text-gray-500 font-medium"> / forever</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center text-gray-300"><CheckIcon /> Free Equity Delivery</li>
              <li className="flex items-center text-gray-300"><CheckIcon /> Direct Mutual Funds</li>
              <li className="flex items-center text-gray-300"><CheckIcon /> Standard Charting</li>
              <li className="flex items-center text-gray-500 opacity-50"><CrossIcon /> No Intraday Trading</li>
            </ul>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 rounded-xl font-bold text-white bg-gray-800 hover:bg-gray-700 transition-colors border border-gray-700"
            >
              Get Started
            </motion.button>
          </motion.div>

          {/* Pro Plan (Highlighted) */}
          <motion.div 
            variants={cardVariants} 
            whileHover={{ y: -10, scale: 1.02 }}
            className="glass-card p-10 rounded-3xl border border-blue-500/50 relative flex flex-col shadow-2xl shadow-blue-900/30 bg-gray-900/60 backdrop-blur-2xl z-10 md:-translate-y-4"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-3xl"></div>
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg border border-white/20"
            >
              MOST POPULAR
            </motion.div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2 mt-2">Pro Trader</h3>
            <p className="text-gray-400 text-sm mb-6 h-10">Advanced tools and flat fees for active day traders.</p>
            <div className="mb-8 flex items-baseline gap-1">
              <span className="text-6xl font-extrabold text-white">₹{isAnnual ? '799' : '999'}</span>
              <span className="text-gray-500 font-medium"> / month</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center text-white font-medium"><CheckIcon color="text-blue-400" /> Everything in Basic</li>
              <li className="flex items-center text-gray-300"><CheckIcon color="text-blue-400" /> ₹20 Flat Intraday & F&O</li>
              <li className="flex items-center text-gray-300"><CheckIcon color="text-blue-400" /> Advanced TradingView Charts</li>
              <li className="flex items-center text-gray-300"><CheckIcon color="text-blue-400" /> Live Market Scanner</li>
            </ul>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg border border-white/10"
            >
              Upgrade to Pro
            </motion.button>
          </motion.div>

          {/* API / Institutional Plan */}
          <motion.div 
            variants={cardVariants} 
            whileHover={{ y: -10, scale: 1.02 }}
            className="glass-card p-8 rounded-3xl border border-gray-800 hover:border-gray-700 transition-all flex flex-col relative group shadow-xl bg-gray-900/40 backdrop-blur-xl"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-700 to-orange-600 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="text-2xl font-bold text-white mb-2">Institutional API</h3>
            <p className="text-gray-400 text-sm mb-6 h-10">Algorithmic trading power for quants and institutions.</p>
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-white">₹{isAnnual ? '3,999' : '4,999'}</span>
              <span className="text-gray-500 font-medium"> / month</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center text-gray-300"><CheckIcon /> Full REST API Access</li>
              <li className="flex items-center text-gray-300"><CheckIcon /> Historical Tick Data</li>
              <li className="flex items-center text-gray-300"><CheckIcon /> Unlimited Rate Limits</li>
              <li className="flex items-center text-gray-300"><CheckIcon /> Dedicated Account Manager</li>
            </ul>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 rounded-xl font-bold text-white bg-gray-800 hover:bg-gray-700 transition-colors border border-gray-700"
            >
              Contact Sales
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

// Helper SVG Icons
function CheckIcon({ color = "text-green-400" }) {
  return (
    <svg className={`w-5 h-5 mr-3 ${color} shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg className="w-5 h-5 mr-3 text-gray-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  );
}
