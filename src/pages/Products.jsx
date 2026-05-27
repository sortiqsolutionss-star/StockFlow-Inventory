/**
 * StockFlow Systems - Premium Corporate Inventory Sourcing Portal
 * Author: MrAbhi2k3 (https://github.com/MrAbhi2k3)
 * Tagline: Elevating institutional logistics with micro-precise inventory controls.
 * Description: Catalog presentation offering a search query pipeline, safety stock level
 * labels, toggle wishlist saves, and an inline slide-out quote cart container.
 */

import React, { useState } from "react";
import { useInventory } from "@/context/InventoryContext";
import { FiSearch, FiHeart, FiShoppingBag, FiAlertCircle } from "react-icons/fi";

export default function Products() {
  const {
    products,
    wishlist,
    addToQuoteCart,
    toggleWishlist
  } = useInventory();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  const categories = ["All", ...new Set(products.map(p => p.category))];

  const getStockStatus = (stock) => {
    if (stock === 0) return "Out of Stock";
    if (stock <= 4) return "Low Stock";
    return "In Stock";
  };

  const filtered = products
    .filter(p => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.sku.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category === "All" || p.category === category;
      const matchStatus = status === "All" || getStockStatus(p.stock) === status;
      return matchSearch && matchCategory && matchStatus;
    })
    .sort((a, b) => {
      if (sortBy === "price") return a.price - b.price;
      return a.name.localeCompare(b.name);
    });

  return (
    <div className="relative space-y-8">
      <div className="text-left">
        <h1 className="text-2xl font-bold tracking-tight text-slate-800">Operational Stock Catalog</h1>
        <p className="text-sm text-slate-500">Search items, check real-time stock levels, and coordinate bulk quote requests.</p>
      </div>

      <div className="bg-white p-4.5 rounded-2xl border border-slate-100/80 shadow-xs grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
        <div className="relative md:col-span-2">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
            <FiSearch className="w-4 h-4" />
          </span>
          <input
            type="text"
            placeholder="Search by name, code, brand..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-10 pl-10 pr-4 text-xs text-slate-800 bg-[#F1F3F6] border border-transparent rounded-lg focus:outline-none focus:bg-white focus:border-[#2874F0]/30 transition-all font-medium"
          />
        </div>

        <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-2 rounded-lg border border-slate-100">
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Group</span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full text-xs font-bold text-slate-700 bg-transparent focus:outline-none border-none p-0 cursor-pointer"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat} {cat !== "All" ? "Group" : ""}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-2 rounded-lg border border-slate-100">
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Level</span>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full text-xs font-bold text-slate-700 bg-transparent focus:outline-none border-none p-0 cursor-pointer"
          >
            <option value="All">All Stock Levels</option>
            <option value="In Stock">In Stock</option>
            <option value="Low Stock">Low Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
        {filtered.length === 0 ? (
          <div className="col-span-full py-16 text-center text-slate-400">
            <FiAlertCircle className="w-12 h-12 mx-auto text-slate-300 mb-3" />
            <h3 className="font-bold text-sm text-slate-700">No Catalog Matches</h3>
            <p className="text-xs text-slate-400 mt-1">Try relaxing filters or adjusting search queries.</p>
          </div>
        ) : (
          filtered.map((prod) => {
            const inWishlist = wishlist.includes(prod.id);
            const isOut = prod.stock === 0;
            const isLow = prod.stock > 0 && prod.stock <= 4;

            return (
              <div key={prod.id} className="bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all group flex flex-col justify-between h-full relative">
                <button
                  onClick={() => toggleWishlist(prod.id)}
                  className={`absolute top-3 right-3 z-10 p-2.5 rounded-full backdrop-blur-md transition-all shadow-xs cursor-pointer ${inWishlist
                    ? "bg-red-50 text-red-500 hover:bg-red-100"
                    : "bg-white/90 text-slate-400 hover:text-red-500 hover:bg-white"
                    }`}
                >
                  <FiHeart className={`w-4 h-4 ${inWishlist ? "fill-red-500" : ""}`} />
                </button>

                <div className="relative h-44 bg-slate-50 overflow-hidden shrink-0">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full text-[9px] font-extrabold tracking-wider bg-slate-900/80 text-white backdrop-blur-xs uppercase">
                    {prod.category}
                  </span>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm line-clamp-1">{prod.name}</h4>
                    <p className="text-[10px] text-slate-400 font-mono mt-0.5">SKU: {prod.sku}</p>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">{prod.description}</p>
                  </div>

                  <div className="space-y-3.5 pt-3 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-extrabold text-[#2874F0]">${prod.price}</span>
                      <div className="flex flex-col items-end gap-0.5">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${isOut ? "bg-rose-50 text-rose-700 border-rose-200" :
                            isLow ? "bg-amber-50 text-amber-700 border-amber-200 animate-pulse" :
                              "bg-emerald-50 text-emerald-700 border-emerald-200"
                          }`}>
                          {isOut ? "Out of Stock" : isLow ? `Only ${prod.stock} Left!` : "In Stock"}
                        </span>
                      </div>
                    </div>

                    <button
                      disabled={isOut}
                      onClick={() => addToQuoteCart(prod, 1)}
                      className={`flex items-center justify-center gap-2 w-full h-9 rounded-lg text-xs font-bold transition-all cursor-pointer ${isOut
                        ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                        : "bg-[#2874F0]/10 hover:bg-[#2874F0] text-[#2874F0] hover:text-white"
                        }`}
                    >
                      <FiShoppingBag className="w-3.5 h-3.5" />
                      <span>Request Quote</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
