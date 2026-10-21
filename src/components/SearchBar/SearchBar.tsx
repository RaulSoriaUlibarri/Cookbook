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
      <form
        onSubmit={handleSubmit}
        className="mx-4 hidden h-11 min-w-0 max-w-md flex-1 self-center sm:flex"
      >
        <SearchInput
          value={query}
          onChange={setQuery}
          placeholder={placeholder}
        />
        <button
          type="submit"
          aria-label="Search"
          className="flex shrink-0 items-center justify-center rounded-r-full bg-emerald-600 px-4 hover:cursor-pointer hover:bg-emerald-700 dark:bg-orange-600 dark:hover:bg-orange-700"
        >
          <Search className="size-5 text-white" />
        </button>
      </form>
      <div className="flex items-center sm:hidden">
        {isMobileOpen ? (
          <form
            onSubmit={handleSubmit}
            onKeyDown={handleKeyDown}
            className="flex h-11 w-full"
          >
            <SearchInput
              value={query}
              onChange={setQuery}
              placeholder={placeholder}
              inputRef={mobileInputRef}
            />
            <button
              type="button"
              aria-label="Close search"
              onClick={() => setIsMobileOpen(false)}
              className="flex shrink-0 items-center justify-center rounded-r-full bg-emerald-600 px-3 hover:cursor-pointer hover:bg-emerald-700 dark:bg-orange-600 dark:hover:bg-orange-700"
            >
              <X className="size-5 text-white" />
            </button>
          </form>
        ) : (
          <button
            type="button"
            aria-label="Open search"
            onClick={() => setIsMobileOpen(true)}
            className="rounded-full bg-emerald-600 p-2 hover:cursor-pointer hover:bg-emerald-700 dark:bg-orange-600 dark:hover:bg-orange-700"
          >
            <Search className="size-5 text-white" />
          </button>
        )}
      </div>
    </>
  );
};

export default SearchBar;
