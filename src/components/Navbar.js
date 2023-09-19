import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

import useToggle from "../hooks/useToggle";

export default function Navbar(props) {
  const [onDarkMode, setOnDarkMode] = useState(false);
  const { on, toggler } = useToggle(false);

  const themeToggler = (bool) => {
    // this add or removes the dark class of the html document
    // document.documentElement.classList.toggle("dark");

    if (bool) {
      document.documentElement.classList.add("dark");
      setOnDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setOnDarkMode(false);
    }
  };

  const [isScrolingToTop, setIsScrollingToTop] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    let prevHorizontalScroll = 0;

    const handleScroll = () => {
      const currentHorizontalScroll = window.scrollY;
      const isTop = currentHorizontalScroll === 0;

      const scrollingToTop = currentHorizontalScroll < prevHorizontalScroll;

      setIsScrollingToTop(scrollingToTop);
      setIsAtTop(isTop);

      prevHorizontalScroll = currentHorizontalScroll;
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isScrolingToTop ? "fixed z-50 sm:translate-y-0 sm:opacity-100" : ""
      } w-full bg-slate-50 dark:bg-[#222529] transition-opacity duration-500 ease-in-out ${
        !isAtTop ? "shadow-lg" : ""
      }`}
    >
      <div className="flex px-8 py-4 sm:px-0">
        <div className="flex md:justify-center items-center sm:w-1/5">
          {/* Toggler button */}
          <div
            className={`${
              onDarkMode
                ? "border-white transition-all duration-300"
                : "border-slate-800 transition-all duration-300"
            } border rounded-full py-1 px-2 flex gap-4`}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${
                  onDarkMode
                    ? "transition-colors bg-transparent hover:bg-white hover:text-black duration-300"
                    : "transition-colors bg-black/[.5] duration-300"
                } h-6 w-6 cursor-pointer rounded-full p-1 text-white`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                onClick={() => themeToggler(false)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${
                  onDarkMode
                    ? "transition-colors bg-white hover:bg-white duration-300"
                    : "transition-colors hover:bg-black/[.5] hover:text-white duration-300"
                } h-6 w-6 cursor-pointer rounded-full p-1 hover:text-black`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                onClick={() => themeToggler(true)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* nav */}
        <div
          className="w-full dark:text-white hidden sm:w-3/5 sm:flex 
                    items-center justify-center gap-10 font-mono text-xs sm:text-sm lg:text-xl"
        >
          <a
            href="#home"
            className={`${
              props.navIndex === 1 ? "text-custom-red" : ""
            } cursor-pointer hover:text-custom-red`}
            onClick={() => props.setNavIndex(1)}
          >
            Home
          </a>
          <a
            href="#experience"
            className={`${
              props.navIndex === 2 ? "text-custom-red" : ""
            } cursor-pointer hover:text-custom-red`}
            onClick={() => props.setNavIndex(2)}
          >
            Experience
          </a>
          <a
            href="#projects"
            className={`${
              props.navIndex === 3 ? "text-custom-red" : ""
            } cursor-pointer hover:text-custom-red`}
            onClick={() => props.setNavIndex(3)}
          >
            Projects
          </a>
          <a
            href="#others"
            className={`${
              props.navIndex === 4 ? "text-custom-red" : ""
            } cursor-pointer hover:text-custom-red`}
            onClick={() => props.setNavIndex(4)}
          >
            Hobby
          </a>
          <a
            href="#contact"
            className={`${
              props.navIndex === 5 ? "text-custom-red" : ""
            } cursor-pointer hover:text-custom-red`}
            onClick={() => props.setNavIndex(5)}
          >
            Contact
          </a>
        </div>
        {/* small nav hmabuger button */}
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
        {/* small nav content */}
        <div className="relative">
          <Transition
            show={on}
            enter="transition ease-in-out duration-700 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-500 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
            className="fixed top-0 left-0 w-full h-full bg-slate-50 dark:bg-[#222529] px-8 py-6 z-20 
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
              <a
                href="#home"
                className={`${
                  props.navIndex === 1 ? "text-custom-red" : ""
                } cursor-pointer text-2xl hover:text-custom-red`}
                onClick={() => props.setNavIndex(1)}
              >
                Home
              </a>
              <a
                href="#experience"
                className={`${
                  props.navIndex === 2 ? "text-custom-red" : ""
                } cursor-pointer text-2xl hover:text-custom-red`}
                onClick={() => props.setNavIndex(2)}
              >
                Experience
              </a>
              <a
                href="#projects"
                className={`${
                  props.navIndex === 3 ? "text-custom-red" : ""
                } cursor-pointer text-2xl hover:text-custom-red`}
                onClick={() => props.setNavIndex(3)}
              >
                Projects
              </a>
              <a
                href="#others"
                className={`${
                  props.navIndex === 4 ? "text-custom-red" : ""
                } cursor-pointer text-2xl hover:text-custom-red`}
                onClick={() => props.setNavIndex(4)}
              >
                Hobby
              </a>
              <a
                href="#contact"
                className={`${
                  props.navIndex === 5 ? "text-custom-red" : ""
                } cursor-pointer text-2xl hover:text-custom-red`}
                onClick={() => props.setNavIndex(5)}
              >
                Contact
              </a>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  );
}
