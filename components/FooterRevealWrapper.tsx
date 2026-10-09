"use client";
import React, { useEffect, useRef, useState } from "react";

export default function FooterRevealWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
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
      <style suppressHydrationWarning>{`
        :root {
          --footer-height: ${footerHeight}px;
        }
      `}</style>
      <div className="fixed bottom-0 left-0 w-full h-screen -z-10 bg-bg-tertiary flex flex-col justify-end">
        <div ref={footerRef}>
          {children}
        </div>
      </div>
    </>
  );
}
