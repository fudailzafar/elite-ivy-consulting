"use client";

import { useState, useEffect } from "react";

export default function HeroCarousel() {
  const [order, setOrder] = useState([0, 1, 2]);

  useEffect(() => {
    const timer = setInterval(() => {
      setOrder((prev) => [prev[2], prev[0], prev[1]]); // Rotate right
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const getCardStyle = (index: number) => {
    const position = order.indexOf(index);
    
    // Position 0 = Top Card
    if (position === 0) {
      return "rotate-6 translate-x-6 -translate-y-4 z-30 scale-100 opacity-100";
    }
    // Position 1 = Middle Card
    if (position === 1) {
      return "-rotate-3 -translate-x-2 translate-y-2 z-20 scale-95 opacity-80";
    }
    // Position 2 = Bottom Card
    return "-rotate-12 -translate-x-8 translate-y-6 z-10 scale-90 opacity-60";
  };

  const getBgColor = (index: number) => {
    if (index === 0) return "bg-accent/15";
    if (index === 1) return "bg-accent/10";
    return "bg-accent/5";
  };

  return (
    <div className="relative w-full max-w-[400px] lg:max-w-[480px] mx-auto aspect-[4/5] perspective-1000 flex items-center justify-center mt-12 md:mt-0">
      {[0, 1, 2].map((i) => (
        <div 
          key={i}
          className={`absolute w-[75%] aspect-[3/4] rounded-2xl bg-bg border border-brass-border shadow-2xl flex items-center justify-center overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${getCardStyle(i)}`}
        >
          <div className={`absolute inset-0 transition-colors duration-1000 ${getBgColor(i)}`}></div>
          <span className="relative text-[13px] text-brass font-medium tracking-wide">Placeholder {i + 1}</span>
        </div>
      ))}
    </div>
  );
}
