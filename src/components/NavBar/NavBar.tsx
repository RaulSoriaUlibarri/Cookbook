"use client";

// import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { MobileNav, ThemeToggle, ProfileClient } from "./index";
import SearchBar from "../SearchBar/SearchBar";
import { CookingPot, ChefHat } from "lucide-react";
import NavLink from "./NavLink";
import FiltersContainer from "../FiltersContainer/FiltersContainer";

const NavBar = () => {
  // const { user } = useUser();
  return (
    <header className="mx-auto w-full md:w-4/5 bg-transparent text-sm text-gray-600 backdrop-blur-lg transition-all dark:text-white">
      <MaxWidthWrapper className="w-full max-w-none md:px-0">
        <div className="flex h-20 justify-between sm:px-5 md:h-23">
          <div className="flex items-center">
            <Link href="/" className="mr-4 z-40 shrink-0 hover:cursor-pointer">
              <img
                className="h-20 w-auto md:h-23"
                src="/images/logo.png"
                alt="Site logo"
              />
            </Link>
          </div>
          <SearchBar />
          <div className="flex pl-2 sm:pl-0 h-full w-auto items-center justify-end">
            <div className="hidden h-full items-center text-sm sm:flex">
              <NavLink
                label="Favorites"
                route="/myRecipes"
                icon={<ChefHat className="mr-2" size={20} />}
              />
              <ThemeToggle />
              <ProfileClient />
            </div>
            <MobileNav isAuth={false} />
          </div>
        </div>
        <div className="hidden sm:block py-3">
          <FiltersContainer />
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default NavBar;
