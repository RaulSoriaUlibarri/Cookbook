"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MealCard from "./MealCard/MealCard";
import { fetchCategoryMeals, fetchByIngredients } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";

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

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const meals: Meal[] = (data ?? []).slice(0, 10);

  if (meals.length === 0) return null;

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
      <div className="flex items-center gap-3 mb-4">
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

      <div className="relative">
        <button
          type="button"
          aria-label="Previous meals"
          onClick={() => scrollByPage("prev")}
          className="absolute left-0 top-1/2 z-20 -translate-y-1/2 -translate-x-1/2 rounded-full bg-emerald-600 text-white p-2 shadow-md hover:bg-emerald-700"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <ul
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-4 md:gap-4 lg:gap-8 overflow-x-auto scroll-smooth px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {meals.map((meal) => (
            <MealCard
              key={meal.idMeal}
              id={meal.idMeal}
              name={meal.strMeal}
              img={meal.strMealThumb}
              country={meal.strCountry}
              className={`flex-none snap-start w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.67rem)] ${
                featured ? "lg:w-[calc(25%-1.5rem)]" : "lg:w-[calc(20%-1.6rem)]"
              }`}
            />
          ))}
        </ul>

        <button
          type="button"
          aria-label="Next meals"
          onClick={() => scrollByPage("next")}
          className="absolute right-0 top-1/2 z-20 -translate-y-1/2 translate-x-1/2 rounded-full bg-emerald-600 text-white p-2 shadow-md hover:bg-emerald-700"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default MealCarousel;
