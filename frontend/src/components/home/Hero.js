"use client";
import React from "react";
import { motion } from "framer-motion";

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const floatAnimation = {
    y: ["-15px", "15px"],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-5 mt-10 mb-20 relative">
      {/* Decorative blurred blobs for background depth */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-pulse" style={{ animationDelay: "2s" }}></div>

      <motion.div 
        className="flex flex-col items-center text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="flex justify-center mb-10 w-full max-w-4xl">
          <motion.img
            animate={floatAnimation}
            src="/media/images/homeHero.png"
            alt="Hero Image"
            className="drop-shadow-2xl max-w-full h-auto"
            style={{ filter: "drop-shadow(0 20px 30px rgba(59, 130, 246, 0.3))" }}
          />
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="mt-5 text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
          Invest in <span className="text-gradient">everything</span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-400 mt-6 max-w-3xl mx-auto font-light leading-relaxed">
          The ultimate online platform to invest in stocks, derivatives, mutual funds, and
          more. Join the financial revolution today.
        </motion.p>
        
        <motion.div variants={itemVariants} className="mt-12">
          <motion.a
            href="/login"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block btn-primary text-xl px-12 py-5"
            style={{ textDecoration: "none" }}
          >
            Start Trading Now
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
