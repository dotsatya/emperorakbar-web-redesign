"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { X } from "lucide-react";

interface StoryBlockProps {
  title: string;
  paragraphs: string[];
  image?: StaticImageData | string | null;
  reverse?: boolean;
}

export default function StoryBlock({
  title,
  paragraphs,
  image,
  reverse,
}: StoryBlockProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // If there are more than 2 paragraphs, we truncate for the preview
  const isLong = paragraphs.length > 2;
  const previewParagraphs = paragraphs.slice(0, 2);

  const handleReadMore = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <>
      {!image ? (
        <div className="bg-white p-6 md:p-10 rounded-[2rem] shadow-sm border border-stone-100 max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-center text-[#1b4b36] mb-6">
            {title}
          </h2>
          <div className="space-y-4 text-stone-600 leading-relaxed text-base md:text-lg max-w-5xl mx-auto">
            {previewParagraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
          {isLong && (
            <div className="mt-6 text-center">
              <button
                onClick={handleReadMore}
                className="inline-flex items-center justify-center px-8 py-3 border border-[#d4af37] text-[#9d7d43] font-semibold rounded-full hover:bg-[#d4af37] hover:text-white transition-colors duration-300"
              >
                Read Full Story
              </button>
            </div>
          )}
        </div>
      ) : (
        <div
          className={`bg-white rounded-[2rem] shadow-sm border border-stone-100 flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} p-6 md:p-10 gap-8 lg:gap-12 items-center max-w-7xl mx-auto`}
        >
          <div className="w-full lg:w-1/2">
            <div className="p-3 border border-[#d4af37]/40 bg-[#faf9f6] shadow-sm rounded-2xl relative w-full aspect-[4/3]">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover rounded-xl border border-stone-200/50 mix-blend-multiply"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[#1b4b36] mb-6 leading-tight">
              {title}
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-base md:text-lg mb-6">
              {previewParagraphs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
            {isLong && (
              <div>
                <button
                  onClick={handleReadMore}
                  className="inline-flex items-center text-[#9d7d43] font-bold uppercase tracking-widest text-sm hover:text-stone-900 transition-colors duration-300"
                >
                  + Read More
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Modal / Popup for Full Story */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <div
            aria-hidden="true"
            className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={handleClose}
          />

          {/* Modal Box */}
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-5xl flex flex-col max-h-[90vh] z-10">
            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-20 p-2 bg-stone-100 hover:bg-stone-200 rounded-full transition-colors text-stone-500 hover:text-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-400"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Scrollable Content */}
            <div className="w-full p-8 md:p-12 overflow-y-auto">
              <h3
                id="modal-title"
                className="text-2xl md:text-3xl font-serif font-bold text-[#1b4b36] mb-6 leading-tight pr-10"
              >
                {title}
              </h3>

              <div className="space-y-5 text-stone-600 leading-relaxed text-base md:text-lg">
                {paragraphs?.map((p, i) => (
                  <p key={typeof p === "string" ? `${i}-${p.slice(0, 15)}` : i}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
