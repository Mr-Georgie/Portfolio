import React from "react";
import linkedin from "../images/linkedin.png";
import mail from "../images/new-post.png";
import twitter from "../images/twitter.png";
import resume from "../images/open-resume.png";
import github from "../images/github.png";

export default function ContactMe() {
  return (
    <div className="my-10 px-10 font-mono" id="contact">
      <div className="py-12 xl:px-24">
        <h1 className="text-3xl font-extrabold mb-8 dark:text-white pt-14">
          Let's Connect
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
          <div className="border border-slate-800 dark:bg-[#292d31] rounded dark:text-white pt-3 pb-8 flex flex-col items-center">
            <img src={mail} alt="email" className="" />

            <div>
              <p className="font-extrabold text-xs">George.isiguzo@yahoo.com</p>
            </div>
          </div>
          <div className="border border-slate-800 dark:bg-[#292d31] rounded dark:text-white pt-3 pb-8 flex flex-col items-center">
            <img src={linkedin} alt="email" className="" />

            <a
              href="https://www.linkedin.com/in/george-isiguzo-chinonye"
              className="hover:text-custom-red"
            >
              <p className="font-extrabold text-xs">LinkedIn</p>
            </a>
          </div>
          <div className="border border-slate-800 dark:bg-[#292d31] rounded dark:text-white pt-3 pb-8 flex flex-col items-center">
            <img src={twitter} alt="email" className="" />

            <a
              href="https://twitter.com/GeorgeIsiguzo"
              className="hover:text-custom-red"
            >
              <p className="font-extrabold text-xs">Twitter</p>
            </a>
          </div>
          <div className="border border-slate-800 dark:bg-[#292d31] rounded dark:text-white pt-3 pb-8 flex flex-col items-center">
            <img src={github} alt="email" className="" />

            <a
              href="https://github.com/Mr-Georgie"
              className="hover:text-custom-red"
            >
              <p className="font-extrabold text-xs">Github</p>
            </a>
          </div>
          <div className="border border-slate-800 dark:bg-[#292d31] rounded dark:text-white pt-3 pb-8 flex flex-col items-center">
            <img src={resume} alt="email" className="py-2" />

            <a
              href="https://drive.google.com/file/d/1Wqtg4PUP2HAPPzzwMzX4iwy6BRZwhVim/view?usp=drive_link"
              className="hover:text-custom-red"
            >
              <p className="font-extrabold text-xs">Download CV</p>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center sm:justify-end pt-16 px-10">
        <a
          className="flex border-slate-800 dark:border-white text-custom-blue hover:text-custom-red animate-pulse"
          href="#home"
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
              d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
            />
          </svg>

          <span className="font-mono text-sm">Scroll to top</span>
        </a>
      </div>
    </div>
  );
}
