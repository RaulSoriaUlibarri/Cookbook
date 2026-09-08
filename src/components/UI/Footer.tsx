"use client";

import { Twitter, Instagram } from "lucide-react";
import Link from "next/link";

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
        <div className="flex justify-between text-center items-center">
          <Link href="/" className="hover:cursor-pointer">
            <img
              className="h-20 w-auto object-contain"
              src="/images/logo.png"
              alt="Logo"
            />
          </Link>
          <div className="flex justify-center text-gray-600 text-sm">
            Privacy - Terms - About Us
          </div>
          <div className="flex items-center gap-3">
            <Instagram className="h-8 w-8 text-gray-600 hover:text-emerald-600 transition-colors" />
            <Twitter className="h-8 w-8 text-gray-600 hover:text-emerald-600 transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
