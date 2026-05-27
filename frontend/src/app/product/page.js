"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MOCK_MARKET = [
  { symbol: "RELIANCE", name: "Reliance Industries", price: 2954.20, change: "+1.2%", isUp: true, logo: "R" },
  { symbol: "TCS", name: "Tata Consultancy", price: 4011.50, change: "-0.5%", isUp: false, logo: "T" },
  { symbol: "HDFCBANK", name: "HDFC Bank Ltd", price: 1445.80, change: "+2.1%", isUp: true, logo: "H" },
  { symbol: "INFY", name: "Infosys Limited", price: 1523.40, change: "+0.8%", isUp: true, logo: "I" },
  { symbol: "ICICIBANK", name: "ICICI Bank", price: 1085.60, change: "-1.1%", isUp: false, logo: "I" },
  { symbol: "SBIN", name: "State Bank of India", price: 765.90, change: "+3.4%", isUp: true, logo: "S" },
];

export default function ProductPage() {
  const [toast, setToast] = useState(null);

  const showToast = (action, symbol, price) => {
    setToast({ action, symbol, price });
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="min-h-screen bg-[#050511] pt-12 pb-20 relative overflow-hidden">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div 
            initial={{ opacity: 0, y: -50, x: "-50%" }}
            animate={{ opacity: 1, y: 20, x: "-50%" }}
            exit={{ opacity: 0, y: -50, x: "-50%" }}
            className="fixed top-0 left-1/2 z-[100] px-6 py-3 rounded-full bg-gray-900 border border-gray-700 shadow-2xl flex items-center gap-3"
          >
            <div className={`w-3 h-3 rounded-full ${toast.action === 'Buy' ? 'bg-blue-500' : 'bg-pink-500'} animate-pulse`}></div>
            <span className="text-white font-medium text-sm">
              Successfully placed <span className={toast.action === 'Buy' ? 'text-blue-400' : 'text-pink-400'}>{toast.action}</span> order for <span className="font-bold">{toast.symbol}</span> at ₹{toast.price}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Live <span className="text-gradient">Marketplace</span>
          </h1>
          <p className="text-gray-400 text-lg">Trade your favorite stocks instantly with zero latency.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_MARKET.map((stock, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-xl font-bold text-gray-300 shadow-inner">
                    {stock.logo}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">{stock.symbol}</h3>
                    <p className="text-gray-500 text-sm truncate w-32">{stock.name}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold text-xl">₹{stock.price.toFixed(2)}</p>
                  <p className={`text-sm font-medium ${stock.isUp ? 'text-green-400' : 'text-red-400'}`}>
                    {stock.isUp ? '▲' : '▼'} {stock.change}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 mt-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => showToast('Buy', stock.symbol, stock.price)}
                  className="flex-1 py-2 rounded-lg bg-blue-600/20 hover:bg-blue-600 border border-blue-500/50 hover:border-blue-500 text-blue-400 hover:text-white font-semibold transition-all"
                >
                  BUY
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => showToast('Sell', stock.symbol, stock.price)}
                  className="flex-1 py-2 rounded-lg bg-pink-600/20 hover:bg-pink-600 border border-pink-500/50 hover:border-pink-500 text-pink-400 hover:text-white font-semibold transition-all"
                >
                  SELL
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
