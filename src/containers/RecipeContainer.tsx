"use client";

import { fetchMealById } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import {
  IngredientsSection,
  InstructionsSection,
  RecipeMedia,
} from "@/components";

type RecipeContainerProps = {
  id: string;
};

const RecipeContainer = ({ id }: RecipeContainerProps) => {
  const { data, error, isLoading } = useQuery({
    queryFn: () => fetchMealById(id),
    queryKey: ["meal", id],
    enabled: !!id,
    staleTime: 1000 * 60 * 30,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const meal = data;
  if (!meal) return <p>No meal data available</p>;

  const tags = meal.strTags ? meal.strTags.split(",") : [];

  const ingredients = Array.from({ length: 20 }, (_, i) => {
    const ing = meal[`strIngredient${i + 1}`];
    const measure = meal[`strMeasure${i + 1}`];

    if (ing && ing.trim() !== "") {
      return { ing, measure };
    }

    return null;
  }).filter((item): item is { ing: string; measure: string } => item !== null);

  return (
    <section className="bg-green-50 pb-10 pt-20 dark:bg-emerald-950">
      <MaxWidthWrapper>
        <div className="mt-4">
          <Link
            href={`/categories/${meal.strCategory}`}
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            {meal.strCategory}
          </Link>
        </div>
        <div className="text-center mb-10">
          <h2 className="quintessential text-5xl font-bold text-orange-600 dark:text-orange-500 mb-2">
            {meal.strMeal}
          </h2>
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-lg font-semibold text-gray-700 dark:text-white">
              {meal.strArea} {meal.strArea && meal.strCountry ? "-" : null}
              {meal.strCountry}
            </span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <div className="flex justify-center flex-wrap gap-3 mt-4">
            {tags.map((tag: string) => (
              <span
                key={tag}
                className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <RecipeMedia
          title={meal.strMeal}
          thumbnail={meal.strMealThumb}
          youtubeUrl={meal.strYoutube}
        />
        <div className="p-6 mx-auto max-w-4/5">
          <IngredientsSection ingredients={ingredients} />
          <InstructionsSection strInstructions={meal.strInstructions} />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default RecipeContainer;
