"use client";

import Link from "next/link";
import { useState } from "react";

type FilterDropdownProps = {
  label: string;
  arialLabel: string;
  options: string[];
  handleChange: (value: string) => void;
  href: string;
};

const FilterDropdown = ({
  label,
  arialLabel,
  options,
  handleChange,
  href,
}: FilterDropdownProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative inline-block z-50"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={href}
        aria-label={arialLabel}
        className="
      block
      px-5
      py-2
      rounded
      font-bold
      text-md
      hover:underline
      hover:text-emerald-600
      dark:text-gray-200
      dark:hover:text-orange-400
    "
      >
        {label.toUpperCase()}
      </Link>
      {open && (
        <ul className="absolute left-0 w-40 bg-white rounded shadow-sm z-50 dark:bg-black">
          {options.map((item) => (
            <li
              key={item}
              className="px-3 py-2 hover:bg-blue-100 dark:hover:bg-gray-500 cursor-pointer dark:hover:text-orange-400"
              onClick={() => handleChange(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterDropdown;
