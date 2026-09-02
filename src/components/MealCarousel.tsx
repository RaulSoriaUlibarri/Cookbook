"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MealCard from "./MealCard/MealCard";
import { fetchCategoryMeals } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";

type MealCarouselProp = {
  category: string;
  title: string;
};

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCountry: string;
};

const MealCarousel = ({ category, title }: MealCarouselProp) => {
  const scrollRef = useRef<HTMLUListElement>(null);

  const { data, error, isLoading } = useQuery({
    queryFn: () => fetchCategoryMeals(category),
    queryKey: ["meals", category],
    enabled: !!category,
    staleTime: 1000 * 60 * 30,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const meals: Meal[] = data.slice(0, 10);

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
    <div className="mb-6">
      <h2 className="text-left text-2xl font-bold text-gray-800 mb-4">
        {title}
      </h2>

      <div className="relative">
        <button
          type="button"
          aria-label="Previous meals"
          onClick={() => scrollByPage("prev")}
          className="absolute left-0 top-1/2 z-20 -translate-y-1/2 -translate-x-1/2 rounded-full bg-white p-2 shadow-md hover:bg-gray-100"
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
              className="flex-none snap-start w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.67rem)] lg:w-[calc(20%-1.6rem)]"
            />
          ))}
        </ul>

        <button
          type="button"
          aria-label="Next meals"
          onClick={() => scrollByPage("next")}
          className="absolute right-0 top-1/2 z-20 -translate-y-1/2 translate-x-1/2 rounded-full bg-white p-2 shadow-md hover:bg-gray-100"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default MealCarousel;
