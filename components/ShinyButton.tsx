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
      className={`relative overflow-hidden text-black px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-[#ebd57b] transition-colors shadow-[0_4px_20px_rgba(212,175,55,0.3)] ${className}`}
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
