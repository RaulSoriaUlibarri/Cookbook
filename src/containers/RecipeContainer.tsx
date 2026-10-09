"use client";

import { fetchMealById } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { IngredientsSection } from "@/components";

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

  console.log(data);
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

  const videoId = meal.strYoutube
    ? new URL(meal.strYoutube).searchParams.get("v")
    : null;

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
        <div className="max-w-[600px] mx-auto my-10 space-y-6">
          <div>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          {meal.strYoutube && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                ¿Prefieres cocinar con un video?
              </h3>
              <p className="text-gray-600 dark:text-white">
                ¡Mira el video paso a paso y sigue la receta fácilmente!
              </p>
              <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                <iframe
                  src={meal.strYoutube.replace("watch?v=", "embed/")}
                  title="Recipe video"
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </div>
        <div className="p-6  mx-auto max-w-2/3 ">
          <IngredientsSection ingredients={ingredients} />
          <div className="text-yellow-800 p-2 mt-10 ">
            <h3 className="text-2xl font-bold border-b pb-5 mb-4 dark:text-orange-500">
              Instructions
            </h3>
            <p className="whitespace-pre-line leading-relaxed text-gray-800 text-lg  dark:text-white">
              {meal.strInstructions}
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default RecipeContainer;
