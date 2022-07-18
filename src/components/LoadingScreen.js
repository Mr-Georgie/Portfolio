import React from "react";

export default function LoadingScreen() {
  return (
    <div className="flex items-center justify-center py-28">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14 animate-spin"
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
      </div>
    </div>
  );
}
