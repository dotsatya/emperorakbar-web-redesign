"use client";
import React, { useEffect, useRef, useState } from "react";

interface PageShellProps {
  children: React.ReactNode;
  footer: React.ReactNode;
}

export default function PageShell({ children, footer }: PageShellProps) {
  const footerRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      if (entries[0]) {
        setFooterHeight(entries[0].contentRect.height);
      }
    });

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div 
        className="flex flex-col min-h-screen w-full"
        style={{ paddingBottom: `${footerHeight}px` }}
      >
        {children}
      </div>

      <div className="fixed bottom-0 left-0 w-full h-screen -z-10 bg-bg-tertiary flex flex-col justify-end">
        <div ref={footerRef}>
          {footer}
        </div>
      </div>
    </>
  );
}
