
import { Photos } from "@/data/websiteData";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-bg-tertiary text-stone-400 pt-16 pb-8 px-6 flex flex-col justify-between relative overflow-hidden">
      {/* Huge background text */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none overflow-hidden opacity-50 md:opacity-100">
        <h1 className="text-[20vw] md:text-[13vw] font-serif font-black text-white/5 tracking-tighter leading-none whitespace-nowrap select-none uppercase">
          Emperor Akbar
        </h1>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12 flex-1 relative z-10">
        
        <div className="col-span-2 lg:col-span-2 flex flex-col items-center sm:items-start text-center sm:text-left mb-4 lg:mb-0">
          <div className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-white shadow-[0_0_15px_rgba(251,191,36,0.15)] border-2 border-amber-500/30 overflow-hidden mb-6 p-3 transition-all duration-300 hover:scale-105 hover:border-amber-400">
            <div className="absolute inset-0 rounded-full border border-white/20 bg-gradient-to-tr from-stone-100 to-white" />
            <Image
              src={Photos.logo}
              alt="Emperor Akbar Logo"
              width={64}
              height={64}
              className="relative z-10 object-contain aspect-square"
            />
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#f4f1ea] mb-6 leading-tight">
            The Green Gold <br />
            <span className="text-[#d4af37] italic">of India.</span>
          </h3>
        </div>

        <div className="col-span-1">
          <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-6">
            Shop
          </h4>
          <ul className="space-y-4 text-sm">
            <li>
              <Link href="/shop" className="hover:text-white transition-colors">
                All Products
              </Link>
            </li>
            <li>
              <Link href="/cardamom-grades" className="hover:text-white transition-colors">
                Cardamom Grades
              </Link>
            </li>
            <li>
              <Link href="/recipes" className="hover:text-white transition-colors">
                Recipes
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-6">
            Company
          </h4>
          <ul className="space-y-4 text-sm">
            <li>
              <Link href="/our-story" className="hover:text-white transition-colors">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                Quality & Sourcing
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-6">
            Help
          </h4>
          <ul className="space-y-4 text-sm">
            <li>
              <Link href="/faq" className="hover:text-white transition-colors">
                FAQs
              </Link>
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

        <div className="col-span-1">
          <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-6">
            Follow Us
          </h4>
          <div className="flex gap-4">
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

      <div className="max-w-7xl mx-auto w-full pt-8 mt-12 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-xs tracking-wider gap-4 md:gap-0 relative z-10 text-center md:text-left">
        <p>&copy; 2026 Emperor Akbar. All rights reserved.</p>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <span>India&apos;s Finest Cardamom</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-[#d4af37]"></span>
          <span>Naturally Extraordinary.</span>
        </div>
      </div>
    </footer>
  );
}
