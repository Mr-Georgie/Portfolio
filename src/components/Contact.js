import React from "react";
import linkedin from "../images/linkedin.png";
import mail from "../images/new-post.png";
import twitter from "../images/twitter.png";
import resume from "../images/open-resume.png";
import github from "../images/github.png";

export default function Contact(props) {
  return (
    <div className="text-center px-10 py-8 xl:px-24">
      <h1 className="text-xl sm:text-[28px] font-extrabold text-custom-red pb-8 lg:pb-0">
        Let's Have a Chat
      </h1>
      <div className="flex justify-center flex-wrap items-center h-full gap-6 dark:text-white my-8">
        <div className="flex flex-col items-center p-3 hover:shadow-lg">
          <img src={mail} alt="email" className="" />
          <span className="font-mono font-bold">Email</span>
        </div>
        <div className="flex flex-col items-center p-3 hover:shadow-lg">
          <img src={linkedin} alt="linkedin" className="" />
          <span className="font-mono font-bold">LinkedIn</span>
        </div>
        <div className="flex flex-col items-center p-3 hover:shadow-lg">
          <img src={twitter} alt="twitter" className="" />
          <span className="font-mono font-bold">Twitter</span>
        </div>
        <a
          href="https://github.com/Mr-Georgie"
          className="flex flex-col items-center p-3 hover:shadow-lg"
        >
          <img src={github} alt="github" className="" />
          <span className="font-mono font-bold">Github</span>
        </a>
        <a
          href="https://drive.google.com/file/d/1k4WtNsms6_Bk32vW7tAxuG1HY_3FLXlQ/view?usp=sharing"
          className="flex flex-col items-center pt-6 pb-3 px-3 hover:shadow-lg"
        >
          <img src={resume} alt="react" className="" />
          <span className="font-mono font-bold">Download Resume</span>
        </a>
      </div>
      <div className="pt-6 flex justify-center">
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
