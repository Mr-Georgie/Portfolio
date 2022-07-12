import React from "react";
import useNavigation from "../hooks/useNavigation";
import ProjectOne from "../components/Projects/ProjectOne";
import ProjectTwo from "../components/Projects/ProjectTwo";
import ProjectThree from "../components/Projects/ProjectThree";

import { Transition } from "@headlessui/react";

export default function Projects(props) {
  const { navIndex, navHandler } = useNavigation(1);

  return (
    <div className="flex flex-col h-full">
      <div>
        {navIndex > 1 && (
          <svg
            onClick={() => navHandler("previous")}
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 animate-bounce cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
            />
          </svg>
        )}
      </div>

      <Transition
        show={navIndex === 4}
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
        show={navIndex === 4}
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
        show={navIndex === 4}
        enter="transition ease-in-out duration-1000 transform"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in-out duration-500 transform"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <ProjectThree navHandler={props.navHandler} />
      </Transition>

      <div>
        {navIndex < 3 && (
          <svg
            onClick={() => navHandler("next")}
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 animate-bounce cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
            />
          </svg>
        )}
      </div>
    </div>
  );
}
