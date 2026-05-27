/**
 * StockFlow Systems - Premium Corporate Inventory Sourcing Portal
 * Author: MrAbhi2k3 (https://github.com/MrAbhi2k3)
 * Tagline: Elevating institutional logistics with micro-precise inventory controls.
 * Description: Corporate footer displaying support contacts, navigation links (including About Us),
 * and the transparent logo, styled with strict comment-free JSX.
 */

import React from "react";
import { Link } from "react-router-dom";
import { FiMail, FiPhone, FiMapPin, FiTwitter, FiLinkedin, FiGlobe } from "react-icons/fi";
import logo from "@/components/assets/footerlogo.png";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        <div className="space-y-4">
          <div className="flex items-center gap-2 ">
            <img
              src={logo}
              alt="StockFlow Logo"
              className="h-16 md:h-20 w-auto object-contain max-w-[280px] border rounded-full border-slate-300"
            />
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            Real-time corporate stock coordination, supply tracking, and quick quote acquisition for enterprise corporations and commercial logistics operations.
          </p>
          <div className="flex gap-3">
            <a href="#" className="p-2 bg-slate-800 hover:bg-[#2874F0] hover:text-white rounded-lg transition-colors">
              <FiTwitter className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 bg-slate-800 hover:bg-[#2874F0] hover:text-white rounded-lg transition-colors">
              <FiLinkedin className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 bg-slate-800 hover:bg-[#2874F0] hover:text-white rounded-lg transition-colors">
              <FiGlobe className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-slate-400">
            <li>
              <Link to="/" className="hover:text-white hover:underline">Overview Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white hover:underline">About Us</Link>
            </li>
            <li>
              <Link to="/modules" className="hover:text-white hover:underline">System Modules</Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-white hover:underline">Stock Catalog</Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-white hover:underline">Operator Access</Link>
            </li>
            <li>
              <Link to="/signup" className="hover:text-white hover:underline">Register Account</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Asset Categories</h4>
          <ul className="space-y-2.5 text-sm text-slate-400">
            <li><a href="#" className="hover:text-white hover:underline">Corporate Electronics</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Corporate Apparel</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Kitchen & Dining Supplies</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Office Furniture & Chairs</a></li>
          </ul>
        </div>

        <div className="space-y-3.5">
          <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Support & Help</h4>
          <div className="flex items-start gap-2.5 text-sm text-slate-400">
            <FiMapPin className="w-4.5 h-4.5 text-[#2874F0] shrink-0 mt-0.5" />
            <span>100 Technology Plaza, Silicon Valley, CA 94025</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm text-slate-400">
            <FiPhone className="w-4.5 h-4.5 text-[#2874F0]" />
            <span>+1 (800) 555-FLOW</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm text-slate-400">
            <FiMail className="w-4.5 h-4.5 text-[#2874F0]" />
            <span>support@stockflow.com</span>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-slate-800/80 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} Sortiq Solutions Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
