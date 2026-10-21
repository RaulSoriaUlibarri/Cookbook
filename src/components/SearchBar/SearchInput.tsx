"use client";

import { X } from "lucide-react";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  className?: string;
  inputRef?: React.Ref<HTMLInputElement>;
};

const SearchInput = ({
  value = "",
  onChange,
  placeholder,
  className = "",
  inputRef,
}: SearchInputProps) => {
  return (
    <div className={`relative min-w-0 flex-grow ${className}`}>
      <input
        ref={inputRef}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-full w-full rounded-l-full border border-emerald-600 pl-3 pr-9 py-2 outline-none bg-transparent text-black dark:text-white placeholder-emerald-950/60 dark:placeholder-white [&::-webkit-search-cancel-button]:appearance-none dark:border-orange-600"
      />
      {value && (
        <button
          type="button"
          aria-label="Clear search"
          onClick={() => onChange("")}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-emerald-950 dark:text-gray-300 hover:opacity-70 dark:bg-orange-600"
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default SearchInput;
