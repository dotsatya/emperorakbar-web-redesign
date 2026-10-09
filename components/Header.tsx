"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import { Photos } from "@/data/websiteData";
import { useCart } from "@/components/CartProvider";

function HeaderContent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Story", href: "/our-story" },
    { name: "Cardamom Grades", href: "/cardamom-grades" },
    { name: "Shop", href: "/shop" },
    { name: "Recipes", href: "/recipes" },
    { name: "Blog", href: "/blog" },
    { name: "CSR", href: "/csr" },
    { name: "FAQ", href: "/faq" },
  ];

  const router = useRouter();

  return (
    <>
      {/* Spacer div to prevent content from hiding under the fixed header */}
      <div className="h-[89px] w-full shrink-0"></div>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 px-6 md:px-12 
          border-b border-stone-200
          flex items-center justify-between transition-all duration-300 ease-in-out text-stone-800 bg-white/80 ${
            isScrolled
              ? " shadow-md py-3 backdrop-blur-md" // Glassy white when scrolling
              : " py-5" // Solid cream color at the very top
          }`}
      >
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src={Photos.logo}
            alt="Emperor Akbar Logo"
            width={isScrolled ? 140 : 160}
            height={isScrolled ? 40 : 50}
            className="transition-all duration-300 object-contain w-auto h-12"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-stone-700">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative hover:text-black transition-colors duration-300 group py-1 ${isActive ? "text-black" : ""}`}
              >
                {link.name}
                {/* Active underline */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-stone-800 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}
        </nav>

        {/* Icons & Mobile Toggle */}
        <div className="flex items-center gap-6 text-stone-700">
          <button className="hover:text-black transition-transform duration-300 hover:scale-110">
            <Search className="w-5 h-5" />
          </button>
          <button className="hover:text-black transition-transform duration-300 hover:scale-110 hidden sm:block">
            <User className="w-5 h-5" />
          </button>
          <Link href="/cart" className="hover:text-black relative transition-transform duration-300 hover:scale-110 group">
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#172d1f] text-[10px] font-bold text-white w-4 h-4 rounded-full flex items-center justify-center transition-colors">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden hover:text-black transition-transform duration-300 hover:scale-110"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div
          className={`fixed inset-x-0 bg-[#f4f1ea] border-b border-stone-200 flex flex-col items-center justify-center z-40 transition-all duration-300 ease-in-out lg:hidden overflow-hidden ${
            mobileMenuOpen ? "h-[350px] shadow-2xl" : "h-0"
          }`}
          style={{ top: isScrolled ? "70px" : "88px" }}
        >
          <nav className="flex flex-col items-center gap-6 text-base font-medium text-stone-700 w-full py-8">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`hover:text-black transition-all duration-300 ${
                    mobileMenuOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  } ${isActive ? "text-black font-bold" : ""}`}
                  style={{
                    transitionDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms",
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}

export default function Header() {
  return (
    <Suspense fallback={<div className="h-[89px] w-full shrink-0"></div>}>
      <HeaderContent />
    </Suspense>
  );
}
