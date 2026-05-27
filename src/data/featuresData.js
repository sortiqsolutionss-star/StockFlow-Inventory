/**
 * StockFlow Systems - Premium Corporate Inventory Sourcing Portal
 * Author: MrAbhi2k3 (https://github.com/MrAbhi2k3)
 * Tagline: Elevating institutional logistics with micro-precise inventory controls.
 * Description: Separated features catalog data tracking stock engine precision,
 * safety warning limits, quote dispatches, and compliance audit guidelines.
 */

import { FiActivity, FiLayers, FiShield, FiServer, FiUser, FiBox } from "react-icons/fi";

export const featureDeck = [
  {
    id: "balances",
    title: "Stock Balances",
    subtitle: "Stock Balance Tickers",
    icon: FiActivity,
    theme: "bg-blue-50 text-[#2874F0]",
    description: "Every product detail, stock balance, and category distribution is refreshed automatically. Sourcing assistants see safety flags without manual re-querying, maximizing procurement allocation velocity across active catalog levels.",
    metricValue: "99.98%",
    metricLabel: "Inventory Precision",
    badge: "Live Stock Counts",
    detailList: [
      "Real-time updates on active catalog levels",
      "SKU Identifier Lookup: Fetch codes and suppliers",
      "Category Sorting: Group Electronics, Apparel, Furniture",
      "Batch Expirations: Track laboratory reagent and supply dates",
      "Logistics Core integration with automated status syncs",
      "Dynamic allocation tickers computed instantly"
    ]
  },
  {
    id: "registry",
    title: "Asset Registry",
    subtitle: "Enterprise Database",
    icon: FiBox,
    theme: "bg-indigo-50 text-indigo-600",
    description: "Fully indexed database of every corporate asset, computer router, dining seat, laboratory appliance, and warehouse rack. Features real-time tracking, barcode logging, and dynamic status updates.",
    metricValue: "12,450 Units",
    metricLabel: "Indexed Assets",
    badge: "Operational Live",
    detailList: [
      "Electronics Tracking: Laptops, screens, and routers",
      "Laboratory Apparatus: Reagents and delicate equipment",
      "Office Furniture: Log desks, chairs, and lecterns",
      "Fulfillment History Logs: Lifecycle traces for units",
      "Barcode scanning integration ready",
      "Warehouse partition assignment records"
    ]
  },
  {
    id: "margins",
    title: "Safety Margins",
    subtitle: "Low Stock Warning Alarm",
    icon: FiServer,
    theme: "bg-amber-50 text-amber-600",
    description: "Ensure enterprise departments remain fully stocked. Dynamic warnings trigger automatically when quantities fall to safety stock thresholds, signaling restock actions immediately.",
    metricValue: "4 Units",
    metricLabel: "Warning Threshold",
    badge: "Auto Warnings",
    detailList: [
      "Live unread bell counts in system header",
      "Reconciliation control panel adjustments",
      "Safety thresholds configurable by stock item",
      "Automatic restock procurement notifications",
      "Buffer calculations based on historical demand",
      "Visual indicators for rapid reconciliation actions"
    ]
  },
  {
    id: "cart",
    title: "Sourcing Cart",
    subtitle: "Centralized Quote Compile Cart",
    icon: FiLayers,
    theme: "bg-emerald-50 text-emerald-600",
    description: "Stage bulk quantities inside a centralized user basket. Perform safety stock safety tests locally, compile remarks, and dispatch quote inquiries to logistics hubs in one unified click.",
    metricValue: "< 1.5s",
    metricLabel: "Dispatch Velocity",
    badge: "Smart Sourcing",
    detailList: [
      "Custom operators consignment remarks",
      "Real-time safety count indicators",
      "Consolidated multi-SKU dispatches",
      "Draft quote compiling for validation",
      "Automatic supplier matching filters",
      "Immediate tracking token generation"
    ]
  },
  {
    id: "suppliers",
    title: "Suppliers Hub",
    subtitle: "Vetted Merchant Network",
    icon: FiUser,
    theme: "bg-rose-50 text-rose-600",
    description: "Connect with verified manufacturing networks, contract partners, and supply chains. Monitor supplier response latencies, pricing benchmarks, and order fulfillment accuracy from a unified portal.",
    metricValue: "1,200+",
    metricLabel: "Active Partners",
    badge: "Fulfillment Keys",
    detailList: [
      "Certified Merchants: Pre-vetted corporate vendors",
      "Quote Comparisons: Evaluate price and latency",
      "Supplier Performance: Track dispatch accuracy",
      "Direct message integration for specifications",
      "Service-Level-Agreement (SLA) status trackers",
      "Alternate source suggestion for high-scarcity items"
    ]
  },
  {
    id: "ledger",
    title: "Compliance Log",
    subtitle: "Fulfillment & Audit Ledger",
    icon: FiShield,
    theme: "bg-purple-50 text-purple-600",
    description: "Every single dispatched quote request, status shift, and supplier action is recorded permanently. Safeguard corporate accountability with detailed operational reports.",
    metricValue: "100%",
    metricLabel: "Audit Trailing",
    badge: "Traceability Standard",
    detailList: [
      "Unique identification tracking keys",
      "Operator department logs",
      "Dispatch history logs in Dashboard",
      "Immutable timestamped transaction logs",
      "Regulatory alignment status checks",
      "Exportable CSV reports for compliance reviews"
    ]
  }
];
