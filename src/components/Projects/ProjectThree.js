import React from "react";
import ideas from "../../images/ideas.gif";

export default function ProjectThree(props) {
  return (
    <div className="flex flex-col md:flex-row-reverse gap-5">
      <div className="md:w-1/2">
        <div className="aspect-w-16 aspect-h-9">
          <img className="w-full" src={ideas} alt="" />
        </div>
      </div>
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-5xl lg:text-[60px] xl:text-[100px] text-custom-blue font-lobster">
          Ideas
        </h2>
        <p className="dark:text-white pt-4">
          <span className="my-2 block sm:text-sm lg:text-base">
            Ideas For Geeks is a fictional online community where like minded
            people share ideas for softwares they would love to create
          </span>
        </p>
        <p className="dark:text-white">
          <span className="my-2 block sm:text-sm lg:text-base font-bold">
            Features
          </span>
          <span className="my-2 block sm:text-sm lg:text-base">
            Dark theme, Search {"&"} Filter
          </span>
        </p>
        <p className="dark:text-white">
          <span className="my-2 block sm:text-sm lg:text-base font-bold">
            Built With
          </span>
          <span className="my-2 block sm:text-sm lg:text-base">
            ReactJS, React Router, TailwindCSS Appwrite, DigitalOcean, Docker{" "}
            {"&"} HeadlessUI
          </span>
        </p>
        <p className="flex gap-3 dark:text-white">
          <span className="my-2 block sm:text-sm lg:text-base font-bold">
            Github Link {"&"} Preview
          </span>
          <a
            href="https://github.com/Mr-Georgie/ideas"
            className="my-2 mr-3 block sm:text-sm lg:text-base underline text-custom-blue"
          >
            Repo
          </a>
          <a
            href="http://ideasforgeeks.netlify.app/"
            className="my-2 block sm:text-sm lg:text-base underline text-custom-blue"
          >
            Live
          </a>
        </p>
      </div>
    </div>
  );
}
