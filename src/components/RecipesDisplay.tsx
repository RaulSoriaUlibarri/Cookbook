"use client";

import { useState } from "react";
import { fetchCategoryMeals } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";
import MealCard from "./MealCard/MealCard";
import { RecipesPagination } from "./index";
import { LayoutList, Grid3X3 } from "lucide-react";

interface RecipesDisplayProps {
  category: string | null;
}

const RecipesDisplay = ({ category }: RecipesDisplayProps) => {
  const [listLayout, setListLayout] = useState<string>("grid");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const recipesNum = 18;

  console.log(listLayout);

  const { data, error, isLoading } = useQuery({
    queryFn: () => fetchCategoryMeals(category),
    queryKey: ["meals", category],
    enabled: !!category,
    staleTime: 1000 * 60 * 30,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const numberOfPages = Math.ceil(data.length / recipesNum);

  const start = (currentPage - 1) * recipesNum;
  const end = currentPage * recipesNum;
  const paginatedData = data.slice(start, end);
  console.log(paginatedData);

  return (
    <div className="mt-16">
      <h2 className="w-full font-lexend h-auto p-5 text-4xl text-center font-bold mb-5">
        Recipe Collection
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
            ? "grid grid-cols-1 gap-8 mb-10 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-3  lg:gap-8"
            : ""
        }
      >
        {paginatedData.map((meal: any) => (
          <MealCard
            key={meal.idMeal}
            id={meal.idMeal}
            name={meal.strMeal}
            img={meal.strMealThumb}
            country={meal.strCountry}
            category={category}
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
