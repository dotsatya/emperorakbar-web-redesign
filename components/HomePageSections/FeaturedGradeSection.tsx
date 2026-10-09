import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ShinyButton from "@/components/ShinyButton";
import { Photos } from "@/data/websiteData";

export default function FeaturedGradeSection() {
  return (
    <section className="px-6 max-w-7xl mx-auto mt-12 md:mt-24 ">
      {/* Featured Grade Display */}
      <div
        className="bg-white rounded-[2rem] sm:rounded-[3rem] p-5 sm:p-6 md:p-8 lg:p-12 
      flex flex-col lg:flex-row items-center gap-8 lg:gap-16 relative border border-stone-200/50
      shadow-[inset_0_0_10px_rgba(0,0,0,0.2)]"
      >
        {/* Left Side: Details & Endorsement */}
        <div className="w-full lg:w-1/2 relative z-10 flex flex-col items-start">
          <div className="flex flex-row items-center gap-4 sm:gap-6 mb-6 sm:mb-8 w-full">
            {/* Product Image Blended */}
            <div className="relative w-20 h-20 sm:w-28 sm:h-28 shrink-0 bg-stone-50 rounded-full flex items-center justify-center shadow-inner border border-stone-200/60 p-2 sm:p-4">
              <Image
                src={Photos.purpleSeedDemo}
                alt="Purple Grade Cardamom"
                fill
                className="object-contain mix-blend-multiply drop-shadow-md scale-[0.85] sm:scale-75"
              />
            </div>

            {/* Product Title */}
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#6b2c58] uppercase tracking-wide leading-none mb-1.5 sm:mb-3">
                Purple Grade
              </h3>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-stone-500 font-bold tracking-widest text-[10px] sm:text-xs md:text-sm uppercase">
                <span>8MM & ABOVE</span>
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#d4af37]"></span>
                <span>100g</span>
              </div>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="bg-stone-50/80 p-5 sm:p-6 md:p-8 rounded-[1.5rem] sm:rounded-3xl border border-stone-100 shadow-sm mb-6 sm:mb-8 relative w-full">
            <div className="absolute -top-3 sm:-top-4 left-6 sm:left-8 text-5xl sm:text-6xl text-[#d4af37] opacity-40 font-serif leading-none">
              &quot;
            </div>
            <p className="text-[#6b2c58] font-bold tracking-widest text-[9px] sm:text-xs uppercase mb-2 sm:mb-4 pt-1 sm:pt-0">
              Chef Chabchoul&apos;s Favourite
            </p>
            <p className="text-stone-600 leading-relaxed text-xs sm:text-sm italic relative z-10">
              Emperor Akbar Cardamom is loved by celebrity chef and renowned
              culinary maestro Chef Mohamad Chabchoul - winner of Executive
              Chef of the Year, Dubai (2021-2024), TV host and Pro Chef
              Awardee 2021. His first expression on experiencing its aroma—
              <strong className="text-stone-800">
                &quot;Mashaallah, the aroma is amazing&quot;
              </strong>
              , is truly special for us and reflects the distinctive quality
              of Emperor Akbar Cardamom.
            </p>
          </div>

          <Link href="/product/purple-grade" className="block w-full sm:w-auto">
            <ShinyButton className="w-full sm:w-auto justify-center bg-[#172d1f] text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold text-xs sm:text-sm tracking-widest hover:bg-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-3 group">
              GRAB IT NOW
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </ShinyButton>
          </Link>
        </div>

        {/* Right Side: Celebrity Image */}
        <div className="w-full lg:w-1/2 relative z-10 flex justify-center lg:justify-end mt-2 sm:mt-0">
          <div className="relative w-full max-w-[420px] aspect-square sm:aspect-[4/5] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white group bg-stone-100">
            <div className="absolute inset-0 bg-[#6b2c58]/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
            <Image
              src="https://www.emperorakbar.com/cdn/shop/files/EAC_Website_Home_Chabchaul_020126_900x.jpg?v=1767354197"
              alt="Chef Mohamad Chabchoul"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              unoptimized
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 md:p-8 z-20">
              <p className="text-white font-serif text-2xl font-bold">
                Chef Mohamad Chabchoul
              </p>
              <p className="text-[#d4af37] text-xs uppercase tracking-widest font-bold mt-2">
                Executive Chef of the Year
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
