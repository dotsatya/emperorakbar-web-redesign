import Image from "next/image";
import data from "../data/websiteData.json";
import {
  MapPin,
  Lock,
  Leaf,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Map,
  Coffee,
} from "lucide-react";
import { heroBG, purpleSeed } from "@/lib/picture";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShinyButton from "@/components/ShinyButton";

const gradeColors: Record<string, string> = {
  Purple: "#6b2c58",
  Pink: "#ec4899",
  Green: "#16a34a",
  Orange: "#f97316",
  Red: "#ef4444",
};

export default function Home() {
  const shopData = data.shop;
  const recipeData = data.recipes;

  return (
    <div className="font-sans text-stone-900">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] lg:min-h-[60vh] flex items-center py-10 lg:py-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBG}
            alt="Misty Cardamom Plantation"
            fill
            className="object-cover object-center "
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-white">
            <span className="text-[#d4af37] font-medium tracking-[0.2em] text-xs md:text-sm uppercase mb-4 block">
              Premium Alleppey Green Cardamom
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6 text-white">
              THE GREEN <br /> GOLD OF INDIA
            </h1>
            <p className="text-xl md:text-2xl font-light mb-4">
              Pure. Aromatic. Naturally Extraordinary.
            </p>
            <p className="text-stone-300 max-w-md mb-10 leading-relaxed text-sm md:text-base">
              From the lush spice hills of Alleppey to your kitchen. Emperor
              Akbar brings you the world&apos;s finest green cardamom, sealed at
              its freshest.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <ShinyButton className="bg-btn-primary/60 text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide ">
                SHOP CARDAMOM <ArrowRight className="w-4 h-4" />
              </ShinyButton>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-white hover:text-black transition-colors">
                DISCOVER OUR STORY
              </button>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center right-4 lg:right-[-15%] gap-6 text-[10px] md:text-xs uppercase tracking-widest font-medium">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#d4af37]" />
                <span className="leading-snug text-stone-200">
                  GI-Tagged
                  <br />
                  Alleppey Cardamom
                </span>
              </div>
              <div className="hidden sm:block border-l border-white/30 h-8"></div>
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-[#d4af37]" />
                <span className="leading-snug text-stone-200">
                  Aroma-Lock
                  <br />
                  Technology
                </span>
              </div>
              <div className="hidden sm:block border-l border-white/30 h-8"></div>
              <div className="flex items-center gap-3">
                <Leaf className="w-5 h-5 text-[#d4af37]" />
                <span className="leading-snug text-stone-200">
                  100% Natural
                  <br />
                  No Additives
                </span>
              </div>
            </div>
          </div>

          {/* Right Side Overlay Elements */}
          <div className="hidden lg:flex w-1/2 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none items-center justify-end pr-8 lg:pr-0 lg:-mr-10">
            <div className="flex flex-col items-center gap-12 pointer-events-auto">
              {/* Cursive Text */}
              <div className="-rotate-[24deg] drop-shadow-2xl text-center mb-4">
                <span
                  className="text-5xl md:text-6xl text-[#f4f1ea] drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]"
                  style={{ fontFamily: "var(--font-cursive), cursive" }}
                >
                  Nature&apos;s
                  <br />
                  Finest Aroma
                </span>
              </div>

              {/* GI Badge */}
              <div className="">
                <div className=" absolute right-[2%] w-36 h-36 rounded-full border border-white/20 flex items-center justify-center bg-black/50 backdrop-blur-sm shadow-2xl p-2 hover:scale-105 transition-transform cursor-pointer group">
                  <div className="w-full h-full rounded-full border-[1.5px] border-dashed border-[#d4af37]/80 flex flex-col items-center justify-center relative overflow-hidden group-hover:border-[#d4af37] transition-colors">
                    {/* SVG for circular text effect */}
                    <svg
                      className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite] opacity-90"
                      viewBox="0 0 100 100"
                    >
                      <path
                        id="circlePath"
                        d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0"
                        fill="transparent"
                      />
                      <text className="text-[8.5px] fill-white tracking-widest uppercase font-sans font-bold">
                        <textPath href="#circlePath" startOffset="0%">
                          EXCLUSIVE · AUTHENTIC · ALLEPPEY ·
                        </textPath>
                      </text>
                    </svg>
                    <span className="text-4xl font-serif text-[#d4af37] font-bold z-10">
                      GI
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Aroma is Everything */}
      {/* <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-2 tracking-wide uppercase">
          The Aroma is Everything.
        </h2>
        <p className="text-stone-500 mb-16 italic font-serif">
          A journey of purity, from nature to your home.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10">

          <div className="flex flex-col items-center flex-1">
            <div className="w-8 h-8 rounded-full bg-[#d4af37] text-white flex items-center justify-center font-bold mb-4 shadow-md">
              1
            </div>
            <h3 className="font-bold text-xs uppercase tracking-widest text-stone-800 mb-4 h-8">
              Freshly
              <br />
              Harvested
            </h3>
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center overflow-hidden">
              <Leaf className="w-10 h-10 text-green-700" />
            </div>
          </div>

          <ChevronRight className="w-6 h-6 text-stone-300 hidden md:block" />

          <div className="flex flex-col items-center flex-1">
            <div className="w-8 h-8 rounded-full bg-[#d4af37] text-white flex items-center justify-center font-bold mb-4 shadow-md">
              2
            </div>
            <h3 className="font-bold text-xs uppercase tracking-widest text-stone-800 mb-4 h-8">
              Carefully
              <br />
              Graded
            </h3>
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center overflow-hidden">
              <CheckCircle className="w-10 h-10 text-green-700" />
            </div>
          </div>

          <ChevronRight className="w-6 h-6 text-stone-300 hidden md:block" />

          <div className="flex flex-col items-center flex-1">
            <div className="w-8 h-8 rounded-full bg-[#d4af37] text-white flex items-center justify-center font-bold mb-4 shadow-md">
              3
            </div>
            <h3 className="font-bold text-xs uppercase tracking-widest text-stone-800 mb-4 h-8">
              Aroma-Lock
              <br />
              Sealed
            </h3>
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center overflow-hidden">
              <Lock className="w-10 h-10 text-green-700" />
            </div>
          </div>

          <ChevronRight className="w-6 h-6 text-stone-300 hidden md:block" />

          <div className="flex flex-col items-center flex-1">
            <div className="w-8 h-8 rounded-full bg-[#d4af37] text-white flex items-center justify-center font-bold mb-4 shadow-md">
              4
            </div>
            <h3 className="font-bold text-xs uppercase tracking-widest text-stone-800 mb-4 h-8">
              Rich Aroma
              <br />
              Reaches You
            </h3>
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center overflow-hidden">
              <Coffee className="w-10 h-10 text-green-700" />
            </div>
          </div>
        </div>
      </section> */}

      {/* From the Spice Hills of South India */}
      {/* <section className="bg-[#172d1f] text-white py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Kerala_locator_map.svg/1200px-Kerala_locator_map.svg.png')] bg-no-repeat bg-right opacity-[0.03] bg-contain"></div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center relative z-10">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-serif font-bold uppercase leading-snug mb-8">
              From the spice hills <br /> of south india
            </h2>
            <p className="text-stone-300 text-lg max-w-md leading-relaxed mb-10">
              Our Alleppey Green Cardamom is grown in the misty hills of Kerala,
              a region known for producing the finest cardamom in the world.
            </p>
            <button className="border-2 border-[#d4af37] text-[#d4af37] px-8 py-3 rounded-full font-bold text-sm tracking-widest hover:bg-[#d4af37] hover:text-black transition-colors flex items-center gap-2">
              EXPLORE OUR ORIGIN <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 flex flex-col gap-8">
            {[
              {
                title: "KERALA",
                desc: "The land of spices",
                icon: <Map className="w-6 h-6" />,
              },
              {
                title: "ALLEPPEY",
                desc: "A unique terroir",
                icon: <MapPin className="w-6 h-6" />,
              },
              {
                title: "CARDAMOM",
                desc: "Naturally grown",
                icon: <Leaf className="w-6 h-6" />,
              },
              {
                title: "EMPEROR AKBAR",
                desc: "Expertly graded & sealed",
                icon: <Lock className="w-6 h-6" />,
              },
              {
                title: "YOUR KITCHEN",
                desc: "Pure aromatic, richer moments",
                icon: <Coffee className="w-6 h-6" />,
              },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[#d4af37]">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold tracking-widest uppercase text-sm mb-1">
                    {item.title}
                  </h4>
                  <p className="text-stone-400 text-sm font-serif italic">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="px-6 max-w-7xl mx-auto mt-24 mb-24">
        {/* Featured Grade Display */}
        <div className="bg-white rounded-[3rem] p-8 md:p-12 lg:p-16 
        flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative border border-stone-200/50
        shadow-[inset_0_0_10px_rgba(0,0,0,0.2)]">
          
          {/* Left Side: Details & Endorsement */}
          <div className="w-full lg:w-1/2 relative z-10 flex flex-col items-start">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8 w-full">
              {/* Product Image Blended */}
              <div className="relative w-28 h-28 shrink-0 bg-stone-50 rounded-full flex items-center justify-center shadow-inner border border-stone-200/60 p-4">
                <Image 
                  src={purpleSeed} 
                  alt="Purple Grade Cardamom" 
                  fill
                  className="object-contain mix-blend-multiply drop-shadow-md scale-75" 
                />
              </div>
              
              {/* Product Title */}
              <div>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#6b2c58] uppercase tracking-wide leading-none mb-3">
                  Purple Grade
                </h3>
                <div className="flex items-center gap-3 text-stone-500 font-bold tracking-widest text-xs md:text-sm uppercase">
                  <span>8MM & ABOVE</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
                  <span>100g</span>
                </div>
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="bg-stone-50/80 p-6 md:p-8 rounded-3xl border border-stone-100 shadow-sm mb-8 relative w-full">
              <div className="absolute -top-4 left-8 text-6xl text-[#d4af37] opacity-40 font-serif leading-none">&quot;</div>
              <p className="text-[#6b2c58] font-bold tracking-widest text-[10px] sm:text-xs uppercase mb-4">
                Chef Chabchoul&apos;s Favourite
              </p>
              <p className="text-stone-600 leading-relaxed text-sm italic relative z-10">
                Emperor Akbar Cardamom is loved by celebrity chef and renowned culinary maestro Chef Mohamad Chabchoul - winner of Executive Chef of the Year, Dubai (2021-2024), TV host and Pro Chef Awardee 2021. His first expression on experiencing its aroma—<strong className="text-stone-800">&quot;Mashaallah, the aroma is amazing&quot;</strong>, is truly special for us and reflects the distinctive quality of Emperor Akbar Cardamom.
              </p>
            </div>

            <ShinyButton className="bg-[#172d1f] text-white px-10 py-4 rounded-full font-bold text-sm tracking-widest hover:bg-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-3 group">
              GRAB IT NOW 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </ShinyButton>
          </div>

          {/* Right Side: Celebrity Image */}
          <div className="w-full lg:w-1/2 relative z-10 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white group bg-stone-100">
              <div className="absolute inset-0 bg-[#6b2c58]/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
              <Image
                src="https://www.emperorakbar.com/cdn/shop/files/EAC_Website_Home_Chabchaul_020126_900x.jpg?v=1767354197"
                alt="Chef Mohamad Chabchoul"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 md:p-8 z-20">
                <p className="text-white font-serif text-2xl font-bold">Chef Mohamad Chabchoul</p>
                <p className="text-[#d4af37] text-xs uppercase tracking-widest font-bold mt-2">Executive Chef of the Year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Cardamom */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 uppercase tracking-wide mb-2">
              Choose Your Cardamom
            </h2>
            <p className="text-stone-500 font-serif italic">
              Premium quality for every kitchen. For every occasion.
            </p>
          </div>
          <button className="text-stone-900 border-b border-stone-900 pb-1 font-bold tracking-widest text-xs uppercase flex items-center gap-2 hover:text-[#172d1f] hover:border-[#172d1f]">
            VIEW ALL PRODUCTS <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {shopData.products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl p-6 border border-stone-200 hover:shadow-xl transition-shadow flex flex-col group"
            >
              <div className="aspect-[3/4] bg-stone-50 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <div
                  className="absolute inset-x-0 top-0 h-2"
                  style={{
                    backgroundColor: gradeColors[product.grade] || "#000",
                  }}
                ></div>
                <span className="text-stone-300 text-sm font-serif">
                  Pack Image
                </span>
              </div>
              <h3
                className="font-bold text-sm uppercase tracking-wide mb-1"
                style={{ color: gradeColors[product.grade] || "#000" }}
              >
                {product.grade} Grade
              </h3>
              <p className="text-xs text-stone-400 tracking-wider mb-6">
                {product.size}
              </p>
              <div className="mt-auto flex items-center justify-between">
                <div>
                  <span className="font-serif font-bold text-xl text-stone-900">
                    ₹{product.price}
                  </span>
                  <p className="text-[10px] text-stone-400">(100g)</p>
                </div>
                <button className="w-8 h-8 rounded-full bg-[#d4af37] text-white flex items-center justify-center hover:bg-[#b5952f] transition-colors shadow-md">
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What will you create with it? */}
      <section className="bg-white py-24 px-6 border-t border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-[#d4af37] font-bold tracking-widest text-xs uppercase mb-2 block">
                FLAVOURS THAT BRING PEOPLE TOGETHER
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 uppercase tracking-wide">
                What will you create with it?
              </h2>
            </div>
            <button className="text-stone-900 border-b border-stone-900 pb-1 font-bold tracking-widest text-xs uppercase flex items-center gap-2 hover:text-[#172d1f] hover:border-[#172d1f]">
              EXPLORE ALL RECIPES <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Recipe Filter Tags */}
          <div className="flex gap-4 mb-10 overflow-x-auto pb-4 scrollbar-hide">
            <button className="px-6 py-2 rounded-full bg-[#172d1f] text-white text-xs font-bold tracking-widest uppercase whitespace-nowrap">
              All
            </button>
            <button className="px-6 py-2 rounded-full border border-stone-200 text-stone-600 hover:border-stone-400 text-xs font-bold tracking-widest uppercase whitespace-nowrap">
              Drinks
            </button>
            <button className="px-6 py-2 rounded-full border border-stone-200 text-stone-600 hover:border-stone-400 text-xs font-bold tracking-widest uppercase whitespace-nowrap">
              Main Course
            </button>
            <button className="px-6 py-2 rounded-full border border-stone-200 text-stone-600 hover:border-stone-400 text-xs font-bold tracking-widest uppercase whitespace-nowrap">
              Desserts
            </button>
            <button className="px-6 py-2 rounded-full border border-stone-200 text-stone-600 hover:border-stone-400 text-xs font-bold tracking-widest uppercase whitespace-nowrap">
              Festive
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recipeData.items.slice(0, 4).map((recipe, idx) => (
              <div key={idx} className="group cursor-pointer flex flex-col">
                <div className="aspect-[4/3] rounded-2xl bg-stone-100 mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-stone-300 font-serif">
                    Recipe Image
                  </div>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                  <button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#d4af37] shadow-lg translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
                <h3 className="font-bold text-stone-900 mb-1 group-hover:text-[#d4af37] transition-colors">
                  {recipe.title.split(" by ")[0]}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A Legacy of Aroma */}
      <section className="py-24 px-6 bg-[#f4f1ea]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/3">
            {/* Illustration placeholder */}
            <div className="w-full aspect-square rounded-full bg-stone-200 border-4 border-[#d4af37] flex items-center justify-center overflow-hidden shadow-2xl">
              <span className="text-stone-400 font-serif text-center px-4">
                Emperor Portrait Illustration
              </span>
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <span className="text-[#d4af37] font-bold tracking-widest text-xs uppercase mb-2 block">
              OUR JOURNEY
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 uppercase tracking-wide mb-6">
              A Legacy of Aroma
            </h2>
            <p className="text-stone-600 leading-relaxed mb-10">
              From a family business in 1981 to a globally loved brand today,
              Emperor Akbar continues to bring the unmatched aroma of Alleppey
              Green Cardamom to kitchens around the world.
            </p>
            <button className="bg-[#172d1f] text-white px-8 py-3 rounded-full font-bold text-sm tracking-widest hover:bg-black transition-colors flex items-center gap-2 mb-12">
              OUR STORY <ArrowRight className="w-4 h-4" />
            </button>

            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-16 font-serif font-bold text-xl text-[#172d1f]">
                  1981
                </div>
                <div className="w-4 h-4 rounded-full bg-[#d4af37] flex-shrink-0"></div>
                <div className="h-px bg-stone-300 flex-1"></div>
                <div className="text-sm font-medium text-stone-600">
                  Samex begins as a family business.
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 font-serif font-bold text-xl text-[#172d1f]">
                  2008
                </div>
                <div className="w-4 h-4 rounded-full bg-[#d4af37] flex-shrink-0"></div>
                <div className="h-px bg-stone-300 flex-1"></div>
                <div className="text-sm font-medium text-stone-600">
                  Emperor Akbar launches.
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 font-serif font-bold text-xl text-[#172d1f]">
                  2010+
                </div>
                <div className="w-4 h-4 rounded-full bg-[#d4af37] flex-shrink-0"></div>
                <div className="h-px bg-stone-300 flex-1"></div>
                <div className="text-sm font-medium text-stone-600">
                  Aroma-Lock Innovation.
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 font-serif font-bold text-xl text-[#172d1f]">
                  Today
                </div>
                <div className="w-4 h-4 rounded-full bg-[#d4af37] flex-shrink-0"></div>
                <div className="h-px bg-stone-300 flex-1"></div>
                <div className="text-sm font-medium text-stone-600">
                  Trusted in 25+ countries worldwide.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
