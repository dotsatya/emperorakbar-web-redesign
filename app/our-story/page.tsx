import React from "react";
import { websiteData } from "@/data/websiteData";
import CertificatesSection from "./CertificatesSection";
import StoryBlock from "./StoryBlock";

export default function OurStoryPage() {
  const { heroTitle, sections, certificatesData } = websiteData.about;

  return (
    <main className="flex-1 w-full mt-10">
      <div className="pb-4 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-10 ">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-800 uppercase tracking-wide mb-6 leading-tight">
            {heroTitle}
          </h1>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
        </div>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <StoryBlock 
              key={index}
              title={section.title}
              paragraphs={section.paragraphs}
              image={section.image}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>

      <CertificatesSection data={certificatesData} />
    </main>
  );
}
