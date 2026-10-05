"use client";

import { useState } from "react";
import SkeletonCard from "../MealCard/SkeletonCard";
import { LayoutList, Grid3X3 } from "lucide-react";

interface RecipesDisplaySkeletonProps {
  title?: string;
  skeletonCards?: number;
}

const RecipesDisplaySkeleton = ({
  title,
  skeletonCards = 24,
}: RecipesDisplaySkeletonProps) => {
  const [listLayout, setListLayout] = useState<"grid" | "list">("grid");

  return (
    <div className="mt-16">
      {title && (
        <h2 className="w-full font-lexend h-auto p-5 text-4xl text-center font-bold mb-5">
          {title}
        </h2>
      )}
      <div className="flex justify-between mb-10 max-w-15 ml-auto">
        <button
          className={
            listLayout === "grid"
              ? "cursor-pointer text-emerald-600"
              : "cursor-pointer hover:text-emerald-800"
          }
          onClick={() => setListLayout("grid")}
        >
          <Grid3X3 />
        </button>
        <button
          className={
            listLayout === "list"
              ? "cursor-pointer text-emerald-600"
              : "cursor-pointer hover:text-emerald-800"
          }
          onClick={() => setListLayout("list")}
        >
          <LayoutList />
        </button>
      </div>
      <ul
        className={
          listLayout === "grid"
            ? "grid grid-cols-1 gap-8 mb-10 sm:grid-cols-2 md:grid-cols-4 md:gap-4 lg:grid-cols-4 xl:grid-cols-5 lg:gap-8"
            : "flex flex-col gap-4"
        }
      >
        {Array.from({ length: skeletonCards }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </ul>
    </div>
  );
};

export default RecipesDisplaySkeleton;
