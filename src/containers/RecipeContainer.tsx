"use client";

import { fetchMeal } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";

type RecipeContainerProps = {
  id: string;
};

const RecipeContainer = ({ id }: RecipeContainerProps) => {
  const { data, error, isLoading } = useQuery({
    queryFn: () => fetchMeal(id),
    queryKey: ["meal", id],
    enabled: !!id,
    staleTime: 1000 * 60 * 30,
  });

  console.log(data);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const meal = data && data[0];
  if (!meal) return <p>No meal data available</p>;

  const tags = meal.strTags ? meal.strTags.split(",") : [];

  const ingredients = Array.from({ length: 20 }, (_, i) => {
    const ing = meal[`strIngredient${i + 1}`];
    const measure = meal[`strMeasure${i + 1}`];
    if (ing && ing.trim() !== "") {
      return { ing, measure };
    }
    return null;
  }).filter(Boolean);

  const videoId = meal.strYoutube
    ? new URL(meal.strYoutube).searchParams.get("v")
    : null;

  return (
    <section className="bg-gradient-to-b from-green-50 to-green-100 pb-10 pt-20">
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
          <h2 className="quintessential text-5xl font-bold text-orange-700 mb-2">
            {meal.strMeal}
          </h2>
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-lg font-semibold text-gray-700">
              {meal.strArea} {meal.strArea && meal.strCountry ? "-" : null}
              {meal.strCountry}
            </span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <div className="flex justify-center flex-wrap gap-3 mt-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Imagen principal */}
        <div className="max-w-[600px] mx-auto my-10 space-y-6">
          <div>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>

          {/* Sección de video */}
          {meal.strYoutube && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">
                ¿Prefieres cocinar con un video?
              </h3>
              <p className="text-gray-600">
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

        {/* Ingredientes */}
        <div className="p-6 mb-10 mx-auto max-w-1/3">
          <h3 className="text-2xl font-bold text-yellow-800 mb-4 border-b pb-5 mb-10">
            Ingredients
          </h3>
          <ul className="space-y-3">
            {ingredients.map(({ ing, measure }) => (
              <li key={ing} className="flex items-center gap-3 rounded-md p-2">
                <img
                  src={`https://www.themealdb.com/images/ingredients/${ing}-Small.png`}
                  alt={ing}
                  className="w-10 h-10 object-contain"
                />
                <span className="font-medium text-gray-800">{ing}</span>
                <span className="text-gray-600">{measure}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Instrucciones */}
        <div className="bg-orange-100 rounded-lg p-6 shadow-md">
          <h3 className="text-2xl font-bold text-orange-800 mb-4">
            Instructions
          </h3>
          <p className="whitespace-pre-line leading-relaxed text-gray-800 text-lg">
            {meal.strInstructions}
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default RecipeContainer;
