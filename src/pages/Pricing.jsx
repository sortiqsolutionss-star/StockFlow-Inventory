/**
 * StockFlow Systems - Premium Corporate Inventory Sourcing Portal
 * Author: MrAbhi2k3 (https://github.com/MrAbhi2k3)
 * Tagline: Elevating institutional logistics with micro-precise inventory controls.
 * Description: Pricing subscription plans layout showcasing Basic, Enterprise,
 * and Multi-Warehouse licensing levels styled with high-fidelity card grids.
 */

import React from "react";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <div className="space-y-16 py-6 text-left">
      <div className="text-center space-y-3">
        <span className="text-[10px] font-bold text-[#2874F0] uppercase tracking-widest block">Flexible Operations Pricing</span>
        <h1 className="text-3xl font-extrabold text-slate-800">Sourcing Procurement Tiers</h1>
        <p className="text-sm text-slate-500 max-w-xl mx-auto">
          Choose a coordination plan scaled to your corporate or commercial logistics parameters.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white p-6.5 rounded-2xl border border-slate-100 shadow-xs hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] hover:rotate-1 hover:border-[#2874F0]/30 transition-all duration-300 flex flex-col justify-between">
          <div className="space-y-5">
            <div>
              <h3 className="text-base font-bold text-slate-800">Basic Sourcing</h3>
              <p className="text-xs text-slate-400 mt-1">For single department hubs</p>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-extrabold text-slate-800">$49</span>
              <span className="text-xs text-slate-400 font-semibold">/ month</span>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 border-t border-slate-50 pt-4">
              <li className="flex items-center gap-2">
                <FiCheck className="text-emerald-500 shrink-0" />
                <span>Up to 500 Sourcing Items</span>
              </li>
              <li className="flex items-center gap-2">
                <FiCheck className="text-emerald-500 shrink-0" />
                <span>1 Localized Warehouse</span>
              </li>
              <li className="flex items-center gap-2">
                <FiCheck className="text-emerald-500 shrink-0" />
                <span>Standard Support Desk</span>
              </li>
            </ul>
          </div>
          <Link
            to="/signup"
            className="flex items-center justify-center gap-2 w-full h-10 mt-8 border border-slate-200 hover:border-[#2874F0] hover:bg-blue-50/20 text-slate-600 hover:text-[#2874F0] text-xs font-bold rounded-lg transition-all"
          >
            <span>Activate Basic</span>
          </Link>
        </div>

        <div className="bg-white p-6.5 rounded-2xl border-2 border-[#2874F0] shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] hover:-rotate-1 hover:border-[#2874F0]/30 transition-all duration-300 flex flex-col justify-between relative transform lg:-translate-y-2">
          <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#2874F0] text-white text-[9px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full shadow-md">
            RECOMMENDED
          </span>
          <div className="space-y-5">
            <div>
              <h3 className="text-base font-bold text-slate-800">Enterprise Hub</h3>
              <p className="text-xs text-slate-400 mt-1">For medium multi-department operations</p>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-extrabold text-slate-800">$149</span>
              <span className="text-xs text-slate-400 font-semibold">/ month</span>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 border-t border-slate-50 pt-4">
              <li className="flex items-center gap-2">
                <FiCheck className="text-[#2874F0] shrink-0" />
                <span>Up to 5,000 Sourcing Items</span>
              </li>
              <li className="flex items-center gap-2">
                <FiCheck className="text-[#2874F0] shrink-0" />
                <span>3 Localized Warehouses</span>
              </li>
              <li className="flex items-center gap-2">
                <FiCheck className="text-[#2874F0] shrink-0" />
                <span>Priority Helpdesk Sourcing</span>
              </li>
              <li className="flex items-center gap-2">
                <FiCheck className="text-[#2874F0] shrink-0" />
                <span>Active Safety stock warnings</span>
              </li>
            </ul>
          </div>
          <Link
            to="/signup"
            className="flex items-center justify-center gap-2 w-full h-10 mt-8 bg-[#2874F0] hover:bg-[#2874F0]/95 text-white text-xs font-bold rounded-lg shadow-md shadow-blue-500/25 transition-all"
          >
            <span>Activate Enterprise</span>
            <FiArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="bg-white p-6.5 rounded-2xl border border-slate-100 shadow-xs hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] hover:rotate-1 hover:border-[#2874F0]/30 transition-all duration-300 flex flex-col justify-between">
          <div className="space-y-5">
            <div>
              <h3 className="text-base font-bold text-slate-800">Multi-Warehouse</h3>
              <p className="text-xs text-slate-400 mt-1">For large multinational enterprise networks</p>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-extrabold text-slate-800">$299</span>
              <span className="text-xs text-slate-400 font-semibold">/ month</span>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 border-t border-slate-50 pt-4">
              <li className="flex items-center gap-2">
                <FiCheck className="text-emerald-500 shrink-0" />
                <span>Unlimited Sourcing Items</span>
              </li>
              <li className="flex items-center gap-2">
                <FiCheck className="text-emerald-500 shrink-0" />
                <span>Unlimited Localized Warehouses</span>
              </li>
              <li className="flex items-center gap-2">
                <FiCheck className="text-emerald-500 shrink-0" />
                <span>Dedicated Sourcing Manager</span>
              </li>
              <li className="flex items-center gap-2">
                <FiCheck className="text-emerald-500 shrink-0" />
                <span>Custom API Integration</span>
              </li>
            </ul>
          </div>
          <Link
            to="/signup"
            className="flex items-center justify-center gap-2 w-full h-10 mt-8 border border-slate-200 hover:border-[#2874F0] hover:bg-blue-50/20 text-slate-600 hover:text-[#2874F0] text-xs font-bold rounded-lg transition-all"
          >
            <span>Activate Multi-Warehouse</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
