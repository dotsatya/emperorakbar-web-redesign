import React from "react";
import { websiteData } from "@/data/websiteData";

export default function FAQPage() {
  const { faqs } = websiteData;

  return (
    <div className="font-sans bg-[#f9f8f6] min-h-screen pt-10 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight mb-8 text-center">
          {faqs.title}
        </h1>
        <p className="text-xl text-stone-600 leading-relaxed mb-16 text-center max-w-5xl mx-auto">
          {faqs.intro}
        </p>

        <div className="space-y-6">
          {faqs.items.map((faq) => (
            <div key={faq.id} className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-stone-100 transition-all hover:shadow-md">
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">{faq.question}</h3>
              <p className="text-stone-600 text-lg leading-relaxed mb-6">{faq.answer}</p>
              {faq.videoUrl && (
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-sm">
                  <iframe 
                    src={faq.videoUrl} 
                    title={faq.question}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
