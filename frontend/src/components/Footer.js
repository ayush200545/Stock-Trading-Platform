"use client";
import React from "react";

function Footer() {
  return (
    <footer className="bg-[#03030a] border-t border-white/10 mt-20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 justify-between mb-12">
          <div className="w-full md:w-1/4">
            <div className="text-gradient font-bold text-3xl tracking-wide mb-6">TradeX</div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              &copy; 2010 - 2024, TradeX Broking Ltd.<br />
              All rights reserved.
            </p>
          </div>
          
          <div className="w-full md:w-1/4">
            <p className="text-white font-semibold text-lg mb-6">Company</p>
            <ul className="space-y-4 list-none p-0 m-0">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors no-underline">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors no-underline">Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors no-underline">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors no-underline">Referral programme</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors no-underline">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors no-underline">TradeX.tech</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors no-underline">Press & media</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors no-underline">TradeX cares (CSR)</a></li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/4">
            <p className="text-white font-semibold text-lg mb-6">Support</p>
            <ul className="space-y-4 list-none p-0 m-0">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors no-underline">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors no-underline">Support portal</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors no-underline">Z-Connect blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors no-underline">List of charges</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors no-underline">Downloads & resources</a></li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/4">
            <p className="text-white font-semibold text-lg mb-6">Account</p>
            <ul className="space-y-4 list-none p-0 m-0">
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors no-underline">Open an account</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors no-underline">Fund transfer</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors no-underline">60 day challenge</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 text-gray-500 text-xs space-y-4">
          <p className="leading-relaxed text-justify">
            TradeX Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through TradeX Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through TradeX Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: TradeX Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@TradeX.com, for DP related to dp@TradeX.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p className="leading-relaxed text-justify">
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p className="leading-relaxed font-semibold text-center mt-6">
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
