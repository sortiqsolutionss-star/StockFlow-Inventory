/**
 * StockFlow Systems - Premium Corporate Inventory Sourcing Portal
 * Author: MrAbhi2k3 (https://github.com/MrAbhi2k3)
 * Tagline: Elevating institutional logistics with micro-precise inventory controls.
 * Description: Client-facing signup terminal allowing operators to register custom credentials
 * and create active profiles inside the context state database.
 */

import React, { useState } from "react";
import { useInventory } from "@/context/InventoryContext";
import { useNavigate, Link } from "react-router-dom";
import { FiMail, FiLock, FiEye, FiEyeOff, FiShoppingBag, FiUser, FiArrowLeft } from "react-icons/fi";

export default function Signup() {
  const { signup } = useInventory();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) return;

    setSubmitting(true);
    setTimeout(() => {
      signup(name, email, password);
      setSubmitting(false);
      navigate("/");
    }, 800);
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-8rem)] px-4 py-12">
      <div className="w-full max-w-md bg-white border border-slate-100/80 rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-6 text-center bg-[#2874F0] text-white relative">
          <Link to="/login" className="absolute left-4 top-1/2 -translate-y-1/2 p-2 hover:bg-white/10 rounded-lg text-white transition-colors" title="Back to Login">
            <FiArrowLeft className="w-5 h-5" />
          </Link>
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 text-white mb-2 shadow-inner">
            <FiShoppingBag className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold tracking-tight">Request Sourcing Access</h2>
          <p className="text-[11px] text-white/70">Create a local corporate operator profile</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-left">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Operator Name</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                <FiUser className="w-4 h-4" />
              </span>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                className="w-full h-10 pl-10 pr-4 text-xs text-slate-800 bg-[#F1F3F6] border border-transparent rounded-lg focus:outline-none focus:bg-white focus:border-[#2874F0]/40 focus:ring-1 focus:ring-[#2874F0]/40 transition-all font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Corporate Email Address</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                <FiMail className="w-4 h-4" />
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane.doe@stockflow.com"
                className="w-full h-10 pl-10 pr-4 text-xs text-slate-800 bg-[#F1F3F6] border border-transparent rounded-lg focus:outline-none focus:bg-white focus:border-[#2874F0]/40 focus:ring-1 focus:ring-[#2874F0]/40 transition-all font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Configure Password</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                <FiLock className="w-4 h-4" />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimum 6 characters"
                className="w-full h-10 pl-10 pr-12 text-xs text-slate-800 bg-[#F1F3F6] border border-transparent rounded-lg focus:outline-none focus:bg-white focus:border-[#2874F0]/40 focus:ring-1 focus:ring-[#2874F0]/40 transition-all font-medium"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 focus:outline-none"
              >
                {showPassword ? <FiEyeOff className="w-4 h-4" /> : <FiEye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="flex items-center justify-center gap-2 w-full h-11 bg-[#2874F0] hover:bg-[#2874F0]/90 disabled:bg-[#2874F0]/50 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-xl transition-all cursor-pointer mt-2"
          >
            {submitting ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <span>Create Sourcing Profile</span>
            )}
          </button>

          <p className="text-xs text-center text-slate-500 pt-2">
            Already have an active profile?{" "}
            <Link to="/login" className="font-bold text-[#2874F0] hover:underline">
              Access Sourcing Panel
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
