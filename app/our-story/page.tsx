import React from "react";

import { websiteData } from "@/data/websiteData";

export default function OurStoryPage() {
  const { heroTitle, sections } = websiteData.about;

  return (
       
      <main className="flex-1  pb-20 px-6 max-w-4xl mx-auto w-full mt-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-800 uppercase tracking-wide mb-6 leading-tight">
            {heroTitle}
          </h1>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
        </div>

        <div className="space-y-16">
          {sections.map((section, index) => (
            <div key={index} className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1b4b36] mb-6">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.paragraphs.map((para, pIndex) => (
                  <p key={pIndex} className="text-stone-600 leading-relaxed text-lg">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

  );
}
