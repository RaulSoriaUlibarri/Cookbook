"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import MealCard from "./MealCard/MealCard";
import SkeletonCard from "./MealCard/SkeletonCard";
import { fetchCategoryMeals, fetchByIngredients } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

type MealCarouselBaseProps = {
  title: string;
  featured?: boolean;
};

type MealCarouselProp = MealCarouselBaseProps &
  (
    | { category: string; ingredient?: never }
    | { ingredient: string; category?: never }
  );

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCountry: string;
};

const SKELETON_COUNT = 5;

const MealCarousel = ({
  category,
  ingredient,
  title,
  featured = false,
}: MealCarouselProp) => {
  const scrollRef = useRef<HTMLUListElement>(null);

  const filterType = category ? "category" : "ingredient";
  const filterValue = category ?? ingredient ?? "";

  const { data, error, isLoading } = useQuery({
    queryFn: async () => {
      const result = category
        ? await fetchCategoryMeals(category)
        : await fetchByIngredients(ingredient!);
      // TheMealDB returns null (not []) when an ingredient/category has no matches
      return result ?? [];
    },
    queryKey: ["meals", filterType, filterValue],
    enabled: !!filterValue,
    staleTime: 1000 * 60 * 30,
  });

  if (error) return <p>Error: {error.message}</p>;

  const meals: Meal[] = (data ?? []).slice(0, 10);

  if (!isLoading && meals.length === 0) return null;

  const cardWidthClasses = `flex-none snap-start w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.67rem)] ${
    featured ? "lg:w-[calc(25%-1.5rem)]" : "lg:w-[calc(20%-1.6rem)]"
  }`;

  const scrollByPage = (direction: "prev" | "next") => {
    const container = scrollRef.current;
    if (!container) return;

    container.scrollBy({
      left:
        direction === "next" ? container.clientWidth : -container.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`my-6 ${
        featured
          ? "bg-emerald-50 dark:bg-emerald-950 rounded-2xl px-4 py-10 md:p-6"
          : ""
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <h2
            className={`text-left font-bold text-emerald-900 dark:text-white ${
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
        <Link
          href=""
          className="group inline-flex flex-shrink-0 items-center gap-1 whitespace-nowrap pr-1 font-bold text-emerald-700 transition-colors hover:text-emerald-500"
        >
          See all
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="relative">
        <button
          type="button"
          aria-label="Previous meals"
          onClick={() => scrollByPage("prev")}
          disabled={isLoading}
          className="absolute left-0 top-1/2 z-20 -translate-y-1/2 -translate-x-1/2 rounded-full bg-emerald-600 text-white p-2 shadow-md hover:bg-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <ul
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-4 md:gap-4 lg:gap-8 overflow-x-auto scroll-smooth px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {isLoading
            ? Array.from({ length: SKELETON_COUNT }).map((_, i) => (
                <SkeletonCard key={i} className={cardWidthClasses} />
              ))
            : meals.map((meal) => (
                <MealCard
                  key={meal.idMeal}
                  id={meal.idMeal}
                  name={meal.strMeal}
                  img={meal.strMealThumb}
                  country={meal.strCountry}
                  className={cardWidthClasses}
                />
              ))}
        </ul>

        <button
          type="button"
          aria-label="Next meals"
          onClick={() => scrollByPage("next")}
          disabled={isLoading}
          className="absolute right-0 top-1/2 z-20 -translate-y-1/2 translate-x-1/2 rounded-full bg-emerald-600 text-white p-2 shadow-md hover:bg-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default MealCarousel;
