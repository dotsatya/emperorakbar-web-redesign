"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { websiteData } from "@/data/websiteData";
import { ArrowRight } from "lucide-react";

export default function RecipesPage() {
  const { title, tags, items } = websiteData.recipes;

  return (
    <div className="font-sans bg-bg-primary min-h-screen flex flex-col">
      <main className="flex-1 pt-10 md:pt-16 pb-20 px-6 max-w-7xl mx-auto w-full">
        <div className="w-full text-right md:text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-800 uppercase tracking-wide mb-4">
            {title}
          </h1>
          <div className="w-24 h-1 bg-[#d4af37] ml-auto mr-0 md:mx-auto  mb-6"></div>
          <div className="hidden md:flex flex-wrap justify-center gap-3">
            {tags.map((tag) => (
              <button
                key={tag}
                className="px-4 py-2 rounded-full border border-stone-200 bg-white text-stone-600 text-xs font-bold uppercase tracking-widest hover:bg-[#d4af37] hover:text-white hover:border-[#d4af37] transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((recipe) => (
            <Link
              href={`/recipes/${recipe.slug}`}
              key={recipe.id}
              className="bg-white rounded-[2rem] overflow-hidden border border-stone-200/50 shadow-sm flex flex-col group hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[4/3] bg-stone-100 relative overflow-hidden block">
                {recipe.image ? (
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-stone-300 text-sm italic font-serif group-hover:scale-105 transition-transform duration-700">
                    [Recipe Image]
                  </div>
                )}
              </div>
              <div className="p-8 flex flex-col flex-1">
                <p className="text-[10px] text-[#d4af37] font-bold uppercase tracking-widest mb-3">
                  By {recipe.author}
                </p>
                <h3 className="text-xl font-serif font-bold text-stone-800 mb-4 leading-tight group-hover:text-[#6b2c58] transition-colors">
                  {recipe.title}
                </h3>
                <p className="text-stone-500 text-sm leading-snug md:leading-relaxed mb-6 flex-1 line-clamp-3">
                  {recipe.description}
                </p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1b4b36] hover:text-[#d4af37] transition-colors mt-auto w-max">
                  Read Recipe <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
