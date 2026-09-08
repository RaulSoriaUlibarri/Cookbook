"use client";

import { Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div className="h-[384px] flex flex-col justify-center text-center ">
        <h3 className="text-3xl md:text-5xl text-emerald-950 font-lexend font-bold py-5">
          Your recipes, your way
        </h3>
        <p className="text-lg py-5 mb-5">
          Log in to personalize your culinary journey.
        </p>
        <button className="w-fit mx-auto text-lg leading-7 text-white bg-emerald-950 rounded-md py-2 px-8 hover:bg-emerald-800 hover:cursor-pointer">
          Join now
        </button>
      </div>
      <div className="w-full h-auto px-10 border-t border-t-gray-200 dark:border-none">
        <div className="flex justify-between p-5 text-center items-baseline">
          <h3 className=" text-xl font-bold ">Mosha's recipes</h3>
          <div className="flex justify-center text-gray-600 text-sm ">
            Privacy - Terms - About Us
          </div>
          <div className="flex ">
            <Instagram className="m-2" />
            <Twitter className="m-2" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
