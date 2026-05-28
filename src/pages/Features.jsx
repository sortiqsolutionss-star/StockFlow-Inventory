/**
 * StockFlow Systems - Premium Corporate Inventory Sourcing Portal
 * Author: MrAbhi2k3 (https://github.com/MrAbhi2k3)
 * Tagline: Elevating institutional logistics with micro-precise inventory controls.
 * Description: Clean Features page layout importing static dataset catalogs and
 * coordinating selections between tab panels and deck presenters.
 */

import React, { useState } from "react";
import { featureDeck } from "@/data/featuresData";
import FeatureTab from "@/components/features/FeatureTab";
import FeatureVisualDeck from "@/components/features/FeatureVisualDeck";

export default function Features() {
  const [activeTab, setActiveTab] = useState("balances");
  const activeFeature = featureDeck.find(f => f.id === activeTab);

  const workflowSteps = {
    balances: [
      { step: "01", title: "Intake Scan", desc: "Warehouse receivers scan RFID codes at the loading dock instantly." },
      { step: "02", title: "Live Sync", desc: "Database ledger immediately synchronizes counts to international logs." },
      { step: "03", title: "Telemetry Update", desc: "Real-time stock level flags calculate active safety thresholds." }
    ],
    registry: [
      { step: "01", title: "Asset Intake", desc: "Log and tag new corporate assets with detailed catalog specs." },
      { step: "02", title: "Vault Allocation", desc: "Assign items to specific warehouse compartments or rack grids." },
      { step: "03", title: "Lifecycle Logs", desc: "Chronologically record all dispatches, moves, and audit details." }
    ],
    margins: [
      { step: "01", title: "Continuous Scan", desc: "System constantly evaluates stock levels against active limits." },
      { step: "02", title: "Alert Trigger", desc: "Triggers amber and red flags when inventory drops below bounds." },
      { step: "03", title: "Restock Orders", desc: "Instantly routes automatic restock notifications to buyer agents." }
    ],
    cart: [
      { step: "01", title: "Consolidate Demand", desc: "Compile product allocations and group target quantities into one basket." },
      { step: "02", title: "Append Remarks", desc: "Buyers append custom delivery specifications and timelines." },
      { step: "03", title: "Sourcing Request", desc: "Consolidated quotes are transmitted directly to pre-vetted vendors." }
    ],
    suppliers: [
      { step: "01", title: "Vendor Match", desc: "System targets matching pre-vetted distributors in the region." },
      { step: "02", title: "Dynamic Bidding", desc: "Vetted suppliers submit competitive pricing and delivery windows." },
      { step: "03", title: "SLA Evaluation", desc: "Evaluate response time, dispatch accuracy, and quality metrics." }
    ],
    ledger: [
      { step: "01", title: "Immutable Logging", desc: "Every transaction, quote change, and action is logged instantly." },
      { step: "02", title: "Security Hash Sign", desc: "Transaction details are stamped with unique audit keys." },
      { step: "03", title: "Compliance Review", desc: "Auditors pull system logs to ensure strict operational compliance." }
    ]
  };

  const activeSteps = workflowSteps[activeTab] || workflowSteps.balances;

  return (
    <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 py-10 space-y-16 text-left">
      <div className="space-y-3">
        <span className="text-[10px] font-bold text-[#2874F0] uppercase tracking-widest block">System Capabilities</span>
        <h1 className="text-3xl font-extrabold text-slate-800">Advanced Sourcing Modules</h1>
        <p className="text-sm text-slate-500 max-w-xl">
          Discover how StockFlow simplifies supply chain coordination, catalog distribution, and multi-department corporate allocations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-5 flex flex-col gap-3 w-full h-full justify-between">
          <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-2 mb-1">
            Select Sourcing Capability
          </span>
          <div className="space-y-3 flex-1 flex flex-col justify-between">
            {featureDeck.map((feat) => (
              <FeatureTab
                key={feat.id}
                feat={feat}
                isSelected={feat.id === activeTab}
                onClick={() => setActiveTab(feat.id)}
              />
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col h-full justify-end">
          <div className="h-full flex flex-col justify-between flex-1 mt-6 lg:mt-0">
            <FeatureVisualDeck feat={activeFeature} />
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100 pt-16">
        <div className="space-y-8">
          <div>
            <span className="text-[9px] font-bold text-[#2874F0] uppercase tracking-widest block">STEP-BY-STEP WORKFLOW</span>
            <h2 className="text-xl font-bold text-slate-800 mt-1">Operational Lifecycle Steps</h2>
            <p className="text-xs text-slate-400 font-medium max-w-lg mt-0.5">
              Review the exact step-by-step pipeline through which this StockFlow intelligence module optimizes logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activeSteps.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md hover:border-slate-200 transition-all duration-300">
                <div className="absolute top-0 right-0 p-4 text-3xl font-extrabold text-slate-100/40 select-none group-hover:scale-110 group-hover:text-blue-500/5 transition-all">
                  {item.step}
                </div>
                <span className="text-[9px] font-bold text-[#2874F0] uppercase tracking-wider block">STAGE {item.step}</span>
                <h4 className="text-sm font-bold text-slate-800 mt-1.5">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed mt-2.5 font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
