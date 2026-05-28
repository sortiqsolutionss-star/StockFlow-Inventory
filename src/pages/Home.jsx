/**
 * StockFlow Systems - Premium Corporate Inventory Sourcing Portal
 * Author: MrAbhi2k3 (https://github.com/MrAbhi2k3)
 * Tagline: Elevating institutional logistics with micro-precise inventory controls.
 * Description: Client-facing home presentation showcasing detailed corporate inventory
 * sourcing modules, interactive stock panels, procurement logs, and scheduling tools.
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useInventory } from "@/context/InventoryContext";
import {
  FiArrowRight, FiCheckCircle, FiBox, FiTrendingUp,
  FiFileText, FiLayers, FiShield, FiStar, FiShoppingBag,
  FiUser, FiMail, FiPhone, FiCompass, FiBriefcase, FiCalendar, FiActivity,
  FiChevronDown, FiChevronUp
} from "react-icons/fi";
import toast from "react-hot-toast";

const moduleData = {
  balances: {
    title: "Stock Balance Tickers",
    details: [
      { name: "Live Stock Counts", desc: "Real-time updates on active catalog levels" },
      { name: "SKU Identifier Lookup", desc: "Instantly fetch specific serial codes and suppliers" },
      { name: "Category Sorting", desc: "Group items into Electronics, Apparel, or Furniture" },
      { name: "Batch Expirations", desc: "Track laboratory reagent and supply dates" }
    ],
    technicalSpecs: [
      "Low latency database updates in under 200ms",
      "Dynamic allocation algorithm to avoid double-booking",
      "Automated stock level caching with local storage backup",
      "Supports barcode reader integration directly"
    ]
  },
  registry: {
    title: "Enterprise Asset Registry",
    details: [
      { name: "Electronics Tracking", desc: "Manage corporate laptops, screens, and routers" },
      { name: "Laboratory Apparatus", desc: "Coordinate bio-reagents and delicate equipment" },
      { name: "Classroom & Desks", desc: "Log department desks, chairs, and lecterns" },
      { name: "Library Assets", desc: "Track barcodes and volume coordinate logs" }
    ],
    technicalSpecs: [
      "Categorized classification under corporate asset codes",
      "Automatic amortization tracking based on usage time",
      "Dynamic lifecycle tags from registration to disposal",
      "Multi-tier access permissions for editing records"
    ]
  },
  margins: {
    title: "Safety Threshold Margins",
    details: [
      { name: "Low-Stock Alarms", desc: "Automatic warnings when counts drop below threshold" },
      { name: "Threshold Limits", desc: "Configure custom safety stock limits per item" },
      { name: "Reorder Triggers", desc: "Dynamic alert indicators sent to procurement hubs" },
      { name: "Emergency Allocations", desc: "Locate and pull emergency supplies instantly" }
    ],
    technicalSpecs: [
      "Custom safety thresholds configurable per SKU",
      "Visual indicators representing warning priorities",
      "Automatic buffer calculations derived from weekly demand",
      "Instant email and alert triggers sent to sourcing operators"
    ]
  },
  cart: {
    title: "Sourcing Basket Compilation",
    details: [
      { name: "Consolidated Requests", desc: "Stage multiple items inside one basket" },
      { name: "Operator Remarks", desc: "Append target delivery dates and custom specs" },
      { name: "Sourcing Dispatches", desc: "Send consolidated quotes requests in one click" },
      { name: "Fulfillment Keys", desc: "Generates unique tracking numbers for security" }
    ],
    technicalSpecs: [
      "Draft carts saved dynamically to operator sessions",
      "Estimated spend compiled and visualized in real time",
      "Custom spec parser supporting multi-line operator remarks",
      "Dispatched requests recorded instantly to transaction logs"
    ]
  },
  suppliers: {
    title: "Supplier Relations Hub",
    details: [
      { name: "Certified Merchants", desc: "Browse pre-vetted corporate supply vendors" },
      { name: "Quote Comparisons", desc: "Evaluate price points and delivery latency" },
      { name: "Supplier Performance", desc: "Track dispatch accuracy and fulfillment speed" }
    ],
    technicalSpecs: [
      "Direct integration of pre-vetted merchant catalogs",
      "Historical metrics tracking merchant response latencies",
      "Fulfillment speed scoring displayed to logged-in buyers",
      "Alternate supplier suggestions for high-scarcity supplies"
    ]
  },
  audits: {
    title: "Fulfillment & Compliance Audits",
    details: [
      { name: "Timestamped Verification", desc: "Rigorous logs of every stock count adjustment" },
      { name: "Fulfillment Statuses", desc: "Follow requests from pending to delivered" },
      { name: "Operator Activity Logs", desc: "Audit trails showing which buyer submitted requests" }
    ],
    technicalSpecs: [
      "100% immutable operational transaction records",
      "Unique identification tracking keys mapped to requests",
      "Exportable CSV templates for compliance reviews",
      "Activity timelines illustrating buyer and reviewer steps"
    ]
  }
};

export default function Home() {
  const { products } = useInventory();
  const [activeModule, setActiveModule] = useState("balances");
  const [showTechnicalSpecs, setShowTechnicalSpecs] = useState(false);
  const [demoName, setDemoName] = useState("");
  const [demoPhone, setDemoPhone] = useState("");
  const [demoEmail, setDemoEmail] = useState("");
  const [demoInst, setDemoInst] = useState("");
  const [demoPriority, setDemoPriority] = useState("Complete Sourcing System");
  const [sendingDemo, setSendingDemo] = useState(false);

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    if (!demoName || !demoPhone || !demoEmail || !demoInst) return;

    setSendingDemo(true);
    setTimeout(() => {
      toast.success(`Success! Live Demo Scheduled for ${demoInst}. Check your email.`);
      setDemoName("");
      setDemoPhone("");
      setDemoEmail("");
      setDemoInst("");
      setSendingDemo(false);
    }, 800);
  };

  const handleModuleSelect = (moduleId) => {
    setActiveModule(moduleId);
    setShowTechnicalSpecs(false);
  };

  return (
    <div className="space-y-24 pb-16 text-left">

      <section className="w-full relative bg-white pt-12 pb-16 overflow-hidden">
        <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold text-[#2874F0] tracking-wider uppercase block">
              SMART ENTERPRISE INVENTORY SYSTEM
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-800 font-sans">
              All-in-One Enterprise <br />
              <span className="text-[#2874F0]">Inventory Sourcing</span>
            </h1>

            <p className="text-sm text-slate-600 leading-relaxed font-semibold">
              Coordinate warehouse stocks, dispatch quote inquiries, track safety limits, and connect departments in one unified platform built for organizations that want cleaner procurement operations.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#demo-form"
                className="px-7 py-3 bg-[#2874F0] hover:bg-[#2874F0]/90 text-white font-bold rounded-full shadow-lg shadow-blue-500/10 hover:shadow-xl transition-all duration-300"
              >
                Book Demo
              </a>
              <Link
                to="/signup"
                className="px-7 py-3 bg-white hover:bg-slate-100 text-slate-700 font-bold rounded-full border border-slate-200 shadow-sm transition-all duration-300"
              >
                Free Trial
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 max-w-xl">
              <div className="bg-white px-4 py-3 rounded-xl border border-slate-100 shadow-xs hover:shadow-md hover:-translate-y-1 hover:border-blue-400/50 transition-all duration-300">
                <span className="text-lg font-extrabold text-[#2874F0] block">50+</span>
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block mt-0.5">Warehouses</span>
              </div>
              <div className="bg-white px-4 py-3 rounded-xl border border-slate-100 shadow-xs hover:shadow-md hover:-translate-y-1 hover:border-emerald-400/50 transition-all duration-300">
                <span className="text-lg font-extrabold text-[#2874F0] block">1,200+</span>
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block mt-0.5">Active Suppliers</span>
              </div>
              <div className="bg-white px-4 py-3 rounded-xl border border-slate-100 shadow-xs hover:shadow-md hover:-translate-y-1 hover:border-purple-400/50 transition-all duration-300">
                <span className="text-lg font-extrabold text-[#2874F0] block">99.98%</span>
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block mt-0.5">Inventory Precision</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-md">
              <div className="absolute inset-0 bg-[#2874F0]/5 rounded-3xl blur-2xl pointer-events-none"></div>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80"
                alt="Inventory Sourcing Preview"
                className="w-full rounded-2xl shadow-2xl border border-slate-100/85 hover:-translate-y-2 hover:scale-[1.02] hover:rotate-1 hover:shadow-blue-500/20 transition-all duration-500 relative z-10"
              />
            </div>
          </div>

        </div>
      </section>

      <section className="w-full bg-[#F8FAFC] py-20 border-y border-slate-100">
        <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 space-y-10">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#2874F0] uppercase tracking-widest block">INVENTORY MODULES</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
              Everything a procurement team needs to run daily work.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
              {[
                { id: "balances", name: "Stock Balances", icon: FiActivity },
                { id: "registry", name: "Asset Registry", icon: FiBox },
                { id: "margins", name: "Safety Margins", icon: FiCompass },
                { id: "cart", name: "Sourcing Cart", icon: FiShoppingBag },
                { id: "suppliers", name: "Suppliers Hub", icon: FiUser },
                { id: "audits", name: "Compliance Log", icon: FiShield }
              ].map((mod) => {
                const ModIcon = mod.icon;
                const isSelected = activeModule === mod.id;

                return (
                  <button
                    key={mod.id}
                    onClick={() => handleModuleSelect(mod.id)}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl border text-center transition-all duration-300 cursor-pointer hover:-translate-y-1.5 hover:scale-[1.03] hover:shadow-lg hover:border-[#2874F0]/30 ${isSelected
                      ? "bg-[#2874F0]/5 border-[#2874F0] shadow-md text-[#2874F0]"
                      : "bg-slate-50 border-slate-100 hover:border-slate-200 hover:bg-white text-slate-600"
                      }`}
                  >
                    <ModIcon className="w-5 h-5 shrink-0" />
                    <span className="text-xs font-bold mt-2">{mod.name}</span>
                  </button>
                );
              })}
            </div>

            <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-100 shadow-xl flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:border-[#2874F0]/20 relative overflow-hidden">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-50 pb-3">
                  <h3 className="font-extrabold text-slate-800 text-base">
                    {moduleData[activeModule].title}
                  </h3>
                  <span className="text-xs font-bold text-[#2874F0] uppercase tracking-wider">
                    Logistics Core
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                  {moduleData[activeModule].details.map((det, idx) => (
                    <div key={idx} className="flex gap-2">
                      <FiCheckCircle className="text-[#2874F0] w-4.5 h-4.5 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-slate-800">{det.name}</h4>
                        <p className="text-xs text-slate-500 mt-0.5 font-medium">{det.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-50 pt-4 mt-4">
                  <button
                    onClick={() => setShowTechnicalSpecs(!showTechnicalSpecs)}
                    className="flex items-center justify-between w-full text-xs font-bold text-slate-600 hover:text-[#2874F0] transition-colors cursor-pointer"
                  >
                    <span>{showTechnicalSpecs ? "Hide Technical Specifications" : "Explore Deep Specifications"}</span>
                    {showTechnicalSpecs ? <FiChevronUp className="w-4 h-4" /> : <FiChevronDown className="w-4 h-4" />}
                  </button>

                  <div className={`transition-all duration-500 ease-in-out overflow-hidden ${showTechnicalSpecs ? "max-h-60 opacity-100 mt-3.5" : "max-h-0 opacity-0"
                    }`}>
                    <ul className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs text-slate-600 space-y-2 text-left">
                      {moduleData[activeModule].technicalSpecs.map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-2">
                          <FiShield className="text-[#2874F0] w-3.5 h-3.5 shrink-0" />
                          <span className="font-semibold text-slate-700">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-20">
        <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#2874F0] uppercase tracking-widest block">Live Stock Overview</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">Featured Supplies Overview</h2>
            </div>
            <Link
              to="/products"
              className="text-xs font-bold text-[#2874F0] hover:underline flex items-center gap-1.5"
            >
              Explore Full Catalog <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {products.slice(0, 3).map((product) => (
              <div key={product.id} className="bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] hover:-rotate-1 hover:border-[#2874F0]/30 transition-all duration-300 group flex flex-col h-full">
                <div className="relative h-48 bg-slate-50 overflow-hidden shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[9px] font-extrabold tracking-wider bg-slate-900/80 text-white backdrop-blur-xs uppercase">
                    {product.category}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm line-clamp-1">{product.name}</h4>
                    <p className="text-sm text-slate-500 mt-1 line-clamp-2 leading-relaxed font-semibold">{product.description}</p>
                  </div>
                  <div className="flex items-center justify-between mt-5 pt-3 border-t border-slate-50 shrink-0">
                    <span className="text-sm font-extrabold text-[#2874F0]">${product.price}</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${product.stock > 5 ? "bg-green-50 text-green-600" :
                      product.stock > 0 ? "bg-[#2874F0]/10 text-[#2874F0]" :
                        "bg-red-50 text-red-600"
                      }`}>
                      {product.stock > 0 ? `${product.stock} units` : "Out of stock"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F0FDF4]/40 py-20 border-y border-emerald-50">
        <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#2874F0] uppercase tracking-widest block">WHY TEAMS CHOOSE US</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
                Built for the real rhythm of corporate and enterprise warehouses.
              </h2>
            </div>
            <Link to="/about" className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors cursor-pointer inline-block text-center animate-pulse">
              About StockFlow
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6.5 text-left">
            <div className="bg-white p-6.5 rounded-2xl border border-slate-100 shadow-xs hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] hover:rotate-1 hover:border-blue-400 transition-all duration-300">
              <div className="p-3 w-fit rounded-xl bg-blue-50 text-[#2874F0] font-bold">
                01
              </div>
              <h4 className="text-base font-bold text-slate-800 mt-4.5">Faster sourcing</h4>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed font-semibold">
                Bust procurement delays, compile request lists, and dispatch unified inquiries in clicks.
              </p>
            </div>

            <div className="bg-white p-6.5 rounded-2xl border border-slate-100 shadow-xs hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] hover:-rotate-1 hover:border-emerald-400 transition-all duration-300">
              <div className="p-3 w-fit rounded-xl bg-emerald-50 text-emerald-600 font-bold">
                02
              </div>
              <h4 className="text-base font-bold text-slate-800 mt-4.5">Cleaner operations</h4>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed font-semibold">
                Keep stock, suppliers, wishlist bookmarks, and fulfillment logs connected seamlessly.
              </p>
            </div>

            <div className="bg-white p-6.5 rounded-2xl border border-slate-100 shadow-xs hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] hover:rotate-1 hover:border-purple-400 transition-all duration-300">
              <div className="p-3 w-fit rounded-xl bg-purple-50 text-purple-600 font-bold">
                03
              </div>
              <h4 className="text-base font-bold text-slate-800 mt-4.5">Better auditing</h4>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed font-semibold">
                Maintain exact tracking precision with secure session credentials and reference audit keys.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-20">
        <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="lg:col-span-5 bg-gradient-to-br from-[#2874F0] to-blue-600 p-8.5 rounded-3xl text-white space-y-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <span className="text-xs font-bold bg-white/10 text-white border border-white/10 px-3 py-1 rounded-full uppercase tracking-wider w-fit block">
              Verified Stock Workflows
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
              Built for teams that run warehouses every day.
            </h2>
            <p className="text-xs text-white/70 leading-relaxed font-medium">
              From office requests to final bulk supply dispatches, StockFlow keeps inventory registers, suppliers, and safety alert margins connected.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 text-center">
              <div>
                <span className="text-xl font-extrabold block">50+</span>
                <span className="text-xs text-white/70 block uppercase tracking-wider mt-0.5">Warehouses</span>
              </div>
              <div>
                <span className="text-xl font-extrabold block">1,200+</span>
                <span className="text-xs text-white/70 block uppercase tracking-wider mt-0.5">Suppliers</span>
              </div>
              <div>
                <span className="text-xl font-extrabold block">1.5s</span>
                <span className="text-xs text-white/70 block uppercase tracking-wider mt-0.5">Allocations</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:-rotate-1 hover:border-pink-400 transition-all duration-300">
              <span className="text-xs font-bold text-slate-800 block">Multi-warehouse setup</span>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed font-semibold">
                Structured catalog allocation limits across different departments and localized stocks.
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:-rotate-1 hover:border-amber-400 transition-all duration-300">
              <span className="text-xs font-bold text-slate-800 block">Inventory visibility</span>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed font-semibold">
                Live indicators representing In Stock or Low Stock counts visible to logged-in buyers.
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:-rotate-1 hover:border-cyan-400 transition-all duration-300">
              <span className="text-xs font-bold text-slate-800 block">Supplier confidence</span>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed font-semibold">
                Consolidated quote dispatches and pre-vetted catalog pricing optimize buying routes.
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:-rotate-1 hover:border-indigo-400 transition-all duration-300">
              <span className="text-xs font-bold text-slate-800 block">Secure role access</span>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed font-semibold">
                Authorized operators and buyers can access the cart and submit dispatch requests.
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section className="w-full bg-slate-950 text-white py-24 border-t border-slate-800">
        <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-stretch">

          <div className="lg:col-span-6 bg-slate-900 p-8 rounded-3xl border border-slate-800/80 shadow-xl flex flex-col justify-between space-y-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div>
              <span className="text-xs font-bold text-[#2874F0] uppercase tracking-widest block">PRODUCT WALKTHROUGH</span>
              <h3 className="text-base font-extrabold text-white mt-2">See the Sourcing System in action.</h3>
              <p className="text-xs text-slate-400 mt-1">Watch the video of the product and go through the features and functionality.</p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80"
                alt="Warehouse logistics visual"
                className="w-full object-cover h-48 opacity-95 hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="flex gap-2.5 flex-wrap">
              <span className="px-3 py-1.5 bg-slate-800 text-slate-300 text-[10px] font-bold rounded-lg uppercase tracking-wider">Stock allocation</span>
              <span className="px-3 py-1.5 bg-slate-800 text-slate-300 text-[10px] font-bold rounded-lg uppercase tracking-wider">Procurement Cart</span>
              <span className="px-3 py-1.5 bg-slate-800 text-slate-300 text-[10px] font-bold rounded-lg uppercase tracking-wider">Supplier Auditing</span>
            </div>
          </div>

          <form onSubmit={handleDemoSubmit} className="lg:col-span-6 bg-slate-900 p-8 rounded-3xl border border-slate-800/80 shadow-xl space-y-4 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="font-extrabold text-white text-base">Schedule your demo</h3>
                <p className="text-xs text-slate-400 mt-0.5">Share your details and our team will contact you.</p>
              </div>
              <span className="text-xs font-bold bg-[#2874F0]/20 text-[#2874F0] border border-[#2874F0]/20 px-2.5 py-0.5 rounded-full uppercase">
                Live demo
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-1.5">Your Name</label>
                <input
                  type="text"
                  required
                  value={demoName}
                  onChange={(e) => setDemoName(e.target.value)}
                  placeholder="Name"
                  className="w-full h-10 px-3.5 text-xs text-white bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:bg-slate-850 focus:border-[#2874F0] transition-all font-medium"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={demoPhone}
                  onChange={(e) => setDemoPhone(e.target.value)}
                  placeholder="+91"
                  className="w-full h-10 px-3.5 text-xs text-white bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:bg-slate-850 focus:border-[#2874F0] transition-all font-medium"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-1.5">Email Address</label>
                <input
                  type="email"
                  required
                  value={demoEmail}
                  onChange={(e) => setDemoEmail(e.target.value)}
                  placeholder="yourname@gmail.com"
                  className="w-full h-10 px-3.5 text-xs text-white bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:bg-slate-850 focus:border-[#2874F0] transition-all font-medium"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-1.5">Organization Name</label>
                <input
                  type="text"
                  required
                  value={demoInst}
                  onChange={(e) => setDemoInst(e.target.value)}
                  placeholder="Organization name"
                  className="w-full h-10 px-3.5 text-xs text-white bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:bg-slate-850 focus:border-[#2874F0] transition-all font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-1.5">Priority Module</label>
              <select
                value={demoPriority}
                onChange={(e) => setDemoPriority(e.target.value)}
                className="w-full h-10 px-3 text-xs text-slate-300 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:bg-slate-850 focus:border-[#2874F0] transition-all font-semibold cursor-pointer"
              >
                <option value="Complete Sourcing System">Complete Sourcing System</option>
                <option value="Stock Balances & Margins">Stock Balances & Margins</option>
                <option value="Procurement Cart & Quotes">Procurement Cart & Quotes</option>
                <option value="Supplier Networks & Auditing">Supplier Networks & Auditing</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={sendingDemo}
              className="flex items-center justify-center gap-2 w-full h-11 bg-[#2874F0] hover:bg-[#2874F0]/90 text-white font-bold rounded-lg shadow-lg shadow-blue-500/10 hover:shadow-xl transition-all cursor-pointer pt-1"
            >
              {sendingDemo ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <span>Book Live Demo</span>
              )}
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
