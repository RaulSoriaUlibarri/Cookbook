"use client";

import { Twitter, Instagram } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="h-[384px] flex flex-col justify-center text-center ">
        <h3 className="text-3xl md:text-5xl text-emerald-950 font-lexend font-bold py-5 dark:text-gray-400">
          Your recipes, your way
        </h3>
        <p className="text-lg py-5 mb-5 text-gray-800 dark:text-gray-200">
          Log in to personalize your culinary journey.
        </p>
        <a
          href="/auth/login"
          className="w-fit mx-auto text-lg leading-7 text-white bg-emerald-600 rounded-md py-2 px-8 hover:bg-emerald-700 hover:cursor-pointer dark:bg-orange-500 dark:hover:bg-orange-400"
        >
          Join now
        </a>
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
          <div className="flex justify-center text-gray-200 text-sm dark:text-white">
            Privacy - Terms - About Us
          </div>
          <div className="flex items-center gap-3">
            <Instagram className="h-8 w-8 text-gray-600 hover:cursor-pointer hover:text-emerald-600 transition-colors dark:text-orange-600 dark:hover:text-orange-400" />
            <Twitter className="h-8 w-8 text-gray-600 hover:cursor-pointer hover:text-emerald-600 transition-colors dark:text-orange-600 dark:hover:text-orange-400" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
