"use client";

import { Bookmark, BookmarkPlus } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

type MealCardProps = {
  id: string;
  img: string;
  name: string;
  country: string;
  category: string | null;
  variant?: string;
};

const MealCard = ({
  id,
  img,
  name,
  category,
  country,
  variant = "grid",
}: MealCardProps) => {
  const [open, setOpen] = useState(false);

  function saveRecipe() {
    //In progress
  }

  return (
    <li
      id={id}
      className={`relative rounded-lg shadow-md border border-gray-200 dark:border-slate-500 cursor-pointer 
          ${variant === "grid" ? "flex flex-col" : "flex flex-row items-center p-2 gap-4"}`}
    >
      <Link href={`/recipe/${id}`} className="absolute inset-0 z-10"></Link>
      <div
        className={
          variant === "grid"
            ? "max-h-[250px] w-full"
            : "w-40 h-28 flex-shrink-0"
        }
      >
        <img
          className={`object-cover 
            ${variant === "grid" ? "rounded-tl-lg rounded-tr-lg w-full h-full" : "rounded-lg  w-full h-full"}`}
          src={img}
          alt={name}
        />
      </div>

      <div
        className={
          variant === "grid"
            ? "p-2 my-auto"
            : "flex flex-col justify-between flex-1"
        }
      >
        <p className="mt-1 text-xl text-gray-700 font-bold">{name}</p>
        <p className="mb-2 text-sm font-semibold text-slate-800">
          {country} - <span>{category}</span>
        </p>
      </div>
      <button
        className={`absolute ${variant === "grid" ? "top-3 right-3" : "top-2 right-2"} flex h-10 cursor-pointer`}
      >
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          {!open ? (
            <Bookmark
              fill="white"
              strokeWidth={0.2}
              color="black"
              onClick={() => saveRecipe()}
              className="w-8 h-8"
            />
          ) : (
            <BookmarkPlus
              strokeWidth={0.8}
              color={"#6D31EDFF"}
              onClick={() => saveRecipe()}
              className="w-8 h-8"
              fill="white"
            />
          )}
        </div>
      </button>
    </li>
  );
};

export default MealCard;
