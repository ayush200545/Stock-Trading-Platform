"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const INITIAL_STOCKS = [
  { symbol: "NIFTY 50", price: 22514.65, change: "+0.45%", isUp: true },
  { symbol: "SENSEX", price: 74227.63, change: "+0.51%", isUp: true },
  { symbol: "RELIANCE", price: 2954.20, change: "-0.12%", isUp: false },
  { symbol: "HDFCBANK", price: 1445.80, change: "+1.25%", isUp: true },
  { symbol: "TCS", price: 4011.50, change: "-0.85%", isUp: false },
  { symbol: "INFY", price: 1523.40, change: "+0.32%", isUp: true },
  { symbol: "ITC", price: 411.75, change: "+0.15%", isUp: true },
  { symbol: "SBIN", price: 765.90, change: "+2.10%", isUp: true },
  { symbol: "BHARTIARTL", price: 1195.30, change: "-0.54%", isUp: false },
  { symbol: "ICICIBANK", price: 1085.60, change: "+0.88%", isUp: true },
];

export default function StockTicker() {
  const [stocks, setStocks] = useState(INITIAL_STOCKS);

  useEffect(() => {
    // Simulate live websocket data by randomly fluctuating prices every 2 seconds
    const interval = setInterval(() => {
      setStocks(currentStocks => 
        currentStocks.map(stock => {
          // 30% chance to update this specific stock on this tick
          if (Math.random() > 0.3) return stock;

          const volatility = stock.price * 0.002; // 0.2% max change
          const changeAmount = (Math.random() * volatility * 2) - volatility;
          const newPrice = stock.price + changeAmount;
          const isUp = changeAmount >= 0;
          const percentChange = ((changeAmount / stock.price) * 100).toFixed(2);
          const formattedChange = `${isUp ? '+' : ''}${percentChange}%`;

          return {
            ...stock,
            price: newPrice,
            change: formattedChange,
            isUp: isUp,
            justChanged: true // used for flash animation
          };
        })
      );

      // Reset the flash animation flag shortly after
      setTimeout(() => {
        setStocks(currentStocks => 
          currentStocks.map(s => ({ ...s, justChanged: false }))
        );
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const tickerItems = [...stocks, ...stocks, ...stocks];

  return (
    <div className="w-full bg-[#050511] border-b border-gray-800 py-2 overflow-hidden flex items-center relative z-50">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#050511] to-transparent z-10 pointer-events-none"></div>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, -2000] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 35,
        }}
      >
        {tickerItems.map((stock, i) => (
          <div key={i} className="flex items-center mx-6 text-sm">
            <span className="font-semibold text-gray-300 mr-2">{stock.symbol}</span>
            <motion.span 
              animate={{ 
                color: stock.justChanged ? (stock.isUp ? "#10b981" : "#ef4444") : "#ffffff",
                scale: stock.justChanged ? 1.05 : 1
              }}
              className="mr-2 transition-colors duration-300"
            >
              ₹{stock.price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </motion.span>
            <span className={`font-bold flex items-center ${stock.isUp ? 'stock-up' : 'stock-down'}`}>
              {stock.isUp ? (
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
              ) : (
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
              )}
              {stock.change}
            </span>
          </div>
        ))}
      </motion.div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#050511] to-transparent z-10 pointer-events-none"></div>
    </div>
  );
}
