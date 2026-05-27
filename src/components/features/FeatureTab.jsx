/**
 * StockFlow Systems - Premium Inventory Inventory Sourcing Portal
 * Author: MrAbhi2k3 (https://github.com/MrAbhi2k3)
 * Tagline: Elevating institutional logistics with micro-precise inventory controls.
 * Description: Reusable feature deck tab selector rendering outlines, icons,
 * and animated chevrons in a comment-free React architecture.
 */

import React from "react";
import { FiChevronRight } from "react-icons/fi";

export default function FeatureTab({ feat, isSelected, onClick }) {
  const FeatIcon = feat.icon;

  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between p-4.5 rounded-2xl border text-left transition-all duration-300 group cursor-pointer ${isSelected
          ? "bg-white border-[#2874F0] shadow-md translate-x-1"
          : "bg-white/50 border-slate-100 hover:border-slate-200 hover:bg-white"
        }`}
    >
      <div className="flex items-center gap-4 min-w-0">
        <div className={`p-2.5 rounded-xl shrink-0 ${feat.theme} ${isSelected ? "scale-110" : "group-hover:scale-110"
          } transition-transform`}>
          <FeatIcon className="w-5 h-5" />
        </div>
        <div className="min-w-0">
          <h4 className="text-xs font-bold text-slate-800 truncate">{feat.title}</h4>
          <p className="text-[10px] text-slate-400 font-semibold truncate mt-0.5">{feat.subtitle}</p>
        </div>
      </div>
      <FiChevronRight className={`w-4 h-4 text-slate-400 transition-transform ${isSelected ? "translate-x-1 text-[#2874F0]" : "group-hover:translate-x-1"
        }`} />
    </button>
  );
}
