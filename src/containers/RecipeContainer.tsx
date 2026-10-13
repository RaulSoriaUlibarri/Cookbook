"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { fetchMealById } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { IngredientsSection, InstructionsSection } from "@/components";

type RecipeContainerProps = {
  id: string;
};

const getYoutubeId = (url?: string | null) => {
  if (!url) return null;
  try {
    return new URL(url).searchParams.get("v");
  } catch {
    return null;
  }
};

const RecipeContainer = ({ id }: RecipeContainerProps) => {
  // Hooks must run before any early return
  const [playing, setPlaying] = useState(false);

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

  const videoId = getYoutubeId(meal.strYoutube);

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

        {/* Image + video */}
        <div
          className={`mx-auto my-10 grid items-center gap-6 ${
            videoId ? "max-w-5xl md:grid-cols-2" : "max-w-[600px]"
          }`}
        >
          <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 dark:ring-white/10">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="aspect-[4/3] w-full object-cover transition duration-300 hover:scale-105"
            />
          </div>

          {videoId && (
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                ¿Prefieres cocinar con un video?
              </h3>
              <div className="relative aspect-video overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 dark:ring-white/10">
                {playing ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
                    title={`${meal.strMeal} video`}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                ) : (
                  <button
                    onClick={() => setPlaying(true)}
                    aria-label={`Play ${meal.strMeal} video`}
                    className="group relative h-full w-full cursor-pointer"
                  >
                    <img
                      src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                      alt=""
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-black/30 transition group-hover:bg-black/40" />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex size-16 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg transition group-hover:scale-110 dark:bg-orange-500">
                        <Play className="size-7 fill-current" />
                      </span>
                    </span>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="p-6 mx-auto max-w-4/5">
          <IngredientsSection ingredients={ingredients} />
          <InstructionsSection strInstructions={meal.strInstructions} />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default RecipeContainer;
