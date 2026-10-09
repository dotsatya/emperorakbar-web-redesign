import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { websiteData } from "@/data/websiteData";

export default function CSRPage() {
  const { csr } = websiteData;

  return (
    <div className="font-sans bg-[#f9f8f6] min-h-screen pt-10  pb-20">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <h1 className="text-4xl md:text-5xl  font-serif font-bold text-stone-900 leading-tight mb-6">
          {csr.title}
        </h1>
        <div className="w-24 h-1 bg-[#d4af37] mx-auto rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-10 ">
        {csr.sections.map((section, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div key={section.id} className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-stone-100">
              {/* Title appears first */}
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1b4b36] mb-10 text-center lg:text-left border-b border-stone-100 pb-6">
                {section.title}
              </h2>

              {/* Text and Image Layout */}
              <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-center`}>
                
                {/* Text Description */}
                <div className="lg:w-3/5">
                  <div className="prose prose-stone text-lg text-stone-600 mb-8 leading-relaxed max-w-none">
                    {section.paragraphs.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>

                  {section.policy && (
                    <a 
                      href={section.policy.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center px-8 py-4 bg-[#1b4b36] hover:bg-[#113123] text-white font-bold rounded-full transition-all shadow-md mt-4"
                    >
                      View {section.policy.label} <ArrowUpRight className="w-5 h-5 ml-2" />
                    </a>
                  )}
                </div>

                {/* Smaller Image */}
                <div className="lg:w-2/5 w-full max-w-sm mx-auto lg:mx-0">
                  <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-lg border-4 border-[#f9f8f6]">
                    {section.image && (
                      <Image 
                        src={section.image} 
                        alt={section.title} 
                        fill 
                        className="object-cover" 
                      />
                    )}
                  </div>
                </div>
                
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
