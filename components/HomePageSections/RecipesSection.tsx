"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";

export default function RecipesSection({ recipeData }: { recipeData: any }) {
  const [selectedRecipe, setSelectedRecipe] = useState<any>(null);

  return (
    <section className="bg-white py-16 md:py-24 px-6 border-t border-stone-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-[#d4af37] font-bold tracking-widest text-xs uppercase mb-2 block">
              FLAVOURS THAT BRING PEOPLE TOGETHER
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-stone-800 uppercase tracking-wide">
              What will you create with it?
            </h2>
          </div>
          <Link href="/recipes">
            <button className="text-stone-900 border-b border-stone-900 pb-1 font-bold tracking-widest text-xs uppercase flex items-center gap-2 hover:text-[#172d1f] hover:border-[#172d1f]">
              EXPLORE ALL RECIPES <ArrowRight className="w-3 h-3" />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipeData.items.slice(0, 4).map((recipe: any, idx: number) => (
            <div 
              key={idx} 
              className="group cursor-pointer flex flex-col"
              onClick={() => setSelectedRecipe(recipe)}
            >
              <div className="aspect-[4/3] rounded-2xl bg-stone-100 mb-4 overflow-hidden relative">
                {recipe.image ? (
                  <Image 
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-stone-300 font-serif">
                    Recipe Image
                  </div>
                )}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                <button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#d4af37] shadow-lg translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <h3 className="font-bold text-stone-900 mb-1 group-hover:text-[#d4af37] transition-colors">
                {recipe.title.split(" by ")[0]}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Recipe Modal */}
      {selectedRecipe && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedRecipe(null)}>
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedRecipe(null)}
              className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur rounded-full p-2 text-stone-800 hover:bg-[#d4af37] hover:text-white transition-colors shadow-sm"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="w-full relative h-64 sm:h-80 bg-stone-100 shrink-0">
              {selectedRecipe.image ? (
                <Image 
                  src={selectedRecipe.image}
                  alt={selectedRecipe.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-stone-300 italic font-serif">
                  [Recipe Image]
                </div>
              )}
            </div>
            
            <div className="w-full p-8 md:p-10 overflow-y-auto scrollbar-hide">
              <p className="text-xs text-[#d4af37] font-bold uppercase tracking-widest mb-2">By {selectedRecipe.author}</p>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-800 mb-6">{selectedRecipe.title}</h2>
              <div className="prose prose-stone max-w-none">
                <p className="text-stone-600 leading-relaxed whitespace-pre-wrap">
                  {selectedRecipe.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
