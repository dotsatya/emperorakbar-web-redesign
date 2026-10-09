export default function BadgesSection() {
  return (
    <section className="bg-bg-tertiary py-6 md:py-12 w-full relative overflow-hidden border-t border-stone-800/50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 relative z-10">
        <div className="flex flex-row justify-between sm:justify-center items-start sm:items-center gap-2 sm:gap-10 md:gap-24 lg:gap-32">
          {/* Freshness Sealed */}
          <div className="flex flex-col items-center text-center flex-1">
            <div className="w-20 h-20 sm:w-28 sm:h-28 flex flex-col items-center justify-center mb-2 sm:mb-4 relative">
              <span className="text-[7px] sm:text-[10px] font-bold tracking-widest uppercase text-[#ebd8bc] mb-1">
                Special
              </span>
              <span className="text-xl sm:text-3xl font-serif font-bold tracking-widest text-[#ebd8bc] leading-none mb-1 flex items-center">
                AR<span className="text-2xl sm:text-4xl leading-none px-0.5">O</span>MA
              </span>
              <span className="text-[7px] sm:text-[10px] font-bold tracking-[0.15em] uppercase text-[#ebd8bc] mb-1 sm:mb-2">
                Lock Pack
              </span>
              <div className="w-12 sm:w-16 h-1 sm:h-1.5 border-b-[1.5px] sm:border-b-[2px] border-[#ebd8bc] rounded-[50%] mt-0.5 sm:mt-1"></div>
            </div>
            <h3 className="text-[10px] sm:text-lg leading-tight sm:leading-normal font-medium tracking-wide text-stone-100">
              Freshness<br className="sm:hidden" /> Sealed
            </h3>
          </div>

          {/* 100% Natural */} 
          <div className="flex flex-col items-center text-center flex-1">
            <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full border-[1.5px] sm:border-[2px] border-[#ebd8bc] border-l-transparent flex flex-col items-center justify-center mb-2 sm:mb-4 relative rotate-45">
              <div className="absolute inset-1 sm:inset-1.5 rounded-full border-[1px] sm:border-[1.5px] border-[#ebd8bc] border-r-transparent border-b-transparent"></div>
              <div className="-rotate-45 flex flex-col items-center justify-center w-full h-full">
                <span className="text-lg sm:text-2xl font-serif font-bold tracking-wider text-[#ebd8bc] leading-none mb-1 mt-1 sm:mt-2">
                  100%
                </span>
                <span className="text-[7px] sm:text-[10px] font-medium tracking-widest uppercase text-[#ebd8bc] mb-1 sm:mb-2">
                  Natural
                </span>
                <div className="flex gap-1 sm:gap-1.5 text-[#ebd8bc] text-[6px] sm:text-[8px]">
                  <span>★</span>
                  <span className="text-[8px] sm:text-[10px] -mt-1">★</span>
                  <span>★</span>
                </div>
              </div>
            </div>
            <h3 className="text-[10px] sm:text-lg leading-tight sm:leading-normal font-medium tracking-wide text-stone-100">
              100%<br className="sm:hidden" /> Natural
            </h3>
          </div>

          {/* Premium Quality */}
          <div className="flex flex-col items-center text-center flex-1">
            <div className="w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center mb-2 sm:mb-4 relative">
              <div className="absolute inset-0 rounded-full border-[4px] sm:border-[6px] border-dotted border-[#ebd8bc]/40"></div>
              <div className="absolute inset-[4px] sm:inset-[6px] rounded-full border-[1px] sm:border-[1.5px] border-[#ebd8bc]"></div>
              <div className="flex flex-col items-center justify-center z-10 w-full pt-1">
                <div className="text-[#ebd8bc] mb-0.5 sm:mb-1 leading-none text-[10px] sm:text-sm">
                  ♕
                </div>
                <span className="text-[5px] sm:text-[8px] font-medium tracking-widest uppercase text-[#ebd8bc] mb-1 sm:mb-1.5 flex items-center gap-0.5 sm:gap-1">
                  <span className="text-[4px] sm:text-[6px]">★</span> PREMIUM{" "}
                  <span className="text-[4px] sm:text-[6px]">★</span>
                </span>
                <div className="bg-[#ebd8bc] text-[#0f1f15] py-0.5 sm:py-1 mb-1 sm:mb-2 w-[105%] relative z-20 shadow-sm border-y border-[#ebd8bc] -ml-[2.5%]">
                  <span className="text-[7px] sm:text-[11px] font-bold tracking-[0.2em] uppercase block w-full text-center">
                    Quality
                  </span>
                </div>
                <div className="flex gap-1 sm:gap-1.5 text-[#ebd8bc] text-[6px] sm:text-[8px]">
                  <span>★</span>
                  <span className="text-[8px] sm:text-[10px] -mt-1">★</span>
                  <span>★</span>
                </div>
              </div>
            </div>
            <h3 className="text-[10px] sm:text-lg leading-tight sm:leading-normal font-medium tracking-wide text-stone-100">
              Premium<br className="sm:hidden" /> Quality
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
