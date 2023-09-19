import React from "react";

export default function Others(props) {
  return (
    <div className="my-40 px-10 font-mono" id="others">
      <div className="py-12 xl:px-24">
        <h1 className="text-3xl font-extrabold mb-8 dark:text-white">
          My Pastimes & Hobbies
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          <div className="border border-slate-800 dark:bg-[#292d31] rounded dark:text-white pt-3 pb-8 flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-36 h-36"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
              />
            </svg>

            <div>
              <p className="pl-3 font-extrabold pb-4">Blogging</p>
            </div>
            <div className="flex">
              <a
                className="pl-3 text-xs hover:text-custom-red"
                href="https://thereactnewbie.hashnode.dev/"
              >
                TheReactNewbie,
              </a>
              <a
                className="pl-3 text-xs hover:text-custom-red"
                href="https://footprints.hashnode.dev/"
              >
                Footprints
              </a>
            </div>
          </div>
          <div className="border border-slate-800 dark:bg-[#292d31] rounded dark:text-white pt-3 pb-8 flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-36 h-36"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>

            <div>
              <p className="pl-3 font-extrabold pb-4">Hackathons</p>
            </div>
            <div className="flex">
              <a
                className="pl-3 text-xs hover:text-custom-red"
                href="https://twitter.com/GeorgeIsiguzo"
              >
                DEV,
              </a>
              <a
                className="pl-3 text-xs hover:text-custom-red"
                href="https://twitter.com/GeorgeIsiguzo"
              >
                HASHNODE
              </a>
            </div>
          </div>
          <div className="border border-slate-800 dark:bg-[#292d31] rounded dark:text-white pt-3 pb-8 flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-36 h-36"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z"
              />
            </svg>

            <div>
              <p className="pl-3 font-extrabold pb-4">Video Games</p>
            </div>
            <div className="flex">
              <p className="pl-3 text-xs">FIFA 23,</p>
              <p className="pl-3 text-xs">PES 23</p>
            </div>
          </div>
          <div className="border border-slate-800 dark:bg-[#292d31] rounded dark:text-white pt-3 pb-8 flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-36 h-36"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
              />
            </svg>

            <div>
              <p className="pl-3 font-extrabold pb-4">
                Learning Foreign Language
              </p>
            </div>
            <div className="flex">
              <p className="pl-3 text-xs">German (Currently),</p>
              <p className="pl-3 text-xs">French (Next)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center sm:justify-end mt-2 px-10">
        <a
          className="flex border-slate-800 dark:border-white text-custom-blue hover:text-custom-red"
          href="#contact"
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

          <span className="font-mono text-sm">Now let's connect</span>
        </a>
      </div>
    </div>
  );
}
