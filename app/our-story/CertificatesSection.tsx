"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import {  X } from "lucide-react";

interface CertificateItem {
  id: string;
  category: string;
  title: string;
  description: string;
  paragraphs?: string[];
  image: StaticImageData;
  link?: string;
}

interface CertificatesData {
  title: string;
  subtitle: string;
  description: string;
  filters: string[];
  items: CertificateItem[];
}

export default function CertificatesSection({ data }: { data: CertificatesData }) {
  const [activeFilter, setActiveFilter] = useState("All Credentials");
  const [selectedItem, setSelectedItem] = useState<CertificateItem | null>(null);

  const filteredItems =
    activeFilter === "All Credentials"
      ? data.items
      : data.items.filter((item) =>
          item.category.toLowerCase().includes(activeFilter.toLowerCase().replace(" recognition", "").replace(" certification", "").replace(" achievement", ""))
        );

  return (
    <section className="w-full bg-[#eef0e5] pt-10 pb-20 mt-10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-900/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-px bg-[#c2a359] w-12 md:w-24"></div>
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#a48135] uppercase">
              {data.subtitle}
            </span>
            <div className="h-px bg-[#c2a359] w-12 md:w-24"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
            {data.title}
          </h2>
          <p className="text-stone-600 text-base md:text-lg leading-snug md:leading-relaxed max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {data.filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors border ${
                activeFilter === filter
                  ? "bg-[#1b4b36] text-white border-[#1b4b36]"
                  : "bg-white text-stone-600 border-stone-200 hover:border-stone-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid/Carousel - Changed to 2 columns for better text formatting */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 flex flex-col sm:flex-row gap-8 items-center shadow-sm border border-stone-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-full sm:w-2/5 shrink-0">
                <div className="p-3 border border-[#d4af37]/40 bg-[#faf9f6] shadow-sm rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-contain border border-stone-200/50 rounded bg-white mix-blend-multiply"
                  />
                </div>
              </div>
              
              <div className="flex flex-col justify-center w-full sm:w-3/5">
                <span className="text-xs font-bold tracking-wider text-[#a48135] uppercase mb-3 block">
                  {item.category}
                </span>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-stone-900 mb-4 leading-snug">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-sm md:text-base leading-snug md:leading-relaxed mb-6">
                  {item.description}
                </p>
                <button
                  onClick={() => setSelectedItem(item)}
                  className="inline-flex items-center text-sm font-semibold text-[#1b4b36] hover:text-[#a48135] transition-colors mt-auto group w-max"
                >
                   View details &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal / Popup */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 opacity-100 transition-opacity duration-300">
          <div 
            className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm cursor-pointer" 
            onClick={() => setSelectedItem(null)}
          ></div>
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-5xl flex flex-col md:flex-row max-h-[90vh]">
            <button 
              onClick={() => setSelectedItem(null)} 
              className="absolute top-4 right-4 z-10 p-2 bg-stone-100 hover:bg-stone-200 rounded-full transition-colors text-stone-500 hover:text-stone-800"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Modal Left: Image */}
            <div className="w-full md:w-1/2 bg-[#faf9f6] p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-stone-100">
              <div className="relative w-full aspect-square md:aspect-auto md:h-full max-h-[50vh] md:max-h-[70vh]">
                 <Image 
                   src={selectedItem.image} 
                   alt={selectedItem.title} 
                   fill
                   className="object-contain drop-shadow-xl p-4" 
                 />
              </div>
            </div>
            
            {/* Modal Right: Content */}
            <div className="w-full md:w-1/2 p-8 overflow-y-auto">
              <span className="text-sm font-bold tracking-widest text-[#a48135] uppercase mb-4 block">
                {selectedItem.category}
              </span>
              <h3 className="text-3xl font-serif font-bold text-stone-900 mb-8 leading-tight">
                {selectedItem.title}
              </h3>
              
              <div className="space-y-5 text-stone-600 leading-snug md:leading-relaxed text-base md:text-lg">
                {selectedItem.paragraphs ? (
                  selectedItem.paragraphs.map((p, i) => <p key={i}>{p}</p>)
                ) : (
                  <p>{selectedItem.description}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
