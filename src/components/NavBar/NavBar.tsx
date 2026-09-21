"use client";

// import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { MobileNav, ThemeToggle, ProfileClient } from "./index";
import SearchBar from "../SearchBar/SearchBar";
import { CookingPot, ChefHat, LogIn, LogOut } from "lucide-react";
import NavLink from "./NavLink";

const NavBar = () => {
  // const { user } = useUser();

  return (
    <>
      <nav className="sticky w-2/3 inset-x-0 top-0 mx-auto flex items-center z-30  h-[80px] bg-transparent backdrop-blur-lg transition-all text-gray-600 text-sm dark:text-white">
        <MaxWidthWrapper className="w-full h-full max-w-none md:px-0">
          <div className="flex h-full items-center justify-between md:justify-between px-5 ">
            <div className="flex items-center max-w-[130px]">
              <Link
                href="/"
                className="flex mr-4 z-40 text-xl md:text-3xl font-semibold hover:cursor-pointer"
              >
                <img
                  className=" object-fill"
                  src="/images/logo.png"
                  alt="hero"
                />
              </Link>
            </div>

            <SearchBar />
            <div className="flex justify-end items-center w-auto h-full">
              <MobileNav isAuth={false} />
              <div className="hidden h-full items-center sm:flex text-sm">
                <NavLink
                  label="Recipes"
                  route="/directory"
                  icon={
                    <CookingPot
                      className="mr-2 hover:text-emerald-600"
                      size={20}
                    />
                  }
                />
                <NavLink
                  label="Favorites"
                  route="/myRecipes"
                  icon={
                    <ChefHat
                      className="mr-2 hover:text-emerald-600"
                      size={20}
                    />
                  }
                />
                <ThemeToggle />
              </div>
              {/* <ProfileClient /> */}
              {/* ...auth block unchanged... */}
            </div>
          </div>
        </MaxWidthWrapper>
      </nav>
    </>
  );
};

export default NavBar;
