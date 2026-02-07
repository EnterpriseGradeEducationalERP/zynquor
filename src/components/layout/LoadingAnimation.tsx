"use client";

import React, { useEffect, useState } from "react";

export const LoadingAnimation = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
      setTimeout(() => setMounted(false), 700);
    };

    if (document.readyState === "complete") {
      const timer = setTimeout(handleLoad, 300);
      return () => clearTimeout(timer);
    }

    window.addEventListener("load", handleLoad);
    const fallback = setTimeout(handleLoad, 3000);
    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(fallback);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background-light dark:bg-background-dark transition-opacity duration-700 ease-out ${
        isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      {/* Animated rings */}
      <div className="relative flex items-center justify-center">
        <div
          className="absolute w-24 h-24 rounded-full border-2 border-primary/30"
          style={{
            animation: "loading-pulse 1.5s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-16 h-16 rounded-full border-2 border-primary"
          style={{
            animation: "loading-spin 1.2s linear infinite",
          }}
        />
        <div
          className="absolute w-8 h-8 rounded-full border-2 border-primary border-t-transparent"
          style={{
            animation: "loading-spin 0.8s linear infinite reverse",
          }}
        />
        <div
          className="w-3 h-3 rounded-full bg-primary"
          style={{
            animation: "loading-pulse 0.6s ease-in-out infinite alternate",
          }}
        />
      </div>

      {/* Brand text */}
      <p
        className="mt-8 font-display font-bold text-xl uppercase tracking-[0.3em] text-primary"
        style={{ animation: "loading-fade 1s ease-in-out infinite alternate" }}
      >
        ZYNQUOR
      </p>
      <div className="mt-4 h-0.5 w-24 bg-primary/40 overflow-hidden rounded-full">
        <div
          className="h-full w-1/2 bg-primary rounded-full"
          style={{ animation: "loading-progress 1.2s ease-in-out infinite" }}
        />
      </div>
    </div>
  );
};
