import React from "react";
import { Transition } from "@headlessui/react";

import useToggle from "../hooks/useToggle";

export default function Navbar(props) {
  const { on: onDarkMode, toggler: darkModeToggler } = useToggle(false);
  const { on, toggler } = useToggle(false);

  const themeToggler = () => {
    darkModeToggler();
    document.documentElement.classList.toggle("dark"); // this add or removes the dark class of the html document
  };
  return (
    <div className="w-full border-y border-slate-300 dark:border-slate-800 h-full">
      <div className="flex h-full px-8 sm:px-0">
        <div className="flex md:justify-center items-center sm:w-1/5">
          <div className="bg-black/[.5] rounded-full p-2">
            {onDarkMode && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                onClick={themeToggler}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
            {!onDarkMode && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                onClick={themeToggler}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </div>
        </div>
        <div
          className="w-full dark:text-white hidden sm:w-3/5 sm:flex 
                    items-center justify-center gap-10 font-mono text-xs sm:text-sm lg:text-xl"
        >
          <span
            className={`${
              props.navIndex === 1 ? "text-custom-red" : ""
            } cursor-pointer hover:text-custom-red`}
            onClick={() => props.setNavIndex(1)}
          >
            Home
          </span>
          <span
            className={`${
              props.navIndex === 2 ? "text-custom-red" : ""
            } cursor-pointer hover:text-custom-red`}
            onClick={() => props.setNavIndex(2)}
          >
            About
          </span>
          <span
            className={`${
              props.navIndex === 3 ? "text-custom-red" : ""
            } cursor-pointer hover:text-custom-red`}
            onClick={() => props.setNavIndex(3)}
          >
            Projects
          </span>
          <span
            className={`${
              props.navIndex === 4 ? "text-custom-red" : ""
            } cursor-pointer hover:text-custom-red`}
            onClick={() => props.setNavIndex(4)}
          >
            Skill
          </span>
          <span
            className={`${
              props.navIndex === 5 ? "text-custom-red" : ""
            } cursor-pointer hover:text-custom-red`}
            onClick={() => props.setNavIndex(5)}
          >
            Contact
          </span>
        </div>
        <div className="w-full sm:hidden flex justify-end items-center gap-10 font-mono">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer dark:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            onClick={toggler}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="relative">
          <Transition
            show={on}
            enter="transition ease-in-out duration-700 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-500 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
            className="fixed top-0 left-0 w-full h-full bg-[#fff6ed] px-20 py-6 z-20 
                 dark:text-white flex flex-col gap-10 font-mono shadow-md"
          >
            <span className="flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                onClick={toggler}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
            <div className="flex flex-col items-center gap-6">
              <span
                className={`${
                  props.navIndex === 1 ? "text-custom-red" : ""
                } cursor-pointer text-2xl hover:text-custom-red`}
                onClick={() => [props.setNavIndex(1), toggler()]}
              >
                Home
              </span>
              <span
                className={`${
                  props.navIndex === 2 ? "text-custom-red" : ""
                } cursor-pointer text-2xl hover:text-custom-red`}
                onClick={() => [props.setNavIndex(2), toggler()]}
              >
                About
              </span>
              <span
                className={`${
                  props.navIndex === 3 ? "text-custom-red" : ""
                } cursor-pointer text-2xl hover:text-custom-red`}
                onClick={() => [props.setNavIndex(3), , toggler()]}
              >
                Projects
              </span>
              <span
                className={`${
                  props.navIndex === 4 ? "text-custom-red" : ""
                } cursor-pointer text-2xl hover:text-custom-red`}
                onClick={() => [props.setNavIndex(4), toggler()]}
              >
                Skill
              </span>
              <span
                className={`${
                  props.navIndex === 5 ? "text-custom-red" : ""
                } cursor-pointer text-2xl hover:text-custom-red`}
                onClick={() => [props.setNavIndex(5), toggler()]}
              >
                Contact
              </span>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  );
}
