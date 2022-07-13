import React from "react";
import logo from "../images/logo.png";

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
      <div className="flex h-full">
        <div className="w-1/2 sm:w-1/5 sm:block pl-8 flex justify-start items-center">
          <img src={logo} alt="george isiguzo" className="h-full" />
        </div>
        <div
          className="w-full dark:text-white hidden sm:w-3/5 sm:flex 
                    items-center justify-center gap-10 font-mono"
        >
          <span
            className="text-xl cursor-pointer"
            onClick={() => props.setNavIndex(1)}
          >
            Home
          </span>
          <span
            className="text-xl cursor-pointer"
            onClick={() => props.setNavIndex(2)}
          >
            About
          </span>
          <span
            className="text-xl cursor-pointer"
            onClick={() => props.setNavIndex(3)}
          >
            Projects
          </span>
          <span
            className="text-xl cursor-pointer"
            onClick={() => props.setNavIndex(4)}
          >
            Skill
          </span>
          <span
            className="text-xl cursor-pointer"
            onClick={() => props.setNavIndex(5)}
          >
            Contact
          </span>
        </div>
        <div className="w-full sm:hidden flex justify-end items-center pr-8 gap-10 font-mono">
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="relative">
          {on && (
            <div className="absolute bg-[#fff6ed] px-20 py-6 z-20 rounded-lg dark:text-white flex flex-col gap-10 font-mono">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
              <span
                className="text-xl cursor-pointer"
                onClick={() => props.setNavIndex(1)}
              >
                Home
              </span>
              <span
                className="text-xl cursor-pointer"
                onClick={() => props.setNavIndex(2)}
              >
                About
              </span>
              <span
                className="text-xl cursor-pointer"
                onClick={() => props.setNavIndex(3)}
              >
                Projects
              </span>
              <span
                className="text-xl cursor-pointer"
                onClick={() => props.setNavIndex(4)}
              >
                Skill
              </span>
              <span
                className="text-xl cursor-pointer"
                onClick={() => props.setNavIndex(5)}
              >
                Contact
              </span>
            </div>
          )}
        </div>
        <div className="flex md:justify-center items-center sm:w-1/5 pr-4">
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
      </div>
    </div>
  );
}
