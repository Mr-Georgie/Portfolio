import React from "react";
import typathon from "../../images/typathon-ui4.gif";

export default function ProjectContent() {
  return (
    <div className="flex flex-col md:flex-row-reverse gap-5">
      <div className="md:w-1/2">
        <div className="aspect-w-16 aspect-h-9">
          <img className="w-full" src={typathon} alt="" />
        </div>
      </div>
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-5xl lg:text-[60px] xl:text-[100px] text-custom-blue font-lobster">
          Typathon
        </h2>
        <p className="dark:text-white pt-4">
          <span className="my-2 block sm:text-sm lg:text-base">
            The ultimate speed typing game (still in development)
          </span>
        </p>
        <p className="dark:text-white">
          <span className="my-2 block sm:text-sm lg:text-base font-bold">
            Features
          </span>
          <span className="my-2 block sm:text-sm lg:text-base">
            Dark {"&"} Light themes, Sound (SFX), Database to save username and
            highscores
          </span>
        </p>
        <p className="dark:text-white">
          <span className="my-2 block sm:text-sm lg:text-base font-bold">
            Built With
          </span>
          <span className="my-2 block sm:text-sm lg:text-base">
            ReactJS, TailwindCSS, PlanetScale, {"&"} HeadlessUI
          </span>
        </p>
        <p className="dark:text-white">
          <span className="my-2 block sm:text-sm lg:text-base font-bold">
            Github Link {"&"} Preview
          </span>
          <a
            href="https://github.com/Mr-Georgie/typathon"
            className="my-2 block sm:text-sm lg:text-base underline text-custom-blue"
          >
            Repo
          </a>
        </p>
      </div>
    </div>
  );
}
