"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { useCart } from "@/components/CartProvider";

const gradeColors: Record<string, string> = {
  Purple: "#6b2c58",
  Pink: "#ec4899",
  Green: "#16a34a",
};

interface Product {
  id: string;
  name: string;
  grade: string;
  size: string;
  price: number;
  originalPrice: number;
  currency: string;
  status: string;
  image: string | StaticImageData;
  images?: { id: number; src: StaticImageData | string }[];
  url: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const images = product.images || [];

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Link 
      href={`/product/${product.id}`}
      className="bg-black/4 rounded-2xl p-3 sm:p-6 border border-stone-200 hover:shadow-xl transition-shadow flex flex-row sm:flex-col group cursor-pointer gap-4 sm:gap-0"
    >
      <div className="w-2/5 sm:w-full aspect-square sm:aspect-[3/3] bg-stone-50 rounded-xl mb-0 sm:mb-6 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500 shrink-0">
        <div
          className="absolute inset-x-0 top-0 h-2 z-20"
          style={{
            backgroundColor: gradeColors[product.grade] || "#000",
          }}
        ></div>
        
        {product.status === "sold-out" && (
          <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-red-500 text-white text-[8px] sm:text-[10px] font-bold uppercase tracking-widest px-2 sm:px-3 py-1 rounded-full z-30">
            Sold Out
          </div>
        )}
        {product.status === "sale" && (
          <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-[#d4af37] text-white text-[8px] sm:text-[10px] font-bold uppercase tracking-widest px-2 sm:px-3 py-1 rounded-full z-30">
            Sale
          </div>
        )}

        {images.length > 0 ? (
          <>
            <Image 
              src={images[currentIdx].src} 
              alt={`${product.grade} Grade`} 
              fill 
              className="object-cover mix-blend-multiply"
            />
            {images.length > 1 && (
              <>
                <div 
                  role="button"
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-stone-800 shadow-sm hover:bg-white transition-colors z-20 opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft className="w-5 h-5" />
                </div>
                <div 
                  role="button"
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-stone-800 shadow-sm hover:bg-white transition-colors z-20 opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight className="w-5 h-5" />
                </div>
                {/* Dots indicator */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  {images.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentIdx ? 'bg-stone-800' : 'bg-stone-400'}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <span className="text-stone-300 text-sm font-serif z-10">
            Pack Image
          </span>
        )}
      </div>
      <div className="flex flex-col flex-1 justify-center sm:justify-start">
        <h3
          className="font-bold text-sm sm:text-base uppercase tracking-wide mb-1"
          style={{ color: gradeColors[product.grade] || "#000" }}
        >
          {product.grade} Grade
        </h3>
        <p className="text-xs text-stone-400 tracking-wider mb-2 sm:mb-6">
          {product.size}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif font-bold text-lg sm:text-xl text-stone-900">
                ₹{product.price}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-xs sm:text-sm text-stone-400 line-through">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>
            <p className="text-[10px] text-stone-400">(100g)</p>
          </div>
        <button 
          onClick={(e) => {
            e.preventDefault();
            
            // Extract image URL properly whether it's a string or StaticImageData
            let imageUrl = "";
            if (product.image) {
              imageUrl = typeof product.image === "string" ? product.image : product.image.src;
            } else if (images.length > 0) {
              const firstImage = images[0].src;
              imageUrl = typeof firstImage === "string" ? firstImage : (firstImage as StaticImageData).src;
            }

            addToCart({
              id: product.id,
              name: product.name,
              price: product.price,
              image: imageUrl,
              weight: "100 gm", // Default weight for home cards
              quantity: 1,
            });
            setIsAdded(true);
            setTimeout(() => setIsAdded(false), 2000);
          }}
          className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors shadow-md z-10 shrink-0 ${
            isAdded ? "bg-[#172d1f] text-white" : "bg-[#d4af37] text-white hover:bg-[#b5952f]"
          }`}
        >
          {isAdded ? <Check className="w-4 h-4 sm:w-5 sm:h-5" /> : "+"}
        </button>
      </div>
      </div>
    </Link>
  );
}
