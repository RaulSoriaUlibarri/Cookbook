"use client";

import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import SearchInput from "./SearchInput";

type SearchBarProps = {
  onSearch?: (query: string) => void;
  placeholder?: string;
};

const SearchBar = ({
  onSearch,
  placeholder = "Search recipe...",
}: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const mobileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isMobileOpen) {
      mobileInputRef.current?.focus();
    }
  }, [isMobileOpen]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSearch?.(query);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") {
      setIsMobileOpen(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="hidden md:flex w-full max-w-md">
        <SearchInput
          value={query}
          onChange={setQuery}
          placeholder={placeholder}
        />
        <button
          type="submit"
          aria-label="Search"
          className="rounded-r-full pl-2 pr-3 py-1 bg-emerald-600 hover:bg-emerald-700 hover:cursor-pointer"
        >
          <Search className="text-white" />
        </button>
      </form>

      <div className="flex md:hidden items-center">
        {isMobileOpen ? (
          <form
            onSubmit={handleSubmit}
            onKeyDown={handleKeyDown}
            className="flex w-full"
          >
            <SearchInput
              value={query}
              onChange={setQuery}
              placeholder={placeholder}
            />
            <button
              type="button"
              aria-label="Close search"
              onClick={() => setIsMobileOpen(false)}
              className="rounded-r-full px-3 py-1 bg-emerald-600 hover:bg-emerald-700 hover:cursor-pointer"
            >
              <X className="text-white h-5 w-5" />
            </button>
          </form>
        ) : (
          <button
            type="button"
            aria-label="Open search"
            onClick={() => setIsMobileOpen(true)}
            className="p-2 rounded-full bg-emerald-600 hover:bg-emerald-700 hover:cursor-pointer"
          >
            <Search className="text-white h-5 w-5" />
          </button>
        )}
      </div>
    </>
  );
};

export default SearchBar;
