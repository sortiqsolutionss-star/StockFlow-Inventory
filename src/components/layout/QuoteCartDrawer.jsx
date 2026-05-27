/**
 * StockFlow Systems - Premium Corporate Inventory Sourcing Portal
 * Author: MrAbhi2k3 (https://github.com/MrAbhi2k3)
 * Tagline: Elevating institutional logistics with micro-precise inventory controls.
 * Description: Global Slide-over Basket container managing bulk quantity adjustments,
 * custom operator delivery remarks, and instant dispatch submits.
 */

import React, { useState } from "react";
import { useInventory } from "@/context/InventoryContext";
import { FiShoppingBag, FiX, FiMinus, FiPlus, FiTrash2, FiCheckCircle } from "react-icons/fi";

export default function QuoteCartDrawer({ isOpen, onClose }) {
  const { 
    quoteCart, 
    updateQuoteQuantity, 
    removeFromQuoteCart, 
    submitQuoteRequest 
  } = useInventory();
  
  const [notes, setNotes] = useState("");

  if (!isOpen) return null;

  const handleQtyAdjust = (productId, currentQty, delta, maxStock) => {
    const nextQty = currentQty + delta;
    if (nextQty > maxStock) {
      alert(`Only ${maxStock} units currently available in stock!`);
      return;
    }
    if (nextQty < 1) return;
    updateQuoteQuantity(productId, nextQty);
  };

  const handleSubmitRequest = (e) => {
    e.preventDefault();
    submitQuoteRequest(notes);
    setNotes("");
    onClose();
  };

  const cartTotal = quoteCart.reduce((acc, curr) => acc + (curr.product.price * curr.quantity), 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden text-left">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity" onClick={onClose} />
      
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-white shadow-2xl border-l border-slate-100 flex flex-col h-full overflow-hidden animate-slideLeft">
          
          <div className="px-6 py-5 bg-[#2874F0] text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FiShoppingBag className="w-5 h-5" />
              <h3 className="font-bold text-sm">Quote Request Basket</h3>
            </div>
            <button onClick={onClose} className="p-1 rounded-md hover:bg-white/10 text-white cursor-pointer">
              <FiX className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {quoteCart.length === 0 ? (
              <div className="py-20 text-center text-slate-400 space-y-2">
                <FiShoppingBag className="w-10 h-10 mx-auto text-slate-300 mb-1" />
                <p className="text-sm font-semibold text-slate-600">Your basket is empty</p>
                <p className="text-xs text-slate-400">Add catalog items to compile quote requests.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {quoteCart.map((item) => (
                  <div key={item.product.id} className="p-3 border border-slate-100 rounded-xl bg-slate-50/50 flex gap-3 items-center justify-between">
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs font-bold text-slate-800 truncate">{item.product.name}</h4>
                      <p className="text-[10px] text-slate-400 font-mono mt-0.5">Price: ${item.product.price} / unit</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleQtyAdjust(item.product.id, item.quantity, -1, item.product.stock)}
                        className="p-1 bg-white border border-slate-200 rounded text-slate-500 hover:bg-slate-50 cursor-pointer"
                      >
                        <FiMinus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-slate-700 w-5 text-center">{item.quantity}</span>
                      <button
                        onClick={() => handleQtyAdjust(item.product.id, item.quantity, 1, item.product.stock)}
                        className="p-1 bg-white border border-slate-200 rounded text-slate-500 hover:bg-slate-50 cursor-pointer"
                      >
                        <FiPlus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromQuoteCart(item.product.id)}
                      className="p-1.5 text-slate-400 hover:text-red-500 rounded-lg hover:bg-slate-100 ml-1 cursor-pointer"
                    >
                      <FiTrash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500">Estimated Total Value</span>
                  <span className="text-base font-extrabold text-[#2874F0]">${cartTotal.toLocaleString()}</span>
                </div>

                <div className="pt-2">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1.5">Consignment Notes / Instructions</label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Specify target delivery timeline, custom specifications..."
                    rows="3"
                    className="w-full p-3 text-xs text-slate-800 bg-[#F1F3F6] border border-transparent rounded-lg focus:outline-none focus:bg-white focus:border-[#2874F0]/30 transition-all font-medium"
                  ></textarea>
                </div>
              </div>
            )}
          </div>

          {quoteCart.length > 0 && (
            <div className="p-6 border-t border-slate-100 bg-slate-50">
              <button
                onClick={handleSubmitRequest}
                className="flex items-center justify-center gap-2 w-full h-11 bg-[#2874F0] hover:bg-[#2874F0]/95 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all cursor-pointer"
              >
                <FiCheckCircle className="w-5 h-5" />
                <span>Submit Quote Request</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
