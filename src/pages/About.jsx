/**
 * StockFlow Systems - Premium Corporate Inventory Sourcing Portal
 * Author: MrAbhi2k3 (https://github.com/MrAbhi2k3)
 * Tagline: Elevating institutional logistics with micro-precise inventory controls.
 * Description: Redesigned premium About page featuring glassmorphism cards, structured row showcases,
 * and high-fidelity bubble tilt hover coordinates. Zero code comments included.
 */

import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="space-y-24 py-8 text-left">
      
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        <div className="lg:col-span-7 bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-xl flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl group-hover:scale-120 transition-transform"></div>
          <div className="space-y-6">
            <span className="text-[10px] font-bold text-[#2874F0] uppercase tracking-widest block">ABOUT STOCKFLOW</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 leading-tight">
              Building reliable digital systems for ambitious inventory teams.
              <div className="h-1.5 w-36 bg-[#2874F0] rounded-full mt-3.5"></div>
            </h1>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              StockFlow provides practical, high-performance software that helps institutions coordinate warehouse pipelines, streamline dispatches, and optimize procurement routines with maximum tracking confidence.
            </p>
          </div>
          <div className="flex gap-4 pt-8">
            <Link to="/contact" className="px-6 py-3 bg-[#2874F0] hover:bg-[#2874F0]/90 text-white text-xs font-bold rounded-xl shadow-md transition-all duration-300">
              Request Sourcing Demo
            </Link>
            <Link to="/products" className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold rounded-xl border border-slate-200 shadow-sm transition-all duration-300">
              View Our Catalog
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-10 rounded-3xl text-white flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group">
          <div className="absolute top-10 right-10 w-24 h-24 bg-teal-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="space-y-4">
            <span className="text-[9px] font-bold text-teal-400 uppercase tracking-widest block">COMPANY OVERVIEW</span>
            <h2 className="text-2xl font-bold leading-tight">
              Technology with ethics, transparency, and measurable value.
              <div className="h-1.5 w-24 bg-[#FF6B00] rounded-full mt-3.5"></div>
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              We work closely with every client to understand warehouse workflows, simplify database records, and deliver solutions that are secure, reliable, and scaling.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800/80">
            <div>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">ERP</span>
              <span className="text-[10px] text-slate-200 mt-1 block">Premium inventory modules</span>
            </div>
            <div>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">IT</span>
              <span className="text-[10px] text-slate-200 mt-1 block">Custom software integration</span>
            </div>
            <div>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Long-term</span>
              <span className="text-[10px] text-slate-200 mt-1 block">Partnership-first delivery model</span>
            </div>
          </div>
        </div>

      </div>

      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 space-y-8">
        
        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-8 items-center group">
          <div className="md:col-span-5 rounded-2xl overflow-hidden h-48 bg-slate-100 relative">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80" 
              alt="Who We Are"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-slate-900/10 flex items-center justify-center">
              <span className="text-white text-5xl font-light">?</span>
            </div>
          </div>
          <div className="md:col-span-7 space-y-3">
            <span className="text-[9px] font-bold text-[#2874F0] uppercase tracking-widest block">WHO WE ARE</span>
            <h3 className="text-lg font-bold text-slate-800">A software company focused on practical transformation, not vanity tech.</h3>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              At StockFlow, we build systems that solve real operational friction. We design tools that increase item visibility, reduce errors, and support scalable growth, so procurement teams can trust their digital environment.
            </p>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-8 items-center group">
          <div className="md:col-span-5 rounded-2xl overflow-hidden h-48 bg-slate-100">
            <img 
              src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=600&auto=format&fit=crop&q=80" 
              alt="Our Vision"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="md:col-span-7 space-y-3">
            <span className="text-[9px] font-bold text-[#2874F0] uppercase tracking-widest block">OUR VISION</span>
            <h3 className="text-lg font-bold text-slate-800">To become a trusted technology partner for organizations navigating digital change.</h3>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              We want teams to embrace modern technology with absolute confidence. We accomplish this by delivering sourcing engines and warning tools that are dependable, predictable, and engineered for high-demand operations.
            </p>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-8 items-center group">
          <div className="md:col-span-5 rounded-2xl overflow-hidden h-48 bg-slate-100">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80" 
              alt="Our Mission"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="md:col-span-7 space-y-3">
            <span className="text-[9px] font-bold text-[#2874F0] uppercase tracking-widest block">OUR MISSION</span>
            <h3 className="text-lg font-bold text-slate-800">Deliver scalable, value-driven solutions that improve performance and long-term outcomes.</h3>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              We focus on systems that simplify complex pipelines, optimize buying flows, and establish robust digital records, making daily operations transparent and traceable.
            </p>
          </div>
        </div>

      </div>

      <div className="py-16 border-t border-b border-slate-100">
        <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 space-y-10">
          <h2 className="text-2xl font-extrabold text-slate-800 text-center uppercase tracking-wider">
            Core Values
            <div className="h-1.5 w-24 bg-[#2874F0] rounded-full mt-3 mx-auto"></div>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#FFFDF9] p-6.5 rounded-2xl border border-amber-100/60 shadow-md hover:shadow-amber-500/20 hover:scale-[1.05] hover:rotate-3 hover:border-amber-400 hover:bg-[#FFFDF9] transition-all duration-300 group overflow-hidden relative">
              <div className="absolute w-12 h-12 rounded-full bg-amber-500/5 -top-4 -right-4 group-hover:scale-[3] transition-transform duration-500"></div>
              <span className="text-xs font-bold text-amber-500 block">01</span>
              <h4 className="text-sm font-bold text-slate-800 mt-2">Integrity</h4>
              <p className="text-xs text-slate-500 leading-relaxed mt-2 font-medium">
                We communicate honestly, set clear expectations, and build robust software tools you can rely on.
              </p>
            </div>

            <div className="bg-[#FFFDF9] p-6.5 rounded-2xl border border-amber-100/60 shadow-md hover:shadow-amber-500/20 hover:scale-[1.05] hover:-rotate-3 hover:border-amber-400 hover:bg-[#FFFDF9] transition-all duration-300 group overflow-hidden relative">
              <div className="absolute w-12 h-12 rounded-full bg-amber-500/5 -top-4 -right-4 group-hover:scale-[3] transition-transform duration-500"></div>
              <span className="text-xs font-bold text-amber-500 block">02</span>
              <h4 className="text-sm font-bold text-slate-800 mt-2">Innovation</h4>
              <p className="text-xs text-slate-500 leading-relaxed mt-2 font-medium">
                We always strive to refine workflows, designing smart tools that streamline catalog allocation pipelines.
              </p>
            </div>

            <div className="bg-[#FFFDF9] p-6.5 rounded-2xl border border-amber-100/60 shadow-md hover:shadow-amber-500/20 hover:scale-[1.05] hover:rotate-3 hover:border-amber-400 hover:bg-[#FFFDF9] transition-all duration-300 group overflow-hidden relative">
              <div className="absolute w-12 h-12 rounded-full bg-amber-500/5 -top-4 -right-4 group-hover:scale-[3] transition-transform duration-500"></div>
              <span className="text-xs font-bold text-amber-500 block">03</span>
              <h4 className="text-sm font-bold text-slate-800 mt-2">Transparency</h4>
              <p className="text-xs text-slate-500 leading-relaxed mt-2 font-medium">
                From planning to delivery, we keep clients informed, creating systems built on clear accountability.
              </p>
            </div>

            <div className="bg-[#FFFDF9] p-6.5 rounded-2xl border border-amber-100/60 shadow-md hover:shadow-amber-500/20 hover:scale-[1.05] hover:-rotate-3 hover:border-amber-400 hover:bg-[#FFFDF9] transition-all duration-300 group overflow-hidden relative">
              <div className="absolute w-12 h-12 rounded-full bg-amber-500/5 -top-4 -right-4 group-hover:scale-[3] transition-transform duration-500"></div>
              <span className="text-xs font-bold text-amber-500 block">04</span>
              <h4 className="text-sm font-bold text-slate-800 mt-2">Customer Success</h4>
              <p className="text-xs text-slate-500 leading-relaxed mt-2 font-medium">
                Your goals are our focus. We ensure our software delivers a seamless and highly productive operator experience.
              </p>
            </div>

          </div>
        </div>
      </div>

      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 space-y-10">
        <h2 className="text-2xl font-extrabold text-[#2874F0] text-center uppercase tracking-wider">
          Why Choose Us
          <div className="h-1.5 w-24 bg-[#FF6B00] rounded-full mt-3 mx-auto"></div>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-[#F9FFF9] p-6.5 rounded-2xl border border-emerald-100/65 shadow-md hover:shadow-emerald-500/25 hover:-translate-y-3.5 hover:scale-[1.04] hover:border-emerald-400 hover:bg-[#F9FFF9] transition-all duration-300 group overflow-hidden relative">
            <div className="absolute w-12 h-12 rounded-full bg-emerald-500/5 -top-4 -right-4 group-hover:scale-[3.5] transition-transform duration-500"></div>
            <span className="text-xs font-bold text-emerald-500 block">01</span>
            <h4 className="text-sm font-bold text-slate-800 mt-2">Expertise with direction</h4>
            <p className="text-xs text-slate-500 leading-relaxed mt-2 font-medium">
              Our team stays current with modern database designs and delivers robust, adaptable inventory sourcing frameworks.
            </p>
          </div>

          <div className="bg-[#F9FFF9] p-6.5 rounded-2xl border border-emerald-100/65 shadow-md hover:shadow-emerald-500/25 hover:-translate-y-3.5 hover:scale-[1.04] hover:border-emerald-400 hover:bg-[#F9FFF9] transition-all duration-300 group overflow-hidden relative">
            <div className="absolute w-12 h-12 rounded-full bg-emerald-500/5 -top-4 -right-4 group-hover:scale-[3.5] transition-transform duration-500"></div>
            <span className="text-xs font-bold text-emerald-500 block">02</span>
            <h4 className="text-sm font-bold text-slate-800 mt-2">Client-centered planning</h4>
            <p className="text-xs text-slate-500 leading-relaxed mt-2 font-medium">
              We take the time to understand your operational needs and build features tailored exactly to how your business runs.
            </p>
          </div>

          <div className="bg-[#F9FFF9] p-6.5 rounded-2xl border border-emerald-100/65 shadow-md hover:shadow-emerald-500/25 hover:-translate-y-3.5 hover:scale-[1.04] hover:border-emerald-400 hover:bg-[#F9FFF9] transition-all duration-300 group overflow-hidden relative">
            <div className="absolute w-12 h-12 rounded-full bg-emerald-500/5 -top-4 -right-4 group-hover:scale-[3.5] transition-transform duration-500"></div>
            <span className="text-xs font-bold text-emerald-500 block">03</span>
            <h4 className="text-sm font-bold text-slate-800 mt-2">Reliable and scalable delivery</h4>
            <p className="text-xs text-slate-500 leading-relaxed mt-2 font-medium">
              Whether supporting a single department or a growing enterprise network, our products handle high-frequency dispatches.
            </p>
          </div>

          <div className="bg-[#F9FFF9] p-6.5 rounded-2xl border border-emerald-100/65 shadow-md hover:shadow-emerald-500/25 hover:-translate-y-3.5 hover:scale-[1.04] hover:border-emerald-400 hover:bg-[#F9FFF9] transition-all duration-300 group overflow-hidden relative">
            <div className="absolute w-12 h-12 rounded-full bg-emerald-500/5 -top-4 -right-4 group-hover:scale-[3.5] transition-transform duration-500"></div>
            <span className="text-xs font-bold text-emerald-500 block">04</span>
            <h4 className="text-sm font-bold text-slate-800 mt-2">Quality that lasts</h4>
            <p className="text-xs text-slate-500 leading-relaxed mt-2 font-medium">
              From coding standards to UI rendering, we deliver robust software that remains dependable long after deployment.
            </p>
          </div>

        </div>
      </div>

      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 space-y-10">
        <h2 className="text-2xl font-extrabold text-slate-800 text-center uppercase tracking-wider">
          Our Expertise
          <div className="h-1.5 w-24 bg-[#2874F0] rounded-full mt-3 mx-auto"></div>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-slate-50 p-6.5 rounded-2xl border border-slate-100 shadow-md hover:shadow-blue-500/25 hover:-translate-y-2.5 hover:translate-x-2.5 hover:skew-x-1 hover:scale-[1.03] hover:border-[#2874F0] hover:bg-slate-50 transition-all duration-300 group overflow-hidden relative">
            <div className="absolute w-12 h-12 rounded-full bg-[#2874F0]/5 -top-4 -right-4 group-hover:scale-[4] group-hover:-translate-x-2 transition-transform duration-500"></div>
            <span className="text-xs font-bold text-[#2874F0] block">01</span>
            <h4 className="text-sm font-bold text-slate-800 mt-2">Inventory ERP Systems</h4>
            <p className="text-xs text-slate-500 leading-relaxed mt-2 font-medium">
              Connected database modules for catalog dispatches, active safety warnings, and supplier network ledgers.
            </p>
          </div>

          <div className="bg-slate-50 p-6.5 rounded-2xl border border-slate-100 shadow-md hover:shadow-blue-500/25 hover:-translate-y-2.5 hover:translate-x-2.5 hover:skew-x-1 hover:scale-[1.03] hover:border-[#2874F0] hover:bg-slate-50 transition-all duration-300 group overflow-hidden relative">
            <div className="absolute w-12 h-12 rounded-full bg-[#2874F0]/5 -top-4 -right-4 group-hover:scale-[4] group-hover:-translate-x-2 transition-transform duration-500"></div>
            <span className="text-xs font-bold text-[#2874F0] block">02</span>
            <h4 className="text-sm font-bold text-slate-800 mt-2">Workflow Design</h4>
            <p className="text-xs text-slate-500 leading-relaxed mt-2 font-medium">
              Intuitive sourcing interfaces designed to minimize operator latency and simplify daily procurement tasks.
            </p>
          </div>

          <div className="bg-slate-50 p-6.5 rounded-2xl border border-slate-100 shadow-md hover:shadow-blue-500/25 hover:-translate-y-2.5 hover:translate-x-2.5 hover:skew-x-1 hover:scale-[1.03] hover:border-[#2874F0] hover:bg-slate-50 transition-all duration-300 group overflow-hidden relative">
            <div className="absolute w-12 h-12 rounded-full bg-[#2874F0]/5 -top-4 -right-4 group-hover:scale-[4] group-hover:-translate-x-2 transition-transform duration-500"></div>
            <span className="text-xs font-bold text-[#2874F0] block">03</span>
            <h4 className="text-sm font-bold text-slate-800 mt-2">Scalable Reporting</h4>
            <p className="text-xs text-slate-500 leading-relaxed mt-2 font-medium">
              Actionable operational charts and ledgers that keep management informed of real-time supply flows.
            </p>
          </div>

          <div className="bg-slate-50 p-6.5 rounded-2xl border border-slate-100 shadow-md hover:shadow-blue-500/25 hover:-translate-y-2.5 hover:translate-x-2.5 hover:skew-x-1 hover:scale-[1.03] hover:border-[#2874F0] hover:bg-slate-50 transition-all duration-300 group overflow-hidden relative">
            <div className="absolute w-12 h-12 rounded-full bg-[#2874F0]/5 -top-4 -right-4 group-hover:scale-[4] group-hover:-translate-x-2 transition-transform duration-500"></div>
            <span className="text-xs font-bold text-[#2874F0] block">04</span>
            <h4 className="text-sm font-bold text-slate-800 mt-2">Implementation Support</h4>
            <p className="text-xs text-slate-500 leading-relaxed mt-2 font-medium">
              Dedicated technical guides and direct helpdesk lines to ensure your operators adapt smoothly.
            </p>
          </div>

        </div>
      </div>

      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white p-12 rounded-3xl text-center space-y-6 shadow-xl relative overflow-hidden group hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300">
          <div className="absolute inset-0 bg-[#2874F0]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block">PARTNER WITH STOCKFLOW</span>
          <h2 className="text-3xl font-extrabold max-w-2xl mx-auto leading-tight">
            Ready to modernize inventory operations with a more dependable system?
          </h2>
          <p className="text-xs text-slate-400 max-w-xl mx-auto leading-relaxed">
            Let's coordinate your warehouse stocks, category sorting tables, and quote requests into one intuitive dashboard.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Link to="/contact" className="px-6 py-3 bg-[#2874F0] hover:bg-[#2874F0]/90 text-white text-xs font-bold rounded-xl shadow-lg transition-all duration-300">
              Schedule a Demo
            </Link>
            <Link to="/contact" className="px-6 py-3 bg-white hover:bg-slate-100 text-[#2874F0] text-xs font-bold rounded-xl shadow-md transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
