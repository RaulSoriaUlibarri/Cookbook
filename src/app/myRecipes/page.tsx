"use client";

import { fetchMealById } from "@/server/actions";
import { RecipesDisplay } from "@/components";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useFavoritesStore } from "@/stores";
import { useQueries } from "@tanstack/react-query";
import { Meal } from "@/types/meals";

export default function MyRecipesPage() {
  const favoriteIds = useFavoritesStore((state) => state.favoriteIds);
  console.log(favoriteIds, "favorites");

  const results = useQueries({
    queries: favoriteIds.map((id) => ({
      queryKey: ["meal", id],
      queryFn: () => fetchMealById(id),
    })),
  });

  const isLoading = results.some((result) => result.isLoading);
  const hasError = results.some((result) => result.error);

  const meals: Meal[] = results
    .filter((result) => result.data)
    .map((result) => result.data as Meal);

  console.log(meals, "meals");

  return (
    <MaxWidthWrapper className="px-5 md:p-0">
      <h1 className="font-roboto-slab text-emerald-950 text-xl md:text-2xl lg:text-4xl my-5 lg:my-10 mx-auto w-fit font-bold dark:text-white text-center">
        Enjoy your favorite meals!
      </h1>

      {favoriteIds.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400">
          You haven&apos;t saved any favorite recipes yet.
        </p>
      )}

      {hasError && (
        <p className="text-center text-red-500 dark:text-red-400 mb-4">
          Some recipes couldn&apos;t be loaded.
        </p>
      )}

      {isLoading && meals.length === 0 ? (
        <p className="text-center">Loading...</p>
      ) : (
        <RecipesDisplay meals={meals} />
      )}
    </MaxWidthWrapper>
  );
}
