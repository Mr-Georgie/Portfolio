import React from "react";

export default function Home(props) {
  return (
    <div className="mt-20 font-mono" id="home">
      <div className="px-10 py-20 xl:px-24">
        <h1 className="text-xl sm:text-[28px] dark:text-white">
          Hi there👋, I'm
        </h1>
        <h1 className="font-bold text-7xl sm:text-[120px] dark:text-white">
          Georgie
        </h1>
        <h6 className="text-4xl mt-6 dark:text-white">A Software Engineer</h6>
        <h6 className="text-xl mt-6 dark:text-white">
          I get motivated building products that improves lives and thrive on
          user feedback for constant improvement. Don't take my word for it;{" "}
          <a
            className="text-custom-blue hover:text-custom-red"
            href="#experience"
          >
            see what I do at my current job
          </a>
        </h6>

        <div className="mt-10">
          <button className="flex btn-color py-4 px-8 gap-5">
            <span className="font-mono">Download CV</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 animate-bounce"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex justify-end mt-2 px-10">
        <a
          className="flex border-slate-800 dark:border-white text-custom-blue hover:text-custom-red animate-pulse"
          href="#experience"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
            />
          </svg>

          <span className="font-mono text-sm">Scroll to Experiences</span>
        </a>
      </div>
    </div>
  );
}
