"use client";

import { Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div className="h-[384px] flex flex-col justify-center text-center ">
        <h3 className="text-3xl md:text-5xl text-customPurple font-lexend font-bold py-5">
          Join the Recipe Revolution
        </h3>
        <p className="text-lg text-gray-600 py-5 mb-5">
          Unlock a world of healthy and delicious recipes. Sign up now to start
          your culinary adventure!
        </p>
        <button className="w-fit mx-auto text-lg leading-7 text-white bg-customPurple rounded-md py-2 px-8 hover:bg-customPurple600">
          Sign Up
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
