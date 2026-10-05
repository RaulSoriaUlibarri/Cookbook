"use client";

import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import SkeletonCard from "../MealCard/SkeletonCard";

type MealCarouselSkeletonProps = {
  title: string;
  featured?: boolean;
};

const SKELETON_COUNT = 5;

const MealCarouselSkeleton = ({
  title,
  featured = false,
}: MealCarouselSkeletonProps) => {
  const cardWidthClasses = `flex-none snap-start w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.67rem)] ${
    featured ? "lg:w-[calc(25%-1.5rem)]" : "lg:w-[calc(20%-1.6rem)]"
  }`;

  return (
    <div
      className={`mt-15 ${
        featured
          ? "bg-emerald-50 dark:bg-emerald-950 rounded-2xl px-4 py-10 md:p-6"
          : ""
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <h2
            className={`text-left font-bold text-gray-900 dark:text-gray-100 ${
              featured
                ? "text-3xl md:text-4xl text-emerald-700 dark:text-emerald-400"
                : "text-2xl"
            }`}
          >
            {title}
          </h2>
          {featured && (
            <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              Featured
            </span>
          )}
        </div>
        <div className="group inline-flex flex-shrink-0 items-center gap-1 whitespace-nowrap rounded-full bg-emerald-600 px-4 py-2 text-sm font-bold text-white opacity-50">
          See all
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
      <div className="relative">
        <button
          type="button"
          disabled
          className="absolute left-0 top-1/2 z-20 -translate-y-1/2 -translate-x-1/2 rounded-full bg-emerald-600 text-white p-2 shadow-md disabled:opacity-40 disabled:cursor-not-allowed dark:bg-orange-600"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <ul className="flex snap-x snap-mandatory gap-4 md:gap-4 lg:gap-8 overflow-x-auto scroll-smooth px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
            <SkeletonCard key={i} className={cardWidthClasses} />
          ))}
        </ul>

        <button
          type="button"
          disabled
          className="absolute right-0 top-1/2 z-20 -translate-y-1/2 translate-x-1/2 rounded-full bg-emerald-600 text-white p-2 shadow-md disabled:opacity-40 disabled:cursor-not-allowed dark:bg-orange-600"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default MealCarouselSkeleton;
