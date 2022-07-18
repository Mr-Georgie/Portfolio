import React from "react";
import movieLib from "../../images/movie-library.gif";

export default function ProjectTwo() {
  return (
    <div className="flex flex-col md:flex-row-reverse gap-5">
      <div className="md:w-1/2">
        <div className="aspect-w-16 aspect-h-9">
          <img className="w-full" src={movieLib} alt="" />
        </div>
      </div>
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-5xl lg:text-[60px] xl:text-[100px] text-custom-blue font-lobster">
          Movie Library
        </h2>
        <p className="dark:text-white pt-4">
          <span className="my-2 block sm:text-sm lg:text-base">
            A one click download app from popular movie download sites without
            the hassle of popups and ads
          </span>
        </p>
        <p className="dark:text-white">
          <span className="my-2 block sm:text-sm lg:text-base font-bold">
            Features
          </span>
          <span className="my-2 block sm:text-sm lg:text-base">
            Dark theme, Search {"&"} Filter, Proxy Server
          </span>
        </p>
        <p className="dark:text-white">
          <span className="my-2 block sm:text-sm lg:text-base font-bold">
            Built With
          </span>
          <span className="my-2 block sm:text-sm lg:text-base">
            ReactJS, Figma, Node/ExpressJS, Vanilla CSS {"&"} GeophieAPI
          </span>
        </p>
        <p className="flex gap-3 dark:text-white">
          <span className="my-2 block sm:text-sm lg:text-base font-bold">
            Github Link {"&"} Preview
          </span>
          <a
            href="https://github.com/Mr-Georgie/movie-library"
            className="my-2 mr-3 block sm:text-sm lg:text-base underline text-custom-blue"
          >
            Repo
          </a>
          <a
            href="https://moviee-library.netlify.app/"
            className="my-2 block sm:text-sm lg:text-base underline text-custom-blue"
          >
            Live
          </a>
        </p>
      </div>
    </div>
  );
}
