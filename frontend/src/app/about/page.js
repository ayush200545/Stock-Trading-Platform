"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-[#050511] pt-20 pb-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
            Pioneering the <span className="text-gradient">Future</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            TradeX was built on a simple premise: trading should be accessible, transparent, and built on cutting-edge technology.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center glass-card p-8 md:p-16 rounded-3xl relative">
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-5/12"
          >
            <div className="relative group perspective-1000">
              <motion.div 
                whileHover={{ rotateY: 10, rotateX: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-full aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative z-10 transform-style-preserve-3d"
              >
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Ayush Askar, Founder" 
                  className="w-full h-full object-cover filter contrast-125 brightness-90 group-hover:brightness-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050511] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 translate-z-50">
                  <h3 className="text-3xl font-bold text-white mb-1">Ayush Askar</h3>
                  <p className="text-blue-400 font-semibold tracking-wider uppercase text-sm">Founder & CEO</p>
                </div>
              </motion.div>
              {/* Neon shadow behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-7/12 relative z-10"
          >
            <h2 className="text-3xl font-bold text-white mb-6">The Visionary Behind TradeX</h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Founded by Ayush Askar, a passionate software engineer and financial innovator, TradeX was born out of frustration with legacy trading platforms that felt clunky, slow, and full of hidden fees.
              </p>
              <p>
                "I wanted to build an ecosystem that I would actually want to use myself—something incredibly fast, beautifully designed, and entirely transparent," says Ayush. 
              </p>
              <p>
                Under his leadership, TradeX has rapidly grown from a weekend project into a highly sophisticated fintech platform. Ayush's unique blend of deep technical expertise in React and Next.js, combined with a strong understanding of market mechanics, has allowed TradeX to pioneer features like real-time glassmorphism UI, instant trade execution, and intelligent risk management tools.
              </p>
              <div className="pt-6 mt-6 border-t border-gray-800 flex items-center gap-6">
                <a href="#" className="text-blue-400 hover:text-white transition-colors">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="text-blue-400 hover:text-white transition-colors">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
