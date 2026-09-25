"use client";

import { use } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { fetchIngredientByName, fetchByIngredients } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";

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

  if (loadingInfo || loadingMeals) return <p>loading...</p>;
  if (errorInfo) return <p>Error {errorInfo.message}</p>;
  if (!ingredientInfo) return <p>Ingrediente no encontrado</p>;

  return (
    <>
      <MaxWidthWrapper className="px-5 md:p-none">
        Welcome to the page of {decodedIngredient}
        <h1>{ingredientInfo.name}</h1>
        {ingredientInfo.image && (
          <img src={ingredientInfo.image} alt={ingredientInfo.name} />
        )}
        {ingredientInfo.description && <p>{ingredientInfo.description}</p>}
      </MaxWidthWrapper>
    </>
  );
}
