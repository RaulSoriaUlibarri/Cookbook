"use client";

import { Search } from "lucide-react";

type SearchBarProps = {
  query: string;
  variant: string;
};

const SearchBar = ({ query, variant }: SearchBarProps) => {
  return (
    <>
      <div className="flex justify-center ">
        <input
          type="search"
          placeholder="Search recipe or ingredient..."
          className="hidden md:rounded-full"
        />
        <div className="bg-emerald-600 hover:bg-emerald-700">
          <Search />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
