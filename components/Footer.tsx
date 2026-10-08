
import { Photos } from "@/data/websiteData";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="relative h-[1200px] sm:h-[800px] md:h-[600px] lg:h-[400px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 left-0 w-full h-[1200px] sm:h-[800px] md:h-[600px] lg:h-[400px] -z-10">
        <div className="w-full h-full bg-bg-tertiary text-stone-400 pt-16 pb-8 px-6 rounded-t-4xl flex flex-col justify-between">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 flex-1">
            <div className=" absolute w-full flex items-center justify-center mt-16 mb-8 z-10 pointer-events-none">
              <h1 className="text-[13vw] font-serif font-black text-white/5 tracking-tighter leading-none whitespace-nowrap select-none uppercase">
                Emperor Akbar
              </h1>
            </div>

            <div className="lg:col-span-2">
              <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-[0_0_15px_rgba(251,191,36,0.15)] border-2 border-amber-500/30 overflow-hidden mb-6 p-3 transition-all duration-300 hover:scale-105 hover:border-amber-400">
                {/* Inner shadow & light effect for the modern circle look */}
                <div className="absolute inset-0 rounded-full border border-white/20 bg-gradient-to-tr from-stone-100 to-white" />

                {/* The Image */}
                <Image
                  src={Photos.logo}
                  alt="Emperor Akbar Logo"
                  width={64}
                  height={64}
                  className="relative z-10 object-contain aspect-square"
                />
              </div>
              <h3 className="text-4xl md:text-5xl font-serif text-[#f4f1ea] mb-6 leading-tight">
                The Green Gold <br />
                <span className="text-[#d4af37] italic">of India.</span>
              </h3>
            </div>

            <div>
              <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-6">
                Shop
              </h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    All Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cardamom Grades
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Gift Packs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-6">
                Company
              </h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Quality & Sourcing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-6">
                Help
              </h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Shipping & Delivery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Returns & Refunds
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-6">
                Follow Us
              </h4>
              <div className="flex gap-4">
                {/* Social icons placeholders */}
                <div className="w-8 h-8 rounded-full border border-stone-700 flex items-center justify-center hover:bg-[#d4af37] hover:text-black hover:border-transparent transition-all cursor-pointer">
                  In
                </div>
                <div className="w-8 h-8 rounded-full border border-stone-700 flex items-center justify-center hover:bg-[#d4af37] hover:text-black hover:border-transparent transition-all cursor-pointer">
                  Fb
                </div>
                <div className="w-8 h-8 rounded-full border border-stone-700 flex items-center justify-center hover:bg-[#d4af37] hover:text-black hover:border-transparent transition-all cursor-pointer">
                  Yt
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto w-full pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-xs tracking-wider gap-4 md:gap-0">
            <p>&copy; 2026 Emperor Akbar. All rights reserved.</p>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <span>India&apos;s Finest Cardamom</span>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-[#d4af37]"></span>
              <span>Naturally Extraordinary.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
