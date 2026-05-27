/**
 * StockFlow Systems - Premium Corporate Inventory Sourcing Portal
 * Author: MrAbhi2k3 (https://github.com/MrAbhi2k3)
 * Tagline: Elevating institutional logistics with micro-precise inventory controls.
 * Description: Reusable feature layout details panel coordinating metric views,
 * detail list maps, and visual badge elements with zero code comments.
 */

import React from "react";
import { FiCpu, FiTrendingUp } from "react-icons/fi";

export default function FeatureVisualDeck({ feat }) {
  const IconComponent = feat.icon;

  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl h-full min-h-[520px] flex flex-col justify-between transition-all duration-500 ease-in-out relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none"></div>

      <div className="space-y-6 animate-fade-in duration-500 flex-1 flex flex-col justify-between">
        <div className="space-y-6">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <span className="text-[9px] font-bold bg-[#2874F0]/10 text-[#2874F0] border border-[#2874F0]/10 px-3 py-1 rounded-full uppercase tracking-wider">
              {feat.badge}
            </span>
            <div className="flex items-center gap-2">
              <FiCpu className="w-4 h-4 text-[#2874F0] animate-spin-slow" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Inventory Standard</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-2xl ${feat.theme}`}>
              <IconComponent className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-slate-800">{feat.title}</h2>
              <p className="text-xs text-slate-400 font-semibold uppercase mt-0.5">{feat.subtitle}</p>
            </div>
          </div>

          <p className="text-xs leading-relaxed text-slate-500 font-medium">
            {feat.description}
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-slate-600 bg-slate-50 p-5 rounded-2xl border border-slate-100/50 mt-4">
          {feat.detailList.map((detail, index) => (
            <li key={index} className="flex items-center gap-2.5">
              <FiTrendingUp className="text-[#2874F0] shrink-0 w-4 h-4" />
              <span className="font-semibold text-slate-700">{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between pt-6 border-t border-slate-50 mt-6 flex-wrap gap-4 shrink-0">
        <div className="text-left">
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Operational Metric</span>
          <span className="text-2xl font-extrabold text-slate-800 block mt-0.5">{feat.metricValue}</span>
        </div>
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
          {feat.metricLabel}
        </span>
      </div>
    </div>
  );
}
