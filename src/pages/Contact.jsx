/**
 * StockFlow Systems - Premium Corporate Inventory Sourcing Portal
 * Author: MrAbhi2k3 (https://github.com/MrAbhi2k3)
 * Tagline: Elevating institutional logistics with micro-precise inventory controls.
 * Description: Support helpdesk interface offering interactive form submissions,
 * coordinate details, and toast response triggers.
 */

import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend, FiUser, FiInfo } from "react-icons/fi";
import toast from "react-hot-toast";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dept, setDept] = useState("Operations");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setSending(true);
    setTimeout(() => {
      toast.success("Helpdesk request submitted! A sourcing officer will contact you shortly.");
      setName("");
      setEmail("");
      setMessage("");
      setSending(false);
    }, 800);
  };

  return (
    <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 py-10 space-y-12 text-left">
      <div className="space-y-3">
        <span className="text-[10px] font-bold text-[#2874F0] uppercase tracking-widest block">Inventory Helpdesk</span>
        <h1 className="text-3xl font-extrabold text-slate-800">Support & Inquiries</h1>
        <p className="text-sm text-slate-500 max-w-xl">
          Need operational support or custom sourcing agreements? Dispatch a note directly to our logistics hub operators.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <form onSubmit={handleSubmit} className="lg:col-span-7 bg-white p-6.5 rounded-2xl border border-slate-100 shadow-xs space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1.5">Your Name</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                  <FiUser className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full h-10 pl-10 pr-4 text-xs text-slate-800 bg-[#F1F3F6] border border-transparent rounded-lg focus:outline-none focus:bg-white focus:border-[#2874F0]/30 transition-all font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1.5">Official Email</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                  <FiMail className="w-4 h-4" />
                </span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john.doe@stockflow.com"
                  className="w-full h-10 pl-10 pr-4 text-xs text-slate-800 bg-[#F1F3F6] border border-transparent rounded-lg focus:outline-none focus:bg-white focus:border-[#2874F0]/30 transition-all font-medium"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1.5">Target Department</label>
            <select
              value={dept}
              onChange={(e) => setDept(e.target.value)}
              className="w-full h-10 px-3.5 text-xs text-slate-700 bg-[#F1F3F6] border border-transparent rounded-lg focus:outline-none focus:bg-white focus:border-[#2874F0]/30 transition-all font-medium"
            >
              <option value="Operations">Operations Sourcing</option>
              <option value="Billing">Licensing & Billing</option>
              <option value="Technical">Technical Helpdesk</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1.5">Message / Inquiry Details</label>
            <textarea
              required
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Detail your request or support question..."
              className="w-full p-3 text-xs text-slate-800 bg-[#F1F3F6] border border-transparent rounded-lg focus:outline-none focus:bg-white focus:border-[#2874F0]/30 transition-all font-medium"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={sending}
            className="flex items-center justify-center gap-2 w-full h-11 bg-[#2874F0] hover:bg-[#2874F0]/90 disabled:bg-[#2874F0]/50 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-xl transition-all cursor-pointer"
          >
            {sending ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <>
                <span>Dispatch Helpdesk Note</span>
                <FiSend className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </form>

        <div className="lg:col-span-5 bg-slate-900 text-slate-300 p-6.5 rounded-2xl space-y-6">
          <div>
            <h3 className="text-base font-bold text-white">Centralized Logistics Hub</h3>
            <p className="text-xs text-slate-400 mt-1">Direct support contacts</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3 text-xs">
              <FiMapPin className="w-5 h-5 text-[#2874F0] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white">Corporate Headquarters</p>
                <p className="text-slate-400 mt-0.5">100 Technology Plaza, Silicon Valley, CA 94025</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <FiPhone className="w-5 h-5 text-[#2874F0] shrink-0" />
              <div>
                <p className="font-bold text-white">Emergency Logistics</p>
                <p className="text-slate-400 mt-0.5">+1 (800) 555-FLOW</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <FiMail className="w-5 h-5 text-[#2874F0] shrink-0" />
              <div>
                <p className="font-bold text-white">Official Correspondence</p>
                <p className="text-slate-400 mt-0.5">support@stockflow.com</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-800 flex gap-3 text-xs text-slate-400">
            <FiInfo className="w-5 h-5 text-[#2874F0] shrink-0 mt-0.5" />
            <span>Average operator response latency is 14 minutes.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
