import React from "react";

export default function About(props) {
  return (
    <div className="px-10 py-8 xl:px-24">
      <h1 className="text-xl sm:text-[28px] font-extrabold text-custom-red pb-8 lg:pb-0">
        About Me
      </h1>
      <div className="flex flex-col-reverse sm:flex-row justify-center h-full gap-6">
        <div className="w-full py-4 md:w-1/2">
          <h1 className="font-lobster text-2xl sm:text-3xl md:text-4xl lg:text-[80px] md:mb-12 text-custom-blue">
            Who is Georgie?
          </h1>
          <p className="dark:text-white">
            <span
              className="my-2 block sm:text-sm lg:text-base first-line:uppercase first-line:tracking-widest
              first-letter:text-7xl first-letter:font-bold first-letter:font-lobster
              first-letter:mr-3 first-letter:float-left font-medium"
            >
              A Junior Web Developer who loves building interactive web apps
              from beautiful Figma designs.
            </span>
            <span className="my-2 block sm:text-sm lg:text-base">
              My interest in coding started back in 2016 when I did a compulsory
              college course in Java programming. That was when I realised that
              building things that live in computers was my life's purpose 😅
            </span>
            <span className="my-2 block sm:text-sm lg:text-base">
              I'm currently seeking to secure a role as a ReactJS developer at a
              firm where I can do my best work while learning and growing.
            </span>
          </p>
          <div className="mt-6">
            <button
              onClick={() => props.navHandler("next")}
              className="flex bg-custom-red text-white border-slate-800 dark:border-white border-r border-t py-4 px-8 gap-5"
            >
              <span className="font-mono">See my projects</span>
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
          <div className="mt-6">
            <button
              onClick={() => props.navHandler("previous")}
              className="flex bg-custom-blue text-white border-slate-800 dark:border-white border-l border-t py-4 px-8 gap-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <span className="font-mono">Go back</span>
            </button>
          </div>
        </div>
        <div
          className="w-full sm:pt-4 md:w-1/2" //border border-slate-300
        >
          <div className="flex justify-center">
            <div
              className="square-img relative w-[100%] pb-[100%] md:w-[90%] md:pb-[90%] lg:w-[85%] lg:pb-[85%] xl:w-[65%] xl:pb-[65%]
              bg-center bg-no-repeat bg-cover rounded-xl"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
