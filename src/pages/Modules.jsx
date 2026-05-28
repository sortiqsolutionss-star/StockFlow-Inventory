/**
 * StockFlow Systems - Premium Corporate Inventory Sourcing Portal
 * Author: MrAbhi2k3 (https://github.com/MrAbhi2k3)
 * Tagline: Elevating institutional logistics with micro-precise inventory controls.
 * Description: Interactive connected pipeline workflow visualizing advanced inventory modules.
 * Standard grid replaced with highly aesthetic connected pipeline layout featuring interactive
 * modular states and custom telemetry widgets. Zero comments included.
 */

import React, { useState } from "react";
import { 
  FiPackage, FiTruck, FiTrendingUp, FiShield, FiSliders, 
  FiLayers, FiChevronRight, FiCheck, FiCpu, FiActivity 
} from "react-icons/fi";

const modulesData = [
  {
    id: "depot",
    number: "01",
    title: "Warehouse & Depot Control",
    icon: FiPackage,
    tag: "RFID & STORAGE",
    theme: "from-blue-500 to-indigo-600 shadow-blue-500/10",
    glowColor: "group-hover:shadow-blue-500/30 border-blue-500/20 hover:border-blue-500/50",
    desc: "Coordinate absolute inventory shelf placement across multiple storage vaults. Built-in capabilities include wireless barcode scanner tracking and automated item sorting.",
    metrics: [
      { label: "Storage Efficiency", value: "98.4%" },
      { label: "RFID Scan Speed", value: "0.2s" }
    ],
    features: [
      "Dynamic 3D shelf allocation",
      "Wireless handheld integration",
      "Auto-generated SKU logs",
      "Multi-depot sync protocols"
    ]
  },
  {
    id: "logistics",
    number: "02",
    title: "Dynamic Logistics & Dispatches",
    icon: FiTruck,
    tag: "GPS ROUTING & CARGO",
    theme: "from-teal-500 to-emerald-600 shadow-teal-500/10",
    glowColor: "group-hover:shadow-teal-500/30 border-teal-500/20 hover:border-teal-500/50",
    desc: "Orchestrate real-time dispatches with exact telemetry tracking. Optimal route matching engines calculate cargo timelines, fuel expenses, and driver availability metrics.",
    metrics: [
      { label: "On-Time Dispatch", value: "99.1%" },
      { label: "Route Cost Savings", value: "-14%" }
    ],
    features: [
      "Live GPS fleet mapping",
      "Dynamic load distribution",
      "Automated manifest generation",
      "Delivery delay risk alerts"
    ]
  },
  {
    id: "procure",
    number: "03",
    title: "Automated Procurement Hub",
    icon: FiTrendingUp,
    tag: "AI SAFETY MARGINS",
    theme: "from-amber-500 to-orange-600 shadow-amber-500/10",
    glowColor: "group-hover:shadow-amber-500/30 border-amber-500/20 hover:border-amber-500/50",
    desc: "Prevent unexpected stock depletions through self-adjusting safety reserves. The analytical sourcing cart evaluates vendor reliability indices to propose low-cost replenishment orders.",
    metrics: [
      { label: "Safety Level Accuracy", value: "99.8%" },
      { label: "Average Restock Time", value: "1.2d" }
    ],
    features: [
      "Predictive stock warnings",
      "Supplier index scoring",
      "Multi-quote comparison engine",
      "Consolidated shipping recommendations"
    ]
  },
  {
    id: "audit",
    number: "04",
    title: "Operations & Audit Security",
    icon: FiShield,
    tag: "RBAC & COMPLIANCE",
    theme: "from-rose-500 to-pink-600 shadow-rose-500/10",
    glowColor: "group-hover:shadow-rose-500/30 border-rose-500/20 hover:border-rose-500/50",
    desc: "Maintain absolute compliance tracking across all logistics changes. Standard integration includes single sign-on authentication, user activity histories, and batch expiration alerts.",
    metrics: [
      { label: "Compliance Index", value: "100%" },
      { label: "Audit Log Integrity", value: "Secure" }
    ],
    features: [
      "Granular user permissions",
      "Full revision histories",
      "Automatic expiration notices",
      "ISO compliant archives"
    ]
  },
  {
    id: "analytics",
    number: "05",
    title: "Supply Chain Analytics",
    icon: FiSliders,
    tag: "CUSTOM DASHBOARDS",
    theme: "from-green-500 to-lime-600 shadow-green-500/10",
    glowColor: "group-hover:shadow-green-500/30 border-green-500/20 hover:border-green-500/50",
    desc: "Visualize complex supply chain data through customizable dashboards. Real-time widgets include inventory heatmaps, logistics flow diagrams, and procurement trend graphs.",
    metrics: [
      { label: "Data Freshness", value: "Live" },
      { label: "Custom Widget Count", value: "12+" }
    ],
    features: [
      "Drag-and-drop dashboard builder",
      "Real-time data streaming",
      "Pre-built logistics widgets",
      "Exportable analytics reports"
    ]
  }
];

export default function Modules() {
  const [activeModule, setActiveModule] = useState(modulesData[0]);

  return (
    <div className="space-y-16 py-6 text-left relative overflow-hidden">
      
      <div className="space-y-3">
        <span className="text-[10px] font-bold text-[#2874F0] uppercase tracking-widest block">OPERATIONAL MODULES</span>
        <h1 className="text-3xl font-extrabold text-slate-800">Advanced Sourcing Framework</h1>
        <p className="text-sm text-slate-500 max-w-xl">
          Deploy premium, high-integrity logistics, shelf synchronization, and security modules to elevate your corporate supply chain workflow.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative">
        
        <div className="lg:col-span-5 space-y-4">
          <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-2 mb-1">
            Choose Module Overview
          </span>
          <div className="space-y-3">
            {modulesData.map((mod) => {
              const Icon = mod.icon;
              const isSelected = activeModule.id === mod.id;
              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveModule(mod)}
                  className={`w-full p-5 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                    isSelected 
                      ? "bg-white border-[#2874F0]/40 shadow-xl shadow-blue-500/5 scale-[1.02] translate-x-1" 
                      : "bg-slate-50/50 border-slate-100 hover:bg-white hover:border-slate-200"
                  }`}
                >
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#2874F0]"></div>
                  )}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${mod.theme} text-white`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">
                          MODULE {mod.number}
                        </span>
                        <h3 className="text-sm font-bold text-slate-800 mt-0.5">{mod.title}</h3>
                      </div>
                    </div>
                    <FiChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                      isSelected ? "text-[#2874F0] translate-x-1" : "text-slate-400 group-hover:translate-x-0.5"
                    }`} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl min-h-[480px] flex flex-col justify-between relative overflow-hidden group transition-all duration-500">
            <div className="absolute -top-10 -right-10 w-44 h-44 bg-blue-500/5 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-all duration-700"></div>

            <div className="space-y-6 flex-1 flex flex-col justify-between">
              
              <div className="space-y-6">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <span className="text-[9px] font-bold bg-[#2874F0]/10 text-[#2874F0] border border-[#2874F0]/10 px-3 py-1 rounded-full uppercase tracking-wider">
                    {activeModule.tag}
                  </span>
                  <div className="flex items-center gap-2">
                    <FiCpu className="w-4 h-4 text-[#2874F0] animate-spin-slow" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active System Module</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${activeModule.theme} text-white`}>
                    {React.createElement(activeModule.icon, { className: "w-7 h-7" })}
                  </div>
                  <div>
                    <h2 className="text-lg font-extrabold text-slate-800">{activeModule.title}</h2>
                    <p className="text-xs text-slate-400 font-semibold uppercase mt-0.5">StockFlow Core Pipeline</p>
                  </div>
                </div>

                <p className="text-xs leading-relaxed text-slate-500 font-medium">
                  {activeModule.desc}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                {activeModule.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 bg-slate-50/60 border border-slate-100/50 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                    <FiCheck className="text-emerald-500 shrink-0 w-4 h-4" />
                    <span className="text-xs font-semibold text-slate-700">{feat}</span>
                  </div>
                ))}
              </div>

            </div>

            <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-6 flex-wrap gap-4 shrink-0">
              <div className="flex gap-8">
                {activeModule.metrics.map((met, idx) => (
                  <div key={idx} className="text-left">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">{met.label}</span>
                    <span className="text-xl font-extrabold text-slate-800 block mt-0.5">{met.value}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-100 text-emerald-600 px-3 py-1 rounded-full">
                <FiActivity className="w-3.5 h-3.5 animate-pulse" />
                <span className="text-[9px] font-extrabold uppercase tracking-widest">Module Synced</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="border border-slate-100/80 rounded-3xl p-8 bg-white relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div>
            <h3 className="text-lg font-bold text-slate-800">Need Custom Integrations?</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-xl font-medium">
              We design specialized workflows, telemetry links, and barcode routines tailored to your specific logistics layout.
            </p>
          </div>
          <a
            href="/contact"
            className="px-6 py-3 bg-[#2874F0] hover:bg-[#2874F0]/90 text-white text-xs font-bold rounded-xl shadow-md transition-all duration-300 shrink-0"
          >
            Coordinate Custom Module
          </a>
        </div>
      </div>

    </div>
  );
}
