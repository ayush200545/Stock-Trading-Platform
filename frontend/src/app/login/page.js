"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: isLogin ? -20 : 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, x: isLogin ? 20 : -20, transition: { duration: 0.3 } }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 bg-[#050511]">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>

      <motion.div 
        className="glass-card w-full max-w-md p-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-gradient font-bold text-5xl tracking-wider mb-2"
          >
            TradeX
          </motion.div>
          <p className="text-gray-400 text-lg">
            {isLogin ? "Welcome back to the future of trading" : "Join the financial revolution"}
          </p>
        </div>

        <div className="flex mb-8 bg-gray-900/80 rounded-lg p-1 border border-gray-800">
          <button 
            className={`flex-1 py-3 rounded-md transition-all duration-300 font-semibold text-lg ${isLogin ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button 
            className={`flex-1 py-3 rounded-md transition-all duration-300 font-semibold text-lg ${!isLogin ? 'bg-purple-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        <div className="space-y-4 mb-8">
          <button onClick={() => window.location.href = "/home"} className="w-full flex items-center justify-center space-x-3 py-3 px-4 border border-gray-700 rounded-lg bg-gray-900/50 hover:bg-gray-800 transition-colors text-white font-medium">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
            <span>Continue with Google</span>
          </button>
          
          <button onClick={() => window.location.href = "/home"} className="w-full flex items-center justify-center space-x-3 py-3 px-4 border border-gray-700 rounded-lg bg-gray-900/50 hover:bg-gray-800 transition-colors text-white font-medium">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.43.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.56-1.702z"/></svg>
            <span>Continue with Apple</span>
          </button>
        </div>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-700"></div>
          <span className="px-4 text-gray-500 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-700"></div>
        </div>

        <AnimatePresence mode="wait">
          <motion.form 
            key={isLogin ? "login" : "signup"}
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-6"
            onSubmit={(e) => { e.preventDefault(); window.location.href = "/home"; }}
          >
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                placeholder="you@example.com"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <input 
                type="password" 
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                placeholder="••••••••"
                required
              />
            </div>

            {isLogin && (
              <div className="flex justify-end">
                <a href="#" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">Forgot password?</a>
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className={`w-full py-4 rounded-lg font-bold text-white shadow-lg transition-all text-lg ${
                isLogin ? 'bg-gradient-to-r from-blue-600 to-blue-400 hover:shadow-blue-500/30' : 'bg-gradient-to-r from-purple-600 to-pink-500 hover:shadow-purple-500/30'
              }`}
            >
              {isLogin ? "Sign In to TradeX" : "Create Account"}
            </motion.button>
          </motion.form>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
