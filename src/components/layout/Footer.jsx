/**
 * StockFlow Systems - Premium Corporate Inventory Sourcing Portal
 * Author: MrAbhi2k3 (https://github.com/MrAbhi2k3)
 * Tagline: Elevating institutional logistics with micro-precise inventory controls.
 * Description: Corporate footer displaying support contacts, navigation links (including About Us),
 * and the transparent logo, styled with strict comment-free JSX.
 */

import React from "react";
import { Link } from "react-router-dom";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiTwitter,
  FiLinkedin,
  FiGlobe,
} from "react-icons/fi";

import logo from "@/components/assets/footerlogo.png";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 items-start">

          <div className="flex flex-col h-full">
            <div className="mb-5">
              <img
                src={logo}
                alt="StockFlow Logo"
                className="h-16 md:h-20 w-auto object-contain max-w-[260px] border rounded-full border-slate-300"
              />
            </div>

            <p
              className="text-sm leading-7 text-slate-400"
              style={{ textAlign: "justify" }}
            >
              Real-time corporate stock coordination, supply tracking,
              and quick quote acquisition for enterprise corporations
              and commercial logistics operations for the inventory
              stocks and product purposes.
            </p>
          </div>

          <div className="flex flex-col h-full">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5 leading-none">
              Quick Links
            </h4>

            <ul className="flex flex-col gap-3 text-sm text-slate-400 leading-6">
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition-colors duration-200"
                >
                  Overview Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/modules"
                  className="hover:text-white transition-colors duration-200"
                >
                  System Modules
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="hover:text-white transition-colors duration-200"
                >
                  Stock Catalog
                </Link>
              </li>

              <li>
                <Link
                  to="/login"
                  className="hover:text-white transition-colors duration-200"
                >
                  Operator Access
                </Link>
              </li>

              <li>
                <Link
                  to="/signup"
                  className="hover:text-white transition-colors duration-200"
                >
                  Register Account
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col h-full">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5 leading-none">
              Asset Categories
            </h4>

            <ul className="flex flex-col gap-3 text-sm text-slate-400 leading-6">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Corporate Electronics
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Corporate Apparel
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Kitchen & Dining Supplies
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Office Furniture & Chairs
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Industrial Tools & Equipment
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Corporate Vehicles & Machinery
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col h-full">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5 leading-none">
              Support & Help
            </h4>

            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm text-slate-400 leading-6">
                <FiMapPin className="w-4 h-4 text-[#2874F0] shrink-0 mt-1" />

                <span>
                  E-51, Second Floor, Phase-8, Industrial Area,
                  S.A.S. Nagar, Punjab 160071
                </span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-400">
                <FiPhone className="w-4 h-4 text-[#2874F0]" />

                <span>+91 9646522110</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-400 break-all">
                <FiMail className="w-4 h-4 text-[#2874F0]" />

                <span>sortiqsolutions@gmail.com</span>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://x.com/SortiqSolutions"
                  className="p-2.5 bg-slate-800 hover:bg-[#2874F0] hover:text-white rounded-lg transition-all duration-300"
                >
                  <FiTwitter className="w-4 h-4" />
                </a>

                <a
                  href="https://www.linkedin.com/company/sortiq-solutions/"
                  className="p-2.5 bg-slate-800 hover:bg-[#2874F0] hover:text-white rounded-lg transition-all duration-300"
                >
                  <FiLinkedin className="w-4 h-4" />
                </a>

                <a
                  href="https://sortiqsolutions.com/"
                  className="p-2.5 bg-slate-800 hover:bg-[#2874F0] hover:text-white rounded-lg transition-all duration-300"
                >
                  <FiGlobe className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-slate-800 text-center text-sm text-slate-500 leading-6">
          &copy; {new Date().getFullYear()} Sortiq Solutions Pvt. Ltd.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}