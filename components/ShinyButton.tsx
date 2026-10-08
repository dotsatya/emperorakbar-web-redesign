import React from "react";

interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function ShinyButton({
  children,
  className = "",
  ...props
}: ShinyButtonProps) {
  return (
    <button
      className={`relative overflow-hidden px-8 py-4 rounded-full font-bold text-sm tracking-wide 
        tracking-wide transition-all duration-300 shadow-md shadow-black/50 
              active:scale-98 active:transition-all active:duration-300 cursor-pointer ${className}`}
      {...props}
    >
      {/* 45-Degree Light Sweep */}
      <div className="absolute inset-0 w-[40%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[2px] animate-flow-right pointer-events-none" />

      {/* Content Layer (Keeps text static on top) */}
      <div className="relative z-10 flex items-center justify-center gap-2 w-full h-full">
        {children}
      </div>
    </button>
  );
}
