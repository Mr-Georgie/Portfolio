import React from "react";

export default function LoadingScreen() {
  return (
    <div className="flex items-center justify-center pt-64 lg:pt-40">
      <h1 className="text-6xl sm:text-8xl md:text-[143px] lg:text-[204px] mb-16 animate-pulse">
        <span className="text-[#e33884]">Geor</span>
        <span className="text-[#2971ab]">gie...</span>
      </h1>
    </div>
  );
}
