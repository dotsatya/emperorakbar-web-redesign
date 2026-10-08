import React from "react";

import { websiteData } from "@/data/websiteData";
import { ArrowRight } from "lucide-react";

export default function BlogPage() {
  const { title, tags, items } = websiteData.blogs;

  return (
    <div className="font-sans bg-bg-primary min-h-screen flex flex-col">
     
      <main className="flex-1 pb-20 px-6 max-w-7xl mx-auto w-full mt-10">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 uppercase tracking-wide mb-8 text-center">
            {title}
          </h1>
          
          <div className="flex flex-wrap justify-center gap-3">
            {tags.map((tag) => (
              <button key={tag} className="px-4 py-2 rounded-full border border-stone-200 bg-white text-stone-600 text-[10px] font-bold uppercase tracking-widest hover:bg-[#1b4b36] hover:text-white hover:border-[#1b4b36] transition-colors">
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((blog) => (
            <div key={blog.id} className="bg-white rounded-[2rem] overflow-hidden border border-stone-200/50 shadow-sm flex flex-col group">
              <div className="aspect-video bg-stone-100 relative overflow-hidden">
                 <div className="absolute inset-0 flex items-center justify-center text-stone-300 text-sm italic font-serif group-hover:scale-105 transition-transform duration-700">
                   [Blog Image]
                 </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-serif font-bold text-stone-800 mb-4 leading-tight group-hover:text-[#1b4b36] transition-colors line-clamp-3">{blog.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                  {blog.description}
                </p>
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#d4af37] hover:text-black transition-colors">
                  Read Article <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

    </div>
  );
}
