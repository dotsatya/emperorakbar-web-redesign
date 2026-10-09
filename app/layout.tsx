import type { Metadata } from "next";
import { Montserrat, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FooterRevealWrapper from "@/components/FooterRevealWrapper";
import { CartProvider } from "@/components/CartProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cursive",
});

export const metadata: Metadata = {
  title: "Emperor Akbar Cardamom - Premium GI Tagged",
  description:
    "The worlds best, premium, authentic, fresh, natural green and most aromatic cardamom brand from India. No. 1 exporter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${playfair.variable} ${greatVibes.variable} font-sans antialiased bg-bg-primary text-stone-900 min-h-screen flex flex-col`}
        style={{ paddingBottom: 'var(--footer-height, 0px)' }}
      >
        <CartProvider>
          <div className="relative z-10 bg-bg-primary min-h-screen rounded-b-[2.5rem] md:rounded-b-4xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] flex flex-col mb-0 transition-transform duration-500">
            <Header />
            <main className="flex flex-col flex-1">
              {children}
            </main>
          </div>
          <FooterRevealWrapper>
            <Footer />
          </FooterRevealWrapper>
        </CartProvider>
      </body>
    </html>
  );
}
