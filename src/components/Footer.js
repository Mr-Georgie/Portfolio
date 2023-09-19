import React from "react";

export default function Footer() {
  return (
    <div className="dark:text-white">
      <div className="font-mono flex justify-center items-center h-full py-4 px-6">
        <div className="text-xs sm:text-base">
          Made with Figma, ReactJS & TailwindCSS | Portfolio - Version 2.0
        </div>
      </div>
      <div className="font-mono flex justify-center items-center h-full py-4 bg-slate-900 text-white">
        <div className="text-xs sm:text-base">
          Designed & Built with ❤️ by George Isiguzo
        </div>
      </div>
    </div>
  );
}
