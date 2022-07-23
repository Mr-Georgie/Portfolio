import React from "react";
import useNavigation from "../hooks/useNavigation";
import ProjectOne from "../components/Projects/ProjectOne";
import ProjectTwo from "../components/Projects/ProjectTwo";
import ProjectThree from "../components/Projects/ProjectThree";

import { Transition } from "@headlessui/react";

export default function Projects(props) {
  const { navIndex, setNavIndex } = useNavigation(1);

  return (
    <div className="px-10 py-8 xl:px-24">
      <h1 className="text-xl sm:text-[28px] font-extrabold text-custom-red pb-8 lg:pb-0">
        Some Notable Projects
      </h1>
      <Transition
        show={navIndex === 1}
        enter="transition ease-in-out duration-1000 transform"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in-out duration-500 transform"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <ProjectOne />
      </Transition>

      <Transition
        show={navIndex === 2}
        enter="transition ease-in-out duration-1000 transform"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in-out duration-500 transform"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <ProjectTwo />
      </Transition>

      <Transition
        show={navIndex === 3}
        enter="transition ease-in-out duration-1000 transform"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in-out duration-500 transform"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <ProjectThree />
      </Transition>
      <div className="mt-6 flex flex-col lg:flex-row justify-between">
        <div className="flex">
          <button
            onClick={() => setNavIndex(1)}
            className={`${
              navIndex === 1 ? "text-white bg-custom-red" : "text-custom-red"
            } 
            flex items-center border-slate-800 dark:border-white border p-2 sm:py-4 sm:px-8 gap-5`}
          >
            <span className="font-mono text-sm sm:text-md lg:text-base">
              Project 01
            </span>
          </button>
          <button
            onClick={() => setNavIndex(2)}
            className={`${
              navIndex === 2 ? "text-white bg-custom-red" : "text-custom-red"
            } 
            flex items-center border-slate-800 dark:border-white border p-2 sm:py-4 sm:px-8 gap-5`}
          >
            <span className="font-mono text-sm sm:text-md lg:text-base">
              Project 02
            </span>
          </button>
          <button
            onClick={() => setNavIndex(3)}
            className={`${
              navIndex === 3 ? "text-white bg-custom-red" : "text-custom-red"
            } 
            flex items-center border-slate-800 dark:border-white border p-2 sm:py-4 sm:px-8 gap-5`}
          >
            <span className="font-mono text-sm sm:text-md lg:text-base">
              Project 03
            </span>
          </button>
        </div>
        <div className="flex flex-col-reverse gap-4 lg:flex-row justify-between pt-6 lg:gap-20 lg:pt-0">
          <div className="">
            <button
              onClick={() => props.navHandler("previous")}
              className="flex bg-custom-red text-white border-slate-800 dark:border-white border py-4 px-8 gap-5"
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
          <div className="">
            <button
              onClick={() => props.navHandler("next")}
              className="flex bg-custom-blue text-white border-slate-800 dark:border-white border py-4 px-8 gap-5"
            >
              <span className="font-mono">See my skills</span>
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
    </div>
  );
}
