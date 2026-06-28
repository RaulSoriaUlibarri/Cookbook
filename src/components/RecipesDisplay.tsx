"use client";

import { fetchCategoryMeals } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";
import MealCard from "./MealCard/MealCard";

interface RecipesDisplayProps {
  category: string | null;
}

const RecipesDisplay = ({ category }: RecipesDisplayProps) => {
  const { data, error, isLoading } = useQuery({
    queryFn: () => fetchCategoryMeals(category),
    queryKey: ["meals", category],
    enabled: !!category,
    staleTime: 1000 * 60 * 30,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="mt-16">
      <h2 className="w-full font-lexend h-auto p-5 text-4xl text-center font-bold mb-5">
        Recipe Collection
      </h2>
      <ul className=" grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4">
        {data?.map((meal: any) => (
          <MealCard
            key={meal.idMeal}
            id={meal.idMeal}
            name={meal.strMeal}
            img={meal.strMealThumb}
            category={category}
          />
        ))}
      </ul>
    </div>
  );
};

export default RecipesDisplay;
