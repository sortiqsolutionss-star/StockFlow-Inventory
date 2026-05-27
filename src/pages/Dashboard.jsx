/**
 * StockFlow Systems - Premium Corporate Inventory Sourcing Portal
 * Author: MrAbhi2k3 (https://github.com/MrAbhi2k3)
 * Tagline: Elevating institutional logistics with micro-precise inventory controls.
 * Description: Client-facing sourcing dashboard compiling wishlist grids, dynamic spend summaries,
 * and historical dispatch ledgers associated with procurement keys.
 */

import React from "react";
import { useInventory } from "@/context/InventoryContext";
import { 
  FiHeart, FiFileText, FiStar, FiShoppingBag, 
  FiCheckCircle, FiClock, FiBox, FiTrash2, FiUser 
} from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { 
    user, 
    wishlist, 
    products, 
    quoteRequests, 
    toggleWishlist, 
    addToQuoteCart 
  } = useInventory();

  const wishlistedProducts = products.filter(p => wishlist.includes(p.id));
  const activeRequestsCount = quoteRequests.filter(q => q.status === "Pending Review").length;
  const approvedRequestsCount = quoteRequests.filter(q => q.status === "Approved").length;
  const totalSpend = quoteRequests
    .filter(q => q.status === "Approved")
    .reduce((acc, curr) => acc + curr.total, 0);

  return (
    <div className="space-y-8">
      <div className="bg-white p-6.5 rounded-2xl border border-slate-100/80 shadow-xs flex flex-col sm:flex-row items-center gap-5 justify-between">
        <div className="flex items-center gap-4 text-left">
          <div className="w-14 h-14 rounded-full bg-[#2874F0]/10 text-[#2874F0] font-bold text-lg flex items-center justify-center border border-[#2874F0]/10">
            {user ? user.name.split(" ").map(n => n[0]).join("") : "U"}
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-800">{user ? user.name : "Registered Buyer"}</h2>
            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide mt-0.5">{user ? user.role : "Sourcing Terminal"}</p>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-100 rounded-xl px-5 py-3 text-center sm:text-right shrink-0">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Approved Allocation</span>
          <span className="block text-lg font-extrabold text-emerald-600 mt-0.5">${totalSpend.toLocaleString()}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-left">
        <div className="bg-white p-5 rounded-2xl border border-slate-100/80 shadow-xs flex items-center gap-4">
          <div className="p-3 bg-blue-50 text-[#2874F0] rounded-xl">
            <FiShoppingBag className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800">{quoteRequests.length}</h3>
            <p className="text-xs text-slate-400 font-semibold uppercase mt-0.5">Total Submissions</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100/80 shadow-xs flex items-center gap-4">
          <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
            <FiClock className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800">{activeRequestsCount}</h3>
            <p className="text-xs text-slate-400 font-semibold uppercase mt-0.5">Pending Review</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100/80 shadow-xs flex items-center gap-4">
          <div className="p-3 bg-green-50 text-green-600 rounded-xl">
            <FiCheckCircle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800">{approvedRequestsCount}</h3>
            <p className="text-xs text-slate-400 font-semibold uppercase mt-0.5">Approved Allocations</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="bg-white p-5 rounded-2xl border border-slate-100/80 shadow-xs lg:col-span-2 space-y-5 overflow-hidden">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <FiFileText className="w-5 h-5 text-[#2874F0]" />
            <h3 className="font-bold text-slate-800 text-sm">Quote Dispatch Log</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <th className="pb-3">Request ID</th>
                  <th className="pb-3">Dispatch Date</th>
                  <th className="pb-3">Consignment details</th>
                  <th className="pb-3 text-right">Est. Value</th>
                  <th className="pb-3 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 text-xs">
                {quoteRequests.map((req) => (
                  <tr key={req.id} className="hover:bg-slate-50/30 transition-colors">
                    <td className="py-3 font-semibold text-slate-700">{req.id}</td>
                    <td className="py-3 text-slate-500">{req.date}</td>
                    <td className="py-3 max-w-[200px]">
                      <div className="truncate text-slate-800 font-bold" title={req.items.map(i => `${i.name} (x${i.qty})`).join(", ")}>
                        {req.items.map(i => `${i.name} (x${i.qty})`).join(", ")}
                      </div>
                    </td>
                    <td className="py-3 text-right font-extrabold text-[#2874F0]">${req.total.toLocaleString()}</td>
                    <td className="py-3 text-center">
                      <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold inline-block ${
                        req.status === "Approved" ? "bg-green-50 text-green-600" : "bg-amber-50 text-amber-600"
                      }`}>
                        {req.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100/80 shadow-xs space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <FiHeart className="w-5 h-5 text-red-500 fill-red-500" />
            <h3 className="font-bold text-slate-800 text-sm">Saved Sourcing Items</h3>
          </div>

          <div className="space-y-4 max-h-[350px] overflow-y-auto pr-1">
            {wishlistedProducts.length === 0 ? (
              <div className="py-12 text-center text-xs text-slate-400 space-y-2">
                <FiBox className="w-8 h-8 mx-auto text-slate-300" />
                <p className="font-semibold text-slate-500">No bookmarked items</p>
                <p className="text-slate-400 text-[11px]">Explore the <Link to="/products" className="text-[#2874F0] hover:underline font-bold">catalog</Link> to save products.</p>
              </div>
            ) : (
              wishlistedProducts.map((prod) => (
                <div key={prod.id} className="p-3 border border-slate-100 rounded-xl bg-slate-50/50 flex items-center gap-3.5 justify-between hover:bg-slate-50 transition-colors">
                  <img src={prod.image} alt={prod.name} className="w-12 h-12 rounded-lg object-cover" />
                  
                  <div className="flex-1 min-w-0 text-left">
                    <h4 className="text-xs font-bold text-slate-800 truncate">{prod.name}</h4>
                    <span className="text-[10px] font-extrabold text-[#2874F0] block mt-0.5">${prod.price}</span>
                  </div>

                  <div className="flex flex-col gap-1 shrink-0">
                    <button
                      onClick={() => addToQuoteCart(prod, 1)}
                      className="p-1.5 text-xs font-bold bg-[#2874F0] hover:bg-[#2874F0]/90 text-white rounded-lg transition-colors cursor-pointer"
                      title="Request Quote"
                    >
                      <FiShoppingBag className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => toggleWishlist(prod.id)}
                      className="p-1.5 text-xs font-bold text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      title="Remove Bookmark"
                    >
                      <FiTrash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
