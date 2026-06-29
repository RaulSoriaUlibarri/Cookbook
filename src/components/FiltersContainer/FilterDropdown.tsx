"use client";

import { useState } from "react";

type FilterDropdownProps = {
  label: string;
  options: string[];
  handleChange: (value: string) => void;
};

const FilterDropdown = ({
  label,
  options,
  handleChange,
}: FilterDropdownProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative inline-block px-5"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span className="cursor-pointer px-3 py-2 rounded font-bold text-md hover:underline">
        {label.toUpperCase()}
      </span>
      {open && (
        <ul className="absolute left-0 mt-2 w-40 bg-white rounded shadow-sm z-5">
          {options.map((item) => (
            <li
              key={item}
              className="px-3 py-2 hover:bg-blue-100 cursor-pointer "
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
