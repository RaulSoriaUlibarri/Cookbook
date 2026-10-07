"use client";

import { use } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { fetchIngredientByName, fetchByIngredients } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";
import {
  Breadcrumb,
  RecipesDisplay,
  RecipesDisplaySkeleton,
  IngredientDetails,
  IngredientDetailsSkeleton,
} from "@/components/index";

type PageProps = {
  params: Promise<{ ingredient: string }>;
};

export default function IngredientRecipesPage({ params }: PageProps) {
  const { ingredient } = use(params);
  const decodedIngredient = decodeURIComponent(ingredient);

  const {
    data: ingredientInfo,
    error: errorInfo,
    isLoading: loadingInfo,
  } = useQuery({
    queryFn: () => fetchIngredientByName(decodedIngredient),
    queryKey: ["ingredient", decodedIngredient],
    staleTime: 1000 * 60 * 60,
  });

  const { data: meals, isLoading: loadingMeals } = useQuery({
    queryFn: () => fetchByIngredients(decodedIngredient),
    queryKey: ["mealsByIngredient", decodedIngredient],
    staleTime: 1000 * 60 * 30,
  });

  if (loadingInfo || loadingMeals)
    return (
      <MaxWidthWrapper>
        <IngredientDetailsSkeleton />
        <RecipesDisplaySkeleton title="Loading Recipes..." />
      </MaxWidthWrapper>
    );
  if (errorInfo) return <p>Error {errorInfo.message}</p>;
  if (!ingredientInfo) return <p>Ingrediente no encontrado</p>;

  const { image, name, description } = ingredientInfo;

  return (
    <>
      <MaxWidthWrapper className="px-5 md:p-none">
        <section className="w-full">
          <Breadcrumb
            items={[
              { label: "All Ingredients", href: "/all-ingredients" },
              { label: decodedIngredient },
            ]}
          />
          <IngredientDetails
            name={name}
            description={description}
            image={image}
          />
          <RecipesDisplay meals={meals} />
        </section>
      </MaxWidthWrapper>
    </>
  );
}
