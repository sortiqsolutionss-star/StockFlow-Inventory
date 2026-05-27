"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useInventory } from "@/context/InventoryContext";
import { 
  FiGrid, FiBox, FiFolder, FiLayers, FiShoppingBag, FiTrendingUp, 
  FiFileText, FiTruck, FiUsers, FiUserCheck, FiPieChart, 
  FiDollarSign, FiBell, FiSettings, FiLogOut, FiMenu, FiX 
} from "react-icons/fi";

const sidebarLinks = [
  { name: "Dashboard", path: "/", icon: FiGrid, active: true },
  { name: "Products", path: "/products", icon: FiBox, active: true },
  { name: "Inventory", path: "/inventory", icon: FiLayers, active: true },
  { name: "Categories", path: "#", icon: FiFolder, active: false },
  { name: "Purchases", path: "#", icon: FiShoppingBag, active: false },
  { name: "Sales", path: "#", icon: FiTrendingUp, active: false },
  { name: "Orders", path: "#", icon: FiFileText, active: false },
  { name: "Suppliers", path: "#", icon: FiTruck, active: false },
  { name: "Customers", path: "#", icon: FiUsers, active: false },
  { name: "Staff", path: "#", icon: FiUserCheck, active: false },
  { name: "Reports", path: "#", icon: FiPieChart, active: false },
  { name: "Invoices", path: "#", icon: FiDollarSign, active: false },
  { name: "Notifications", path: "#", icon: FiBell, active: false },
  { name: "Settings", path: "#", icon: FiSettings, active: false },
];

export default function Sidebar({ isOpen, toggleSidebar }) {
  const pathname = usePathname();
  const { logout, user } = useInventory();

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs lg:hidden transition-opacity duration-300"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={`fixed top-0 bottom-0 left-0 z-50 flex flex-col w-64 bg-white border-r border-slate-100 shadow-xl lg:shadow-xs transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Brand / Logo */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-slate-100 bg-[#2874F0]/5">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#2874F0] text-white shadow-md shadow-blue-500/30">
              <FiBox className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-slate-800">
                Stock<span className="text-[#2874F0]">Flow</span>
              </span>
              <span className="block text-[10px] text-slate-400 font-medium tracking-wider uppercase">ERP Dashboard</span>
            </div>
          </div>
          <button 
            className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-50 lg:hidden"
            onClick={toggleSidebar}
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* User Card */}
        {user && (
          <div className="p-4 mx-4 my-4 bg-slate-50 border border-slate-100/60 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#2874F0] text-white font-semibold text-sm flex items-center justify-center shadow-inner">
                {user.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-800 truncate">{user.name}</p>
                <p className="text-xs text-slate-400 truncate">{user.role}</p>
              </div>
            </div>
          </div>
        )}

        {/* Links List */}
        <nav className="flex-1 px-4 py-2 overflow-y-auto space-y-1 scrollbar-thin scrollbar-thumb-slate-200">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive = link.active && (
              link.path === "/" ? pathname === "/" : pathname.startsWith(link.path)
            );
            
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`flex items-center gap-3.5 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group ${
                  isActive 
                    ? "bg-[#2874F0] text-white shadow-lg shadow-blue-500/20" 
                    : link.active
                      ? "text-slate-600 hover:bg-slate-50 hover:text-[#2874F0]" 
                      : "text-slate-400 hover:bg-slate-50/50 hover:text-slate-600 cursor-not-allowed"
                }`}
                onClick={() => {
                  if (!link.active) {
                    alert("This module is locked in the frontend demo!");
                  } else {
                    if (window.innerWidth < 1024) toggleSidebar();
                  }
                }}
              >
                <Icon className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                  isActive ? "scale-110" : "group-hover:scale-110"
                }`} />
                <span className="flex-1">{link.name}</span>
                {!link.active && (
                  <span className="text-[10px] bg-slate-100 text-slate-400 px-1.5 py-0.5 rounded font-normal uppercase">
                    ERP
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Logout Section */}
        <div className="p-4 border-t border-slate-100">
          <button
            onClick={logout}
            className="flex items-center gap-3.5 w-full px-4 py-3 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 transition-all duration-200 group"
          >
            <FiLogOut className="w-5 h-5 shrink-0 group-hover:-translate-x-1 transition-transform" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
