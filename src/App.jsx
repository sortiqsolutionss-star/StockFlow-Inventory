/**
 * StockFlow Systems - Premium Corporate Inventory Sourcing Portal
 * Author: MrAbhi2k3 (https://github.com/MrAbhi2k3)
 * Tagline: Elevating institutional logistics with micro-precise inventory controls.
 * Description: Core App container managing router state, notification alerts, and context mappings.
 */

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { InventoryProvider, useInventory } from "@/context/InventoryContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InteractiveBubbles from "@/components/layout/InteractiveBubbles";
import Home from "@/pages/Home";
import Features from "@/pages/Features";
import About from "@/pages/About";
import Products from "@/pages/Products";
import Pricing from "@/pages/Pricing";
import Contact from "@/pages/Contact";
import Dashboard from "@/pages/Dashboard";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Modules from "@/pages/Modules";
import QuoteCartDrawer from "@/components/layout/QuoteCartDrawer";
import { Toaster } from "react-hot-toast";

function ProtectedRoute({ children }) {
  const { user } = useInventory();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function MainAppLayout() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <InteractiveBubbles />
      <QuoteCartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <Toaster position="top-right" toastOptions={{ style: { fontSize: "12px", fontWeight: "600" } }} />

      <Navbar onOpenCart={() => setCartOpen(true)} />

      <main className="flex-grow max-w-7xl w-full mx-auto px-6 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <InventoryProvider>
      <Router>
        <MainAppLayout />
      </Router>
    </InventoryProvider>
  );
}
