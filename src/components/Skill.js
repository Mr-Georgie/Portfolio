import React from "react";
import html from "../images/html-5.png";
import css from "../images/css3.png";
import js from "../images/javascript.png";
import react from "../images/react.png";
import tailwindcss from "../images/tailwindcss.png";
import bootstrap from "../images/bootstrap.png";
import python from "../images/python.png";
import graphl from "../images/graphql.png";
import django from "../images/django.png";
import node from "../images/node-js.png";
import mysql from "../images/mysql-logo.png";

export default function Skill(props) {
  return (
    <div className="px-10 py-8 xl:px-24">
      <h1 className="text-xl sm:text-[28px] font-extrabold text-custom-red pb-8 lg:pb-0">
        Front-End
      </h1>
      <div className="flex flex-wrap items-center h-full gap-6 dark:text-white mb-6">
        <div className="flex flex-col items-center p-3 hover:shadow-lg">
          <img src={html} alt="html" className="w-1/2" />
          <span className="font-mono font-bold">HTML</span>
        </div>
        <div className="flex flex-col items-center p-3 hover:shadow-lg">
          <img src={css} alt="css" className="w-1/2" />
          <span className="font-mono font-bold">CSS</span>
        </div>
        <div className="flex flex-col items-center p-3 hover:shadow-lg">
          <img src={js} alt="js" className="w-1/2" />
          <span className="font-mono font-bold">JavaScript</span>
        </div>
        <div className="flex flex-col items-center p-3 hover:shadow-lg">
          <img src={react} alt="react" className="w-1/2" />
          <span className="font-mono font-bold">ReactJS</span>
        </div>
        <div className="flex flex-col items-center p-3 hover:shadow-lg">
          <img src={tailwindcss} alt="tailwindcss" className="w-1/2" />
          <span className="font-mono font-bold">TailwindCSS</span>
        </div>
        <div className="flex flex-col items-center p-3 hover:shadow-lg">
          <img src={bootstrap} alt="bootstrap" className="w-1/2" />
          <span className="font-mono font-bold">Bootstrap</span>
        </div>
      </div>
      <h1 className="text-xl sm:text-[28px] font-extrabold text-custom-blue pb-8 lg:pb-0">
        Back-End
      </h1>
      <div className="flex flex-wrap items-center h-full gap-6 dark:text-white mb-6">
        <div className="flex flex-col items-center p-3 hover:shadow-lg">
          <img src={python} alt="python" className="w-1/2" />
          <span className="font-mono font-bold">Python</span>
        </div>
        <div className="flex flex-col items-center p-3 hover:shadow-lg">
          <img src={django} alt="django" className="w-1/2" />
          <span className="font-mono font-bold">Django</span>
        </div>
        <div className="flex flex-col items-center p-3 hover:shadow-lg">
          <img src={node} alt="nodejs" className="w-1/2" />
          <span className="font-mono font-bold">NodeJS</span>
        </div>
        <div className="flex flex-col items-center p-3 hover:shadow-lg">
          <img src={graphl} alt="graphql" className="w-1/2" />
          <span className="font-mono font-bold">GraphQL</span>
        </div>
        <div className="flex flex-col items-center p-3 hover:shadow-lg">
          <img src={mysql} alt="MySQL" className="w-1/2" />
          <span className="font-mono font-bold">MySQL</span>
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-16">
        <div>
          <h1 className="text-xl sm:text-[28px] font-extrabold text-custom-red pb-8 lg:pb-0">
            Others
          </h1>
          <div className="flex justify-center h-full gap-6">
            <div className="w-full py-4">
              <p className="dark:text-white">
                <span className="my-2 block sm:text-sm lg:text-base font-mono font-bold">
                  Figma, Git, Appwrite, Digital Ocean, Linode, Docker, Hasura,
                  NPM, PIP
                </span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-xl sm:text-[28px] font-extrabold text-custom-blue pb-8 lg:pb-0">
            Technical Writing
          </h1>
          <div className="flex justify-center h-full gap-6">
            <div className="w-full py-4">
              <div className="flex gap-6 dark:text-white">
                <a
                  href="https://footprints.hashnode.dev/"
                  className="my-2 block sm:text-sm lg:text-base font-mono font-bold text-custom-blue underline"
                >
                  My Programming Footprints
                </a>
                <a
                  href="http://thereactnewbie.xyz/"
                  className="my-2 block sm:text-sm lg:text-base font-mono font-bold text-custom-blue underline"
                >
                  The React Newbie
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full">
        <div className="mt-6">
          <button
            onClick={() => props.navHandler("next")}
            className="flex bg-custom-blue text-white border-slate-800 dark:border-white border-r border-t py-4 px-8 gap-5"
          >
            <span className="font-mono">Hire Me!</span>
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
      <div className="pt-6">
        <button
          onClick={() => props.navHandler("previous")}
          className="flex bg-custom-red text-white border-slate-800 dark:border-white border-l border-t py-4 px-8 gap-5"
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
  );
}
