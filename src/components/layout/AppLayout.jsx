"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useInventory } from "@/context/InventoryContext";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Toaster } from "react-hot-toast";

export default function AppLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useInventory();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const isAuthPage = pathname === "/login" || pathname === "/signup";

  useEffect(() => {
    // Basic auth check: if user is not present and it's not an auth page, redirect to /login
    const savedUser = localStorage.getItem("inventory_user");
    if (!savedUser && !isAuthPage) {
      router.push("/login");
    } else if (savedUser && isAuthPage) {
      router.push("/");
    }
    setLoading(false);
  }, [user, pathname, router, isAuthPage]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#F1F3F6]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 border-4 border-[#2874F0] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm font-semibold text-slate-500">Loading StockFlow ERP...</p>
        </div>
      </div>
    );
  }

  // Auth pages get clean full-screen layout
  if (isAuthPage) {
    return (
      <div className="min-h-screen bg-[#F1F3F6] text-[#212121]">
        {children}
        <Toaster position="top-right" />
      </div>
    );
  }

  // Dashboard & other main ERP views get sidebar & navbar
  return (
    <div className="min-h-screen bg-[#F1F3F6] text-[#212121]">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      {/* Main Content Area */}
      <div className="lg:pl-64 flex flex-col min-h-screen">
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <main className="flex-1 p-6 overflow-y-auto">
          <div className="w-full max-w-[1920px] mx-auto space-y-6">
            {children}
          </div>
        </main>

        {/* Footer */}
        <footer className="py-4 text-center text-xs text-slate-400 border-t border-slate-100 bg-white">
          &copy; {new Date().getFullYear()} StockFlow Systems. Built for Inventory Admin. All rights reserved.
        </footer>
      </div>

      <Toaster position="top-right" />
    </div>
  );
}
