"use client";

import { Bookmark, BookmarkPlus } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Toast } from "@/components";
import { useFavoritesStore } from "@/stores";

type MealCardProps = {
  id: string;
  img: string;
  name: string;
  country?: string | null;
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
  const [expanded, setExpanded] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  const isFavorite = useFavoritesStore((state) =>
    state.favoriteIds.includes(id),
  );

  function toggleExpanded(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setExpanded((prev) => !prev);
  }

  return (
    <>
      <li
        id={id}
        className={`relative overflow-hidden rounded-lg cursor-pointer
          bg-white border border-gray-200 shadow-md
          dark:bg-slate-800 dark:border-slate-700 dark:shadow-slate-900/40
          transition duration-200 hover:-translate-y-1 hover:shadow-lg
          dark:hover:border-orange-500/50
          ${variant === "grid" ? "flex flex-col border-b-2 border-b-emerald-600 dark:border-b-orange-500" : "flex flex-row items-center p-2 gap-4"} ${className}`}
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
            className={`object-cover w-full h-full ${variant === "grid" ? "" : "rounded-lg"}`}
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
          <p className="mb-2 text-sm font-semibold text-slate-600 dark:text-slate-400">
            {[country, category].filter(Boolean).join(" - ")}
          </p>
        </div>
        <button
          onClick={() => toggleFavorite(id)}
          className={`absolute z-20 ${variant === "grid" ? "top-1 right-1" : "top-2 right-2"} flex h-10 hover:cursor-pointer`}
        >
          {isFavorite ? (
            <Bookmark
              strokeWidth={2}
              className="w-10 h-10 text-emerald-700 fill-emerald-700 dark:drop-shadow-md dark:text-orange-500 dark:fill-orange-500"
            />
          ) : (
            <BookmarkPlus
              strokeWidth={2}
              className="w-10 h-10 text-emerald-600 hover:text-emerald-700 hover:fill-emerald-700 dark:text-orange-400 dark:drop-shadow-md dark:hover:text-orange-500 dark:hover:fill-orange-500"
            />
          )}
        </button>
      </li>
      <Toast
        message="Recipe added to favorites"
        show={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
};

export default MealCard;
