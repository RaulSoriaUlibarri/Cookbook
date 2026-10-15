"use client";

import { fetchMealById } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  IngredientsSection,
  InstructionsSection,
  RecipeMedia,
  RecipeHeader,
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
        <RecipeHeader
          title={meal.strMeal}
          category={meal.strCategory}
          area={meal.strArea}
          country={meal.strCountry}
          tags={meal.strTags}
        />
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
