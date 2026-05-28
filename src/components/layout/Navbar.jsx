/**
 * StockFlow Systems - Premium Corporate Inventory Sourcing Portal
 * Author: MrAbhi2k3 (https://github.com/MrAbhi2k3)
 * Tagline: Elevating institutional logistics with micro-precise inventory controls.
 * Description: Header navigation coordinating links for Home, Features, About Us,
 * Live Catalog, Sourcing Tiers, and Contact Us, showcasing enlarged logo assets and Book Demo CTAs.
 */

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useInventory } from "@/context/InventoryContext";
import { FiShoppingBag, FiHeart, FiLogOut, FiMenu, FiX } from "react-icons/fi";
import logo from "@/components/assets/navbarlogo.png";

export default function Navbar({ onOpenCart }) {
  const location = useLocation();
  const { user: currentUser, wishlist: currentWishlist, quoteCart: currentCart, logout: handleLogout } = useInventory();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cartCount = currentCart.reduce((acc, curr) => acc + curr.quantity, 0);
  const wishlistCount = currentWishlist.length;

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-100 shadow-xs">
      <div className="bg-[#2874F0]/5 border-b border-slate-100 py-1.5 px-6 text-center flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
        <span className="text-[10px] font-bold text-slate-500 tracking-wide uppercase">
          Live Inventory Status: Fully Operational
        </span>
      </div>

      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="StockFlow Logo"
            className="h-16 md:h-20 w-auto object-contain bg-transparent max-w-[280px]"
          />
        </Link>

        <nav className="hidden xl:flex items-center gap-6">
          <Link
            to="/"
            className={`text-xs font-bold uppercase tracking-wider transition-colors ${isActive("/") ? "text-[#2874F0]" : "text-slate-600 hover:text-[#2874F0]"
              }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-xs font-bold uppercase tracking-wider transition-colors ${isActive("/about") ? "text-[#2874F0]" : "text-slate-600 hover:text-[#2874F0]"
              }`}
          >
            About Us
          </Link>
          <Link
            to="/features"
            className={`text-xs font-bold uppercase tracking-wider transition-colors ${isActive("/features") ? "text-[#2874F0]" : "text-slate-600 hover:text-[#2874F0]"
              }`}
          >
            Features
          </Link>
          <Link
            to="/modules"
            className={`text-xs font-bold uppercase tracking-wider transition-colors ${isActive("/modules") ? "text-[#2874F0]" : "text-slate-600 hover:text-[#2874F0]"
              }`}
          >
            Modules
          </Link>
          <Link
            to="/products"
            className={`text-xs font-bold uppercase tracking-wider transition-colors ${isActive("/products") ? "text-[#2874F0]" : "text-slate-600 hover:text-[#2874F0]"
              }`}
          >
            Live Catalog
          </Link>
          <Link
            to="/pricing"
            className={`text-xs font-bold uppercase tracking-wider transition-colors ${isActive("/pricing") ? "text-[#2874F0]" : "text-slate-600 hover:text-[#2874F0]"
              }`}
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className={`text-xs font-bold uppercase tracking-wider transition-colors ${isActive("/contact") ? "text-[#2874F0]" : "text-slate-600 hover:text-[#2874F0]"
              }`}
          >
            Contact Us
          </Link>
          <Link
            to="/blogs"
            className={`text-xs font-bold uppercase tracking-wider transition-colors ${isActive("/blogs") ? "text-[#2874F0]" : "text-slate-600 hover:text-[#2874F0]"
              }`}
          >
            Blogs
          </Link>
        </nav>

        <div className="flex items-center gap-4.5">
          {currentUser && (
            <Link
              to="/dashboard"
              className="relative p-2 rounded-full text-slate-500 hover:text-red-500 hover:bg-slate-50 transition-colors"
              title="Saved Items"
            >
              <FiHeart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1.5 right-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white ring-2 ring-white">
                  {wishlistCount}
                </span>
              )}
            </Link>
          )}

          {currentUser && (
            <button
              onClick={onOpenCart}
              className="relative p-2 rounded-full text-slate-500 hover:text-[#2874F0] hover:bg-slate-50 transition-colors cursor-pointer animate-pulse"
              title="Quote Request Basket"
            >
              <FiShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-1.5 right-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-[#2874F0] text-[9px] font-bold text-white ring-2 ring-white">
                  {cartCount}
                </span>
              )}
            </button>
          )}

          {currentUser ? (
            <div className="flex items-center gap-3.5 pl-2 border-l border-slate-100">
              <Link
                to="/dashboard"
                className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-[#2874F0] transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-[#2874F0]/10 text-[#2874F0] flex items-center justify-center text-xs font-bold border border-[#2874F0]/10">
                  {currentUser.name[0]}
                </div>
                <span className="max-w-[80px] truncate">{currentUser.name}</span>
              </Link>
              <button
                onClick={handleLogout}
                className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                title="Sign Out"
              >
                <FiLogOut className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="hidden sm:inline-flex items-center justify-center text-xs font-bold text-slate-600 hover:text-[#2874F0] transition-colors"
              >
                Sign In
              </Link>
              <a
                href="#demo-form"
                onClick={(e) => {
                  if (location.pathname !== "/") {
                    e.preventDefault();
                    window.location.href = "/#demo-form";
                  }
                }}
                className="px-5 py-2.5 bg-[#2874F0] hover:bg-[#2874F0]/90 text-white text-xs font-bold rounded-full shadow-md shadow-blue-500/10 hover:shadow-lg transition-all duration-300"
              >
                Book Demo
              </a>
            </div>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-500 hover:text-slate-700 xl:hidden focus:outline-none rounded-lg hover:bg-slate-50"
          >
            {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-100 bg-white px-6 py-6 space-y-4.5 shadow-xl text-left animate-slideDown">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-xs font-bold uppercase tracking-wider ${isActive("/") ? "text-[#2874F0]" : "text-slate-600"}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-xs font-bold uppercase tracking-wider ${isActive("/about") ? "text-[#2874F0]" : "text-slate-600"}`}
          >
            About Us
          </Link>
          <Link
            to="/features"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-xs font-bold uppercase tracking-wider ${isActive("/features") ? "text-[#2874F0]" : "text-slate-600"}`}
          >
            Features
          </Link>
          <Link
            to="/modules"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-xs font-bold uppercase tracking-wider ${isActive("/modules") ? "text-[#2874F0]" : "text-slate-600"}`}
          >
            Modules
          </Link>
          <Link
            to="/products"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-xs font-bold uppercase tracking-wider ${isActive("/products") ? "text-[#2874F0]" : "text-slate-600"}`}
          >
            Live Catalog
          </Link>
          <Link
            to="/pricing"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-xs font-bold uppercase tracking-wider ${isActive("/pricing") ? "text-[#2874F0]" : "text-slate-600"}`}
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-xs font-bold uppercase tracking-wider ${isActive("/contact") ? "text-[#2874F0]" : "text-slate-600"}`}
          >
            Contact Us
          </Link>
          <Link
            to="/blogs"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-xs font-bold uppercase tracking-wider ${isActive("/blogs") ? "text-[#2874F0]" : "text-slate-600"}`}
          >
            Blogs
          </Link>
          {!currentUser && (
            <div className="pt-4 border-t border-slate-100 flex gap-4">
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 text-center py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-600"
              >
                Sign In
              </Link>
              <a
                href="#demo-form"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (location.pathname !== "/") {
                    e.preventDefault();
                    window.location.href = "/#demo-form";
                  }
                }}
                className="flex-1 text-center py-2 bg-[#2874F0] hover:bg-[#2874F0]/90 rounded-xl text-xs font-bold text-white shadow-md shadow-blue-500/10 transition-all duration-300"
              >
                Book Demo
              </a>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
