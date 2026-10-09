"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import { Photos } from "@/data/websiteData";
import { useCart } from "@/components/CartProvider";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Our Story", href: "/our-story" },
  { name: "Cardamom Grades", href: "/cardamom-grades" },
  { name: "Shop", href: "/shop" },
  { name: "Recipes", href: "/recipes" },
  { name: "Blog", href: "/blog" },
  { name: "CSR", href: "/csr" },
  { name: "FAQ", href: "/faq" },
] as const;

function HeaderContent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { cartCount } = useCart();

  // Scroll listener with passive flag for better scroll performance
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Automatically close mobile menu on route change
  useEffect(() => {
    if (mobileMenuOpen) {
      // eslint-disable-next-line
      setMobileMenuOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      {/* Spacer to prevent layout shift below fixed header */}
      <div 
        aria-hidden="true" 
        className={`w-full shrink-0 transition-[height] duration-300 ${
          isScrolled ? "h-16" : "h-[88px]"
        }`} 
      />

      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 w-full z-50 px-6 md:px-12 
          border-b border-stone-200/80 bg-white/80 backdrop-blur-md
          flex items-center justify-between transition-all duration-300 ease-in-out text-stone-800 ${
            isScrolled ? "h-16 shadow-md" : "h-[88px]"
          }`}
      >
        {/* Logo: replaced router.push with semantic Link */}
        <Link href="/" aria-label="Go to Homepage" className="flex items-center shrink-0">
          <Image
            src={Photos.logo}
            alt="Emperor Akbar Logo"
            width={160}
            height={48}
            priority
            className={`transition-all duration-300 object-contain w-auto ${
              isScrolled ? "h-9" : "h-11"
            }`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav 
          aria-label="Main Navigation" 
          className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-stone-700"
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative py-1 transition-colors duration-200 group ${
                  isActive ? "text-stone-950 font-semibold" : "hover:text-stone-950"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-stone-800 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Action Icons & Mobile Toggle */}
        <div className="flex items-center gap-5 text-stone-700">
          <button 
            type="button" 
            aria-label="Search site" 
            className="hover:text-black transition-transform duration-200 hover:scale-105 p-1"
          >
            <Search className="w-5 h-5" />
          </button>

          <Link 
            href="/account"
            aria-label="User Account" 
            className="hover:text-black transition-transform duration-200 hover:scale-105 hidden sm:block p-1"
          >
            <User className="w-5 h-5" />
          </Link>

          <Link
            href="/cart"
            aria-label={`Shopping Cart, ${cartCount} items`}
            className="hover:text-black relative transition-transform duration-200 hover:scale-105 p-1"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#172d1f] text-[10px] font-bold text-white w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-navigation"
            className="lg:hidden hover:text-black transition-transform duration-200 hover:scale-105 p-1"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          id="mobile-navigation"
          aria-hidden={!mobileMenuOpen}
          className={`absolute top-full inset-x-0 bg-white/95 backdrop-blur-lg border-b border-stone-200 
            transition-all duration-300 ease-in-out lg:hidden overflow-hidden  rounded-b-xl ${
              mobileMenuOpen 
                ? "max-h-[80vh] py-4 shadow-xl opacity-100" 
                : "max-h-0 py-0 opacity-0 pointer-events-none"
            }`}
        >
          <nav className="flex flex-col items-stretch px-6 gap-1 text-center font-medium text-stone-700">
            {NAV_LINKS.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  style={{
                    transitionDelay: mobileMenuOpen ? `${index * 35}ms` : "0ms",
                  }}
                  className={`px-4 py-2.5 rounded-lg transition-all duration-200 ${
                    mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  } ${
                    isActive
                      ? "bg-[#172d1f] text-white font-semibold"
                      : "hover:bg-stone-100 hover:text-black"
                  }`}
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
    <Suspense fallback={<div className="h-[88px] w-full shrink-0" />}>
      <HeaderContent />
    </Suspense>
  );
}