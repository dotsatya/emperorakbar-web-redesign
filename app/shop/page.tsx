import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import websiteData from "@/data/websiteData.json";

export default function ShopPage() {
  const { products, title, sortOptions } = websiteData.shop;

  return (
    <div className="font-sans bg-bg-primary min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-24 px-6 max-w-7xl mx-auto w-full mt-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 uppercase tracking-wide mb-4">
              {title}
            </h1>
            <p className="text-stone-500 font-serif italic text-lg">
              Freshly sealed Alleppey Green Cardamom
            </p>
          </div>
          <select className="border border-stone-300 rounded-full px-6 py-3 text-sm text-stone-600 bg-white outline-none focus:border-[#d4af37]">
             {sortOptions.map(opt => <option key={opt}>{opt}</option>)}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl overflow-hidden border border-stone-200/50 shadow-sm hover:shadow-xl transition-shadow group">
              <div className="aspect-square bg-stone-100 relative">
                 <div className="absolute inset-0 flex items-center justify-center text-stone-300 text-sm italic font-serif">
                   [Image Placeholder]
                 </div>
                 {product.status === "sold-out" && (
                   <div className="absolute top-4 right-4 bg-red-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full z-10">
                     Sold Out
                   </div>
                 )}
                 {product.status === "sale" && (
                   <div className="absolute top-4 right-4 bg-[#d4af37] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full z-10">
                     Sale
                   </div>
                 )}
              </div>
              <div className="p-6">
                <p className="text-[10px] text-stone-500 font-bold uppercase tracking-widest mb-2">{product.grade} Grade</p>
                <h3 className="font-bold text-stone-800 mb-2 leading-tight h-10">{product.name}</h3>
                <div className="flex items-center gap-3">
                  <span className="text-lg font-serif font-bold text-stone-900">{product.currency} {product.price}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-stone-400 line-through">{product.currency} {product.originalPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
