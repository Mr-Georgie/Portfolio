import React from "react";

export default function Home(props) {
  return (
    <div className="h-full">
      <div className="px-10 py-8 xl:px-24">
        <h1 className="text-xl sm:text-[28px] font-extrabold text-[#e33884]">
          Hi, my name is
        </h1>
        <h1 className="font-lobster text-7xl sm:text-[120px] text-custom-blue">
          George Isiguzo
        </h1>
        <h6 className="text-xl mt-6 dark:text-white">
          {"&"} I build mobile-friendly User Interfaces for the Web.
        </h6>

        <div className="mt-10">
          <button
            onClick={() => props.navHandler("next")}
            className="flex bg-custom-blue text-white border-slate-800 border-r border-t py-4 px-8 gap-5"
          >
            <span className="font-mono">About Me</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
