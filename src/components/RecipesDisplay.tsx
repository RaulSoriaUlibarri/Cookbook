// RecipesDisplay.tsx
"use client";

import { useState } from "react";
import MealCard from "./MealCard/MealCard";
import { RecipesPagination } from "./index";
import { LayoutList, Grid3X3 } from "lucide-react";

type Meal = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
  strArea: string | null;
  strCountry: string;
};

interface RecipesDisplayProps {
  meals: Meal[];
  title?: string;
}

const RECIPES_PER_PAGE = 24;

const RecipesDisplay = ({
  meals,
  title = "Recipe Collection",
}: RecipesDisplayProps) => {
  const [listLayout, setListLayout] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const numberOfPages = Math.ceil(meals.length / RECIPES_PER_PAGE);
  const start = (currentPage - 1) * RECIPES_PER_PAGE;
  const end = currentPage * RECIPES_PER_PAGE;
  const paginatedData = meals.slice(start, end);

  return (
    <div className="mt-16">
      <h2 className="w-full font-lexend h-auto p-5 text-4xl text-center font-bold mb-5">
        {title}
      </h2>
      <div className="flex justify-between mb-10 max-w-15 ml-auto">
        <button
          className="cursor-pointer"
          onClick={() => setListLayout("list")}
        >
          <LayoutList />
        </button>
        <button
          className="cursor-pointer"
          onClick={() => setListLayout("grid")}
        >
          <Grid3X3 />
        </button>
      </div>
      <ul
        className={
          listLayout === "grid"
            ? "grid grid-cols-1 gap-8 mb-10 sm:grid-cols-2 md:grid-cols-4 md:gap-4 lg:grid-cols-4 xl:grid-cols-5 lg:gap-8"
            : "flex flex-col gap-4"
        }
      >
        {paginatedData.map((meal) => (
          <MealCard
            key={meal.idMeal}
            id={meal.idMeal}
            name={meal.strMeal}
            img={meal.strMealThumb}
            country={meal.strCountry}
            variant={listLayout}
          />
        ))}
      </ul>
      <RecipesPagination
        handleChange={setCurrentPage}
        totalPages={numberOfPages}
      />
    </div>
  );
};

export default RecipesDisplay;
