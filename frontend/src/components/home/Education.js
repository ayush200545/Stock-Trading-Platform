"use client";
import React from "react";
import { motion } from "framer-motion";

function Education() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut", delay: 0.2 } }
  };

  return (
    <div className="max-w-7xl mx-auto mt-20 mb-20 p-4 md:p-8 relative z-10">
      <div className="flex flex-col md:flex-row gap-12 glass-card p-8 md:p-16 relative overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
        
        <motion.div 
          className="w-full md:w-1/2 flex items-center justify-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <img src="/media/images/education.svg" style={{ width: "85%" }} alt="Education" className="hover:scale-105 transition-transform duration-500 drop-shadow-2xl" />
        </motion.div>
        
        <motion.div 
          className="w-full md:w-1/2 flex flex-col justify-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeRight}
        >
          <h1 className="mb-8 text-4xl md:text-5xl font-bold text-white leading-tight">Master the markets with <span className="text-gradient">TradeX Education</span></h1>
          
          <div className="mb-8 p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors shadow-lg">
            <h3 className="text-2xl text-blue-400 font-bold mb-3">Varsity</h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Varsity is the most comprehensive and widely read stock market education resource in the world. 
              Whether you are a beginner learning the basics or an expert mastering advanced derivatives, Varsity has you covered.
            </p>
            <a href="#" className="inline-flex items-center text-blue-400 font-bold hover:text-blue-300 transition-colors group text-lg" style={{ textDecoration: "none" }}>
              Start learning on Varsity <i className="fa fa-long-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform" aria-hidden="true"></i>
            </a>
          </div>
          
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors shadow-lg">
            <h3 className="text-2xl text-purple-400 font-bold mb-3">Trading Q&A</h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Join the most active trading and investment community in the country. Ask questions, share strategies, 
              and discuss live market movements with top experts and fellow traders.
            </p>
            <a href="#" className="inline-flex items-center text-purple-400 font-bold hover:text-purple-300 transition-colors group text-lg" style={{ textDecoration: "none" }}>
              Join Trading Q&A <i className="fa fa-long-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform" aria-hidden="true"></i>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Education;
