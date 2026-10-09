"use client";
import React, { useEffect, useRef } from "react";

export default function FooterRevealWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const footerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      if (entries[0]) {
        document.documentElement.style.setProperty(
          "--footer-height",
          `${entries[0].contentRect.height}px`
        );
      }
    });

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full h-screen z-0 bg-bg-tertiary flex flex-col justify-end">
      <div ref={footerRef}>
        {children}
      </div>
    </div>
  );
}
