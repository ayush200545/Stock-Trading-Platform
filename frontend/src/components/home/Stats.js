"use client";
import React from "react";
import { motion } from "framer-motion";

function Stats() {
  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 mt-10 mb-20 relative z-10">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <motion.div 
          className="w-full lg:w-1/2 p-8 md:p-12 glass-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInLeft}
        >
          <h1 className="text-4xl mb-10 font-bold text-gradient">Trust with confidence</h1>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-3">Customer-first always</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              We prioritize your success above all else. Over 2 million users trust TradeX 
              with thousands of crores in equity investments daily, making us the premier choice for serious traders.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-3">No spam or gimmicks</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Experience trading without the noise. No hidden fees, no annoying push notifications, 
              and absolutely no gimmicks. Just a pure, high-performance trading environment.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-3">The TradeX Universe</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              TradeX is more than an app; it is a comprehensive financial ecosystem. 
              Our integrated suite of investment tools and analytics empowers you to make smarter decisions instantly.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Do better with your money</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              With powerful features like advanced charting, instant kill-switches, and automated nudges, 
              we actively help you manage risk and maximize your financial growth.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col justify-center items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={scaleUp}
        >
          <div className="relative w-full max-w-lg">
            <div className="absolute inset-0 bg-blue-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
            <img src="/media/images/ecosystem.png" style={{ width: "100%" }} alt="TradeX Ecosystem" className="relative z-10 hover:scale-105 transition-transform duration-500 drop-shadow-2xl" />
          </div>
          
          <div className="text-center mt-12 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
            <a href="/product" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors flex items-center justify-center group text-xl" style={{ textDecoration: "none" }}>
              Explore our products
              <i className="fa fa-long-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform" aria-hidden="true"></i>
            </a>
            <a href="/login" className="text-purple-400 font-semibold hover:text-purple-300 transition-colors flex items-center justify-center group text-xl" style={{ textDecoration: "none" }}>
              Try Live Demo
              <i className="fa fa-long-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform" aria-hidden="true"></i>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Stats;
