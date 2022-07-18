import React from "react";

export default function LoadingScreen() {
  return (
    <div className="flex items-center justify-center pt-64">
      {/* <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-32 w-32 animate-spin"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      </div> */}
      <h1 className="font-lobster text-6xl sm:text-8xl md:text-[143px] lg:text-[204px] mb-16 animate-pulse">
        <span className="text-[#e33884]">Geor</span>
        <span className="text-[#2971ab]">gie</span>
      </h1>
    </div>
  );
}
