"use client";

import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper";
import MobileNav from "./MobileNav";
import ThemeToggle from "../ThemeToggle";
import ProfileClient from "../ProfileClient";
import { CookingPot, ChefHat, LogIn, LogOut } from "lucide-react";

const NavBar = () => {
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState<string>("");

  return (
    <>
      <nav className="sticky inset-x-0 top-0 z-30 w-full bg-white/75 backdrop-blur-lg transition-all text-gray-600 text-sm dark:bg-black dark:text-white">
        <MaxWidthWrapper className="w-full max-w-none md:px-0">
          <div className="flex h-14 items-center justify-between md:justify-between px-5 ">
            <div className="flex items-center">
              <Link
                href="/"
                className="flex mr-4 z-40 text-xl md:text-3xl font-semibold hover:cursor-pointer"
              >
                <span>Mosha's recipes</span>
              </Link>

              <div className="hidden sm:flex text-sm">
                <Link
                  onClick={() => setActiveTab("tab1")}
                  href="/directory"
                  className={`h-[52px] px-3 flex items-center leading-6 hover:border-b-2 hover:border-customPurple hover:text-customPurple ${
                    activeTab === "tab1"
                      ? "text-customPurple font-bold border-b-2 border-customPurple"
                      : "font-semibold"
                  } `}
                >
                  <CookingPot
                    className="mr-2 hover:text-customPurple"
                    size={20}
                  />
                  Recipes
                </Link>
                <Link
                  onClick={() => setActiveTab("tab2")}
                  href="/myRecipes"
                  className={`h-[52px] px-3  flex items-center leading-6 hover:border-b-2 hover:border-customPurple hover:text-customPurple  ${
                    activeTab === "tab2"
                      ? "text-customPurple font-bold  border-b-2 border-customPurple"
                      : "font-semibold"
                  } `}
                >
                  <ChefHat className="mr-2 hover:text-customPurple" size={20} />
                  My Recipes
                </Link>
              </div>
            </div>
            <MobileNav isAuth={false} />
            <div className="flex justify-end items-center w-auto">
              <ThemeToggle />
              <ProfileClient />
              {user ? (
                <Link
                  onClick={() => setActiveTab("tab3")}
                  href="/api/auth/logout"
                  className={`h-[52px] px-5 flex items-center leading-6 hover:text-customPurple ${
                    activeTab === "tab3"
                      ? "text-customPurple font-semibold border-customPurple"
                      : "font-semibold"
                  }`}
                >
                  <LogOut className="mr-2 hover:text-customPurple" size={20} />
                  Log out
                </Link>
              ) : (
                <Link
                  onClick={() => setActiveTab("tab3")}
                  href="/api/auth/login"
                  className={`h-[52px] px-5 font-semibold flex items-center leading-6 hover:border-b-2 hover:border-customPurple hover:text-customPurple hover:font-bold ${
                    activeTab === "tab3"
                      ? "text-customPurple font-bold border-customPurple"
                      : ""
                  } `}
                >
                  <LogIn className="mr-2 hover:text-customPurple" size={20} />
                  Sign in
                </Link>
              )}
            </div>
          </div>
        </MaxWidthWrapper>
      </nav>
    </>
  );
};

export default NavBar;