/**
 * StockFlow Systems - Premium Corporate Inventory Sourcing Portal
 * Author: MrAbhi2k3 (https://github.com/MrAbhi2k3)
 * Tagline: Elevating institutional logistics with micro-precise inventory controls.
 * Description: Clean, responsive user authorization panel providing prepopulated sandbox
 * logins and password toggles to redirect session operators.
 */

import React, { useState } from "react";
import { useInventory } from "@/context/InventoryContext";
import { useNavigate, Link } from "react-router-dom";
import { FiMail, FiLock, FiEye, FiEyeOff, FiShoppingBag, FiArrowRight } from "react-icons/fi";

export default function Login() {
  const { login } = useInventory();
  const navigate = useNavigate();
  const [email, setEmail] = useState("buyer@stockflow.com");
  const [password, setPassword] = useState("corporate123");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;

    setSubmitting(true);
    setTimeout(() => {
      login(email, password);
      setSubmitting(false);
      navigate("/");
    }, 800);
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-8rem)] px-4 py-12">
      <div className="w-full max-w-md bg-white border border-slate-100/80 rounded-2xl shadow-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
        <div className="p-8 text-center bg-[#2874F0] text-white">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 text-white mb-3 shadow-inner">
            <FiShoppingBag className="w-6.5 h-6.5" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">StockFlow Portal</h2>
          <p className="text-xs text-white/70 mt-1">Corporate Sourcing & Request Access Console</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-5 text-left">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Corporate Email</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                <FiMail className="w-4 h-4" />
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="buyer@stockflow.com"
                className="w-full h-11 pl-10 pr-4 text-sm text-slate-800 bg-[#F1F3F6] border border-transparent rounded-xl focus:outline-none focus:bg-white focus:border-[#2874F0]/40 focus:ring-1 focus:ring-[#2874F0]/40 transition-all font-medium"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Access Password</label>
              <a href="#" className="text-xs font-bold text-slate-400 hover:text-[#2874F0] hover:underline" onClick={(e) => { e.preventDefault(); }}>
                Forgot?
              </a>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                <FiLock className="w-4 h-4" />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full h-11 pl-10 pr-12 text-sm text-slate-800 bg-[#F1F3F6] border border-transparent rounded-xl focus:outline-none focus:bg-white focus:border-[#2874F0]/40 focus:ring-1 focus:ring-[#2874F0]/40 transition-all font-medium"
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
            className="flex items-center justify-center gap-2 w-full h-11 bg-[#2874F0] hover:bg-[#2874F0]/90 disabled:bg-[#2874F0]/50 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-xl transition-all cursor-pointer"
          >
            {submitting ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <>
                <span>Access Catalog Cart</span>
                <FiArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          <p className="text-xs text-center text-slate-500">
            Need an active account?{" "}
            <Link to="/signup" className="font-bold text-[#2874F0] hover:underline">
              Request Portal Credentials
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
