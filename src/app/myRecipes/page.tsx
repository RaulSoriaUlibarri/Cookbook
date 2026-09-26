"use client";

import { useEffect, useState } from "react";
import { fetchMeal } from "@/server/actions";
import { RecipesDisplay } from "@/components";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

type Meal = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
  strArea: string | null;
  strCountry: string;
};

export default function MyRecipesPage() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadSavedMeals() {
      try {
        const savedNames: string[] = JSON.parse(
          localStorage.getItem("savedRecipes") || "[]",
        );

        const savedIds: string[] = JSON.parse(
          localStorage.getItem("savedRecipes") || "[]",
        );

        const results = await Promise.all(savedIds.map((id) => fetchMeal(id)));

        const flattened = results
          .flat()
          .filter((meal): meal is Meal => meal !== null && meal !== undefined);

        setMeals(flattened);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    }

    loadSavedMeals();
  }, []);

  return (
    <>
      <MaxWidthWrapper className="px-5 md:p-none">
        <h1 className="font-roboto-slab text-emerald-950 text-xl md:text-2xl lg:text-4xl my-5 lg:my-10 mx-auto w-fit font-bold dark:text-white text-center">
          Enjoy your favorite meals!
        </h1>

        {isLoading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-600">Error: {error}</p>}

        {!isLoading && !error && meals.length === 0 && (
          <p className="text-center text-gray-600 dark:text-slate-300">
            You haven't saved any recipes yet.
          </p>
        )}

        {!isLoading && !error && meals.length > 0 && (
          <RecipesDisplay meals={meals} />
        )}
      </MaxWidthWrapper>
    </>
  );
}
