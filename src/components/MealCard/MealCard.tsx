"use client";

import { Bookmark, BookmarkPlus } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

type MealCardProps = {
  id: string;
  img: string;
  name: string;
  country: string;
  category?: string | null;
  variant?: string;
  className?: string;
};

const MealCard = ({
  id,
  img,
  name,
  category,
  country,
  variant = "grid",
  className = "",
}: MealCardProps) => {
  const [isSaved, setIsSaved] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // Al montar, revisa si esta receta ya estaba guardada
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedRecipes") || "[]");
    setIsSaved(saved.includes(name));
  }, [name]);

  function saveRecipe(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();

    const saved: string[] = JSON.parse(
      localStorage.getItem("savedRecipes") || "[]",
    );

    let updated: string[];

    if (saved.includes(name)) {
      updated = saved.filter((recipeName) => recipeName !== name);
    } else {
      updated = [...saved, name];
    }

    localStorage.setItem("savedRecipes", JSON.stringify(updated));
    setIsSaved(!isSaved);
  }

  function toggleExpanded(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setExpanded((prev) => !prev);
  }

  return (
    <li
      id={id}
      className={`relative rounded-lg shadow-md dark:shadow-slate-900/40 border border-gray-200 dark:border-none cursor-pointer dark:bg-emerald-900
          ${variant === "grid" ? "flex flex-col" : "flex flex-row items-center p-2 gap-4"} ${className}`}
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
        <p
          onClick={toggleExpanded}
          className={`relative z-20 mt-1 font-bold text-gray-700 dark:text-white ${
            className != "" ? "text-lg" : "text-xl"
          } ${
            expanded
              ? ""
              : `line-clamp-2 ${className != "" ? "min-h-[3.25rem]" : "min-h-[3.5rem]"}`
          }`}
        >
          {name}
        </p>
        <p className="mb-2 text-sm font-semibold text-slate-800 dark:text-slate-300">
          {country} {category ? -(<span>{category}</span>) : ""}
        </p>
      </div>
      <button
        onClick={saveRecipe}
        className="absolute z-20 top-2 right-2 flex h-10 cursor-pointer"
      >
        {isSaved ? (
          <BookmarkPlus
            strokeWidth={1}
            color="#065F46" // emerald-800
            fill="#D1FAE5" // emerald-100
            className="w-8 h-8 dark:drop-shadow-md"
          />
        ) : (
          <Bookmark
            strokeWidth={1}
            color="#374151" // gray-700
            fill="white"
            className="w-8 h-8 dark:drop-shadow-md"
          />
        )}
      </button>
    </li>
  );
};

export default MealCard;
