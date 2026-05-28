import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiClock, FiTag, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const blogsData = [
  { id: 1, title: "How to Optimize Your Warehouse Layout for Speed", excerpt: "Discover the secrets of efficient warehouse design and reduce picking time.", category: "Logistics", date: "May 12, 2026", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80" },
  { id: 2, title: "Top 5 Inventory Management Strategies in 2026", excerpt: "Stay ahead of the curve with these modern inventory strategies.", category: "Management", date: "May 10, 2026", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80" },
  { id: 3, title: "Understanding Safety Stock and Reorder Points", excerpt: "Learn how to calculate and maintain safety stock to prevent stockouts.", category: "Tutorials", date: "May 08, 2026", image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&auto=format&fit=crop&q=80" },
  { id: 4, title: "The Future of Automated Fulfillment Centers", excerpt: "Robotics and AI are transforming how we manage supply chains.", category: "Technology", date: "May 05, 2026", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop&q=80" },
  { id: 5, title: "Reducing Overhead Costs in Procurement", excerpt: "Actionable tips to cut down unnecessary expenses in your procurement process.", category: "Finance", date: "May 02, 2026", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80" },
  { id: 6, title: "Best Practices for Supplier Audits", excerpt: "Ensure quality and reliability from your suppliers with these audit tips.", category: "Compliance", date: "April 28, 2026", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop&q=80" },
];

const categories = ["Logistics", "Management", "Tutorials", "Technology", "Finance", "Compliance"];
const recentPosts = blogsData.slice(0, 3);

export default function Blogs() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const totalPages = Math.ceil(blogsData.length / postsPerPage);
  const currentPosts = blogsData.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 py-10 space-y-12 pb-16 text-left animate-fadeIn">
      <div className="text-center space-y-4 pt-8">
        <span className="text-xs font-bold text-[#2874F0] uppercase tracking-widest block">Insights & Updates</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">Our Latest <span className="text-[#2874F0]">Blogs</span></h1>
        <p className="text-sm text-slate-500 max-w-2xl mx-auto font-medium">Explore industry insights, expert tips, and the latest news in inventory and logistics management.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Side - Blogs Grid */}
        <div className="lg:col-span-2 space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {currentPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col group">
                <div className="relative h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {/* <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold text-[#2874F0] uppercase tracking-wider">
                    {post.category}
                  </div> */}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-[11px] font-bold text-slate-400 mb-3">
                    <span className="flex items-center gap-1"><FiClock className="w-3 h-3" /> {post.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-2 group-hover:text-[#2874F0] transition-colors">{post.title}</h3>
                  <p className="text-sm text-slate-500 mb-6 line-clamp-3 flex-1 font-medium">{post.excerpt}</p>
                  <Link to={`#`} className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2874F0] hover:text-blue-700 transition-colors mt-auto w-fit">
                    Read Article <FiArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 pt-8 border-t border-slate-100">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-[#2874F0] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-lg text-sm font-bold transition-colors ${currentPage === i + 1 ? "bg-[#2874F0] text-white" : "border border-slate-200 text-slate-600 hover:bg-slate-50"}`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-[#2874F0] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Side - Sidebar */}
        <aside className="lg:col-span-1 space-y-8 sticky top-28">
          {/* Recent Posts */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
            <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2874F0]"></span> Recent Posts
            </h3>
            <div className="space-y-4">
              {recentPosts.map(post => (
                <div key={post.id} className="flex gap-4 group cursor-pointer">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 line-clamp-2 group-hover:text-[#2874F0] transition-colors">{post.title}</h4>
                    <span className="text-[10px] text-slate-400 font-semibold mt-1 block">{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
            <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Categories
            </h3>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <Link key={cat} to="#" className="px-3 py-1.5 bg-white border border-slate-200 hover:border-[#2874F0] hover:text-[#2874F0] rounded-lg text-xs font-bold text-slate-600 transition-colors flex items-center gap-1.5">
                  <FiTag className="w-3 h-3" /> {cat}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
