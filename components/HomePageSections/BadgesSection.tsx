export default function BadgesSection() {
  return (
    <section className="bg-bg-tertiary py-16 w-full relative overflow-hidden border-t border-stone-800/50">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-16 md:gap-24 lg:gap-32">
          {/* Freshness Sealed */}
          <div className="flex flex-col items-center text-center">
            <div className="w-28 h-28 flex flex-col items-center justify-center mb-4 relative">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#d4af37] mb-1">
                Special
              </span>
              <span className="text-3xl font-serif font-bold tracking-widest text-[#d4af37] leading-none mb-1 flex items-center">
                AR<span className="text-4xl leading-none px-0.5">O</span>MA
              </span>
              <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#d4af37] mb-2">
                Lock Pack
              </span>
              <div className="w-16 h-1.5 border-b-[2px] border-[#d4af37] rounded-[50%] mt-1"></div>
            </div>
            <h3 className="text-lg font-medium tracking-wide text-stone-100">
              Freshness Sealed
            </h3>
          </div>

          {/* 100% Natural */} 
          <div className="flex flex-col items-center text-center">
            <div className="w-28 h-28 rounded-full border-[2px] border-[#d4af37] border-l-transparent flex flex-col items-center justify-center mb-4 relative rotate-45">
              <div className="absolute inset-1.5 rounded-full border-[1.5px] border-[#d4af37] border-r-transparent border-b-transparent"></div>
              <div className="-rotate-45 flex flex-col items-center justify-center w-full h-full">
                <span className="text-2xl font-serif font-bold tracking-wider text-[#d4af37] leading-none mb-1 mt-2">
                  100%
                </span>
                <span className="text-[10px] font-medium tracking-widest uppercase text-[#d4af37] mb-2">
                  Natural
                </span>
                <div className="flex gap-1.5 text-[#d4af37] text-[8px]">
                  <span>★</span>
                  <span className="text-[10px] -mt-1">★</span>
                  <span>★</span>
                </div>
              </div>
            </div>
            <h3 className="text-lg font-medium tracking-wide text-stone-100">
              100% Natural
            </h3>
          </div>

          {/* Premium Quality */}
          <div className="flex flex-col items-center text-center">
            <div className="w-28 h-28 flex items-center justify-center mb-4 relative">
              <div className="absolute inset-0 rounded-full border-[6px] border-dotted border-[#d4af37]/40"></div>
              <div className="absolute inset-[6px] rounded-full border-[1.5px] border-[#d4af37]"></div>
              <div className="flex flex-col items-center justify-center z-10 w-full pt-1">
                <div className="text-[#d4af37] mb-1 leading-none text-sm">
                  ♕
                </div>
                <span className="text-[8px] font-medium tracking-widest uppercase text-[#d4af37] mb-1.5 flex items-center gap-1">
                  <span className="text-[6px]">★</span> PREMIUM{" "}
                  <span className="text-[6px]">★</span>
                </span>
                <div className="bg-[#d4af37] text-[#0f1f15] py-1 mb-2 w-[105%] relative z-20 shadow-sm border-y border-[#d4af37] -ml-[2.5%]">
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase block w-full text-center">
                    Quality
                  </span>
                </div>
                <div className="flex gap-1.5 text-[#d4af37] text-[8px]">
                  <span>★</span>
                  <span className="text-[10px] -mt-1">★</span>
                  <span>★</span>
                </div>
              </div>
            </div>
            <h3 className="text-lg font-medium tracking-wide text-stone-100">
              Premium Quality
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
