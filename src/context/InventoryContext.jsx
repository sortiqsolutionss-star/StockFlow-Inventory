/**
 * StockFlow Systems - Premium Corporate Inventory Sourcing Portal
 * Author: MrAbhi2k3 (https://github.com/MrAbhi2k3)
 * Tagline: Elevating institutional logistics with micro-precise inventory controls.
 * Description: Client-side reactive database context simulating authentication,
 * products listings, bookmarked wishlists, and quote basket transactions.
 */

import React, { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const InventoryContext = createContext();

const initialProducts = [
  { id: 1, name: "iPhone 15 Pro Max", sku: "IPH15PM-256-BLU", category: "Electronics", price: 1199, stock: 15, supplier: "Apple Logistics", description: "Titanium design, A17 Pro chip, custom Action button, and a powerful 3x or 5x Telephoto camera.", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&auto=format&fit=crop&q=80" },
  { id: 2, name: "MacBook Air M3", sku: "MACAIRM3-512-SLV", category: "Electronics", price: 1299, stock: 8, supplier: "Apple Logistics", description: "Supercharged by the next-generation M3 chip, with up to 18 hours of battery life and a stunning Liquid Retina display.", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80" },
  { id: 3, name: "Sony WH-1000XM5", sku: "SONY-XM5-BLK", category: "Electronics", price: 349, stock: 3, supplier: "Sony Authorized Dist.", description: "Industry-leading noise cancellation, exceptional sound quality, and crystal-clear hands-free calling.", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80" },
  { id: 4, name: "Men's Slim Fit Jeans", sku: "GAP-SFJ-32", category: "Apparel", price: 49, stock: 50, supplier: "Global Apparel Group", description: "Classic slim-fit style with comfortable stretch denim, perfect for everyday casual wear.", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&auto=format&fit=crop&q=80" },
  { id: 5, name: "Non-Stick Cookware Set", sku: "TEF-NSC-10P", category: "Home & Kitchen", price: 120, stock: 14, supplier: "Tefal Home Products", description: "10-piece dishwasher safe set with durable non-stick coating and Thermo-Spot heat indicators.", image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80" },
  { id: 6, name: "Ergonomic Office Chair", sku: "STE-EOC-GRY", category: "Office", price: 299, stock: 0, supplier: "Steelcase Distributor", description: "Fully adjustable lumbar support, 3D armrests, and high-density mesh back for complete comfort.", image: "https://images.unsplash.com/photo-1580481072645-022f9a6dbf27?w=600&auto=format&fit=crop&q=80" },
  { id: 7, name: "Wireless Charging Pad", sku: "BEL-WCP-15W", category: "Electronics", price: 39, stock: 35, supplier: "Belkin Sourcing", description: "15W fast wireless charging for Qi-enabled smartphones, complete with dual-color LED indicators.", image: "https://images.unsplash.com/photo-1591290619618-904f6dd935e3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 8, name: "Running Sneakers Alpha", sku: "NKE-RSA-10", category: "Apparel", price: 110, stock: 4, supplier: "Nike Logistics Hub", description: "Breathable mesh upper with high-rebound cushioning foam to maximize comfort during runs.", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80" },
  { id: 9, name: "Dell UltraSharp 32\" Monitor", sku: "DELL-U32-4K", category: "Electronics", price: 899, stock: 12, supplier: "Dell Commercial Dist.", description: "4K USB-C hub monitor featuring outstanding color coverage, built-in dual speakers, and height adjustability.", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop&q=80" },
  { id: 10, name: "Logistics Label Printer", sku: "ZEB-LP-420D", category: "Office", price: 249, stock: 20, supplier: "Zebra Sourcing", description: "Professional thermal label printer with rapid print speeds, robust desktop shell, and network compatibility.", image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=600&auto=format&fit=crop&q=80" },
  { id: 11, name: "Steel Utility Storage Rack", sku: "STL-USR-5T", category: "Office", price: 159, stock: 6, supplier: "Global Industrial Corp", description: "Heavy-duty 5-tier storage unit with boltless assembly and wire shelving holds up to 4000 lbs total capacity.", image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=600&auto=format&fit=crop&q=80" },
  { id: 12, name: "Premium Leather Boardroom Chair", sku: "STE-PLB-BLK", category: "Office", price: 549, stock: 2, supplier: "Steelcase Distributor", description: "Premium executive leather chair featuring high-backed support, polished aluminum base, and intuitive tilt controls.", image: "https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=600&auto=format&fit=crop&q=80" },
  { id: 13, name: "RFID Handheld Scanner Elite", sku: "HON-RSE-90", category: "Electronics", price: 799, stock: 18, supplier: "Honeywell Logistics", description: "Enterprise-grade smart handheld scanner featuring rapid RFID decoding, custom trigger controls, and drop-proof chassis.", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&auto=format&fit=crop&q=80" },
  { id: 14, name: "Automated Barcode Terminal", sku: "ZEB-ABT-77", category: "Office", price: 1150, stock: 5, supplier: "Zebra Sourcing", description: "Fixed industrial barcode scanning terminal with multi-camera alignment and automated inventory database dispatch.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80" },
  { id: 15, name: "Samsung Galaxy S25 Ultra", sku: "SMS25U-512-BLK", category: "Electronics", price: 1399, stock: 10, supplier: "Samsung Distribution", description: "Flagship Android smartphone with AI-powered camera system, Snapdragon chipset, and ultra-bright AMOLED display.", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80" },
  { id: 16, name: "Gaming Mechanical Keyboard", sku: "LOG-GMK-RGB", category: "Electronics", price: 129, stock: 22, supplier: "Logitech Gaming", description: "RGB mechanical gaming keyboard with low-latency switches and programmable macro controls.", image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=600&auto=format&fit=crop&q=80" },
  { id: 17, name: "4K Action Camera Pro", sku: "GPR-4K-AC", category: "Electronics", price: 449, stock: 9, supplier: "GoPro Supply Chain", description: "Waterproof 4K action camera with stabilization, voice control, and ultra-wide capture lens.", image: "https://images.unsplash.com/photo-1772650713936-c0a588419086?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 18, name: "Smart Fitness Watch X", sku: "FIT-WTX-BLK", category: "Electronics", price: 199, stock: 27, supplier: "FitTech Industries", description: "Advanced health tracking smartwatch with AMOLED screen, heart-rate monitoring, and GPS support.", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80" },
  { id: 19, name: "Portable Bluetooth Speaker", sku: "JBL-PBS-RED", category: "Electronics", price: 89, stock: 40, supplier: "JBL Audio Hub", description: "Compact waterproof Bluetooth speaker delivering deep bass and 12 hours of battery life.", image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600&auto=format&fit=crop&q=80" },
  { id: 20, name: "Minimalist Wooden Desk", sku: "IKEA-MWD-OAK", category: "Office", price: 279, stock: 11, supplier: "IKEA Workspace", description: "Modern oak-finish office desk with cable management and spacious workstation layout.", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&auto=format&fit=crop&q=80" },
  { id: 21, name: "Adjustable Laptop Stand", sku: "NEX-ALS-SLV", category: "Office", price: 59, stock: 33, supplier: "NextGen Office Gear", description: "Foldable aluminum laptop stand with ergonomic viewing angles and anti-slip padding.", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80" },
  { id: 22, name: "Ceramic Dinner Set", sku: "HNK-CDS-16", category: "Home & Kitchen", price: 149, stock: 19, supplier: "HomeNest Kitchenware", description: "16-piece premium ceramic dinnerware set featuring scratch-resistant glossy finish.", image: "https://images.unsplash.com/photo-1603190287605-e6ade32fa852?w=600&auto=format&fit=crop&q=80" },
  { id: 23, name: "Air Fryer XL", sku: "PHL-AFXL-7L", category: "Home & Kitchen", price: 199, stock: 16, supplier: "Philips Appliances", description: "7-liter digital air fryer with rapid air technology and preset cooking programs.", image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=600&auto=format&fit=crop&q=80" },
  { id: 24, name: "Luxury Bedding Set", sku: "LUX-BDS-KNG", category: "Home & Kitchen", price: 179, stock: 13, supplier: "Luxury Linen Co.", description: "Soft breathable king-size bedding set with premium microfiber fabric and elegant stitching.", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&auto=format&fit=crop&q=80" },
  { id: 25, name: "Men's Casual Hoodie", sku: "HNM-MCH-GRY", category: "Apparel", price: 65, stock: 44, supplier: "H&M Distribution", description: "Comfortable fleece-lined hoodie with relaxed fit and adjustable drawstring hood.", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop&q=80" },
  { id: 26, name: "Women's Running Jacket", sku: "ADS-WRJ-BLU", category: "Apparel", price: 95, stock: 21, supplier: "Adidas Global", description: "Lightweight weather-resistant running jacket with breathable mesh ventilation panels.", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&auto=format&fit=crop&q=80" },
  { id: 27, name: "Travel Backpack Explorer", sku: "TRV-BPE-45L", category: "Apparel", price: 139, stock: 17, supplier: "Urban Travel Gear", description: "45L water-resistant backpack with laptop sleeve, USB charging port, and anti-theft pocket.", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&auto=format&fit=crop&q=80" },
  { id: 28, name: "Professional DSLR Camera", sku: "CAN-DSLR-90D", category: "Electronics", price: 1599, stock: 7, supplier: "Canon Imaging", description: "High-resolution DSLR camera with fast autofocus, 4K video recording, and interchangeable lenses.", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&auto=format&fit=crop&q=80" },
  { id: 29, name: "Noise Cancelling Earbuds", sku: "BOSE-NCE-WHT", category: "Electronics", price: 279, stock: 26, supplier: "BOSE Distribution", description: "Wireless earbuds featuring immersive sound, adaptive noise cancellation, and long battery life.", image: "https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?w=600&auto=format&fit=crop&q=80" },
  { id: 30, name: "Industrial Storage Cabinet", sku: "IND-ISC-MTL", category: "Office", price: 699, stock: 8, supplier: "Industrial Space Co.", description: "Heavy-duty lockable steel storage cabinet with reinforced shelving for warehouse organization.", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80" }
];

export function InventoryProvider({ children }) {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState(initialProducts);
  const [wishlist, setWishlist] = useState([]);
  const [quoteCart, setQuoteCart] = useState([]);
  const [quoteRequests, setQuoteRequests] = useState([
    { id: "REQ-2026-8801", date: "2026-05-24", items: [{ name: "iPhone 15 Pro Max", qty: 2, price: 1199 }], total: 2398, status: "Approved" },
    { id: "REQ-2026-8802", date: "2026-05-26", items: [{ name: "Sony WH-1000XM5", qty: 1, price: 349 }, { name: "Wireless Charging Pad", qty: 3, price: 39 }], total: 466, status: "Pending Review" }
  ]);

  useEffect(() => {
    const savedUser = localStorage.getItem("portal_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (email, password) => {
    const defaultUser = { name: "Sarah Connor", email, role: "Registered Buyer" };
    setUser(defaultUser);
    localStorage.setItem("portal_user", JSON.stringify(defaultUser));
    toast.success(`Welcome back, ${defaultUser.name}!`);
    return true;
  };

  const signup = (name, email, password) => {
    const newUser = { name, email, role: "Registered Buyer" };
    setUser(newUser);
    localStorage.setItem("portal_user", JSON.stringify(newUser));
    toast.success("Profile created successfully!");
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("portal_user");
    setWishlist([]);
    setQuoteCart([]);
    toast.success("Logged out successfully");
  };

  const toggleWishlist = (productId) => {
    if (!user) {
      toast.error("Please login to save items to your wishlist!");
      return;
    }
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
      toast.success("Item removed from saved items");
    } else {
      setWishlist([...wishlist, productId]);
      toast.success("Added to saved items!");
    }
  };

  const addToQuoteCart = (product, quantity = 1) => {
    if (!user) {
      toast.error("Please login to request quotes!");
      return;
    }
    if (product.stock === 0) {
      toast.error("This item is currently out of stock!");
      return;
    }

    const existingIndex = quoteCart.findIndex(item => item.product.id === product.id);
    if (existingIndex > -1) {
      const updated = [...quoteCart];
      const newQty = updated[existingIndex].quantity + Number(quantity);
      if (newQty > product.stock) {
        toast.error(`Cannot request more than ${product.stock} units!`);
        return;
      }
      updated[existingIndex].quantity = newQty;
      setQuoteCart(updated);
    } else {
      if (Number(quantity) > product.stock) {
        toast.error(`Cannot request more than ${product.stock} units!`);
        return;
      }
      setQuoteCart([...quoteCart, { product, quantity: Number(quantity) }]);
    }
    toast.success(`${product.name} added to quote request cart!`);
  };

  const updateQuoteQuantity = (productId, qty) => {
    const prod = products.find(p => p.id === productId);
    if (qty > prod.stock) {
      toast.error(`Only ${prod.stock} units available in stock!`);
      return;
    }
    setQuoteCart(quoteCart.map(item =>
      item.product.id === productId ? { ...item, quantity: Math.max(1, Number(qty)) } : item
    ));
  };

  const removeFromQuoteCart = (productId) => {
    setQuoteCart(quoteCart.filter(item => item.product.id !== productId));
    toast.success("Removed from quote request");
  };

  const submitQuoteRequest = (notes = "") => {
    if (quoteCart.length === 0) return;

    const newId = `REQ-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const items = quoteCart.map(item => ({
      name: item.product.name,
      qty: item.quantity,
      price: item.product.price
    }));

    const total = quoteCart.reduce((acc, curr) => acc + (curr.product.price * curr.quantity), 0);
    const newReq = {
      id: newId,
      date: new Date().toISOString().split("T")[0],
      items,
      total,
      status: "Pending Review",
      notes
    };

    setQuoteRequests([newReq, ...quoteRequests]);

    setProducts(products.map(p => {
      const cartItem = quoteCart.find(item => item.product.id === p.id);
      if (cartItem) {
        return { ...p, stock: Math.max(0, p.stock - cartItem.quantity) };
      }
      return p;
    }));

    setQuoteCart([]);
    toast.success("Your quote request has been submitted successfully!", { duration: 4000 });
  };

  return (
    <InventoryContext.Provider value={{
      user,
      products,
      wishlist,
      quoteCart,
      quoteRequests,
      login,
      signup,
      logout,
      toggleWishlist,
      addToQuoteCart,
      updateQuoteQuantity,
      removeFromQuoteCart,
      submitQuoteRequest
    }}>
      {children}
    </InventoryContext.Provider>
  );
}

export function useInventory() {
  const context = useContext(InventoryContext);
  if (!context) {
    throw new Error("useInventory must be used within an InventoryProvider");
  }
  return context;
}
