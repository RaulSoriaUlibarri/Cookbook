"use client";

import { use } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { fetchIngredientByName, fetchByIngredients } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";
import { Breadcrumb, RecipesDisplay } from "@/components";

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
        <section className="w-full">
          <Breadcrumb
            items={[
              { label: "All Ingredients", href: "/all-ingredients" },
              { label: decodedIngredient },
            ]}
          />
          <h1 className="font-roboto-slab text-emerald-950 text-xl md:text-2xl lg:text-4xl my-5 lg:my-10 mx-auto w-fit font-bold dark:text-white text-center">
            {ingredientInfo.name} Recipes
          </h1>
          {ingredientInfo.image && (
            <img
              src={ingredientInfo.image}
              alt={ingredientInfo.name}
              className="max-w-[250px] rounded-lg mx-auto lg:max-w-[450px] dark:bg-gray-100 "
            />
          )}
          {ingredientInfo.description && (
            <p className="text-justify mt-10 dark:text-white max-w-[550px] md:max-w-3/4 mx-auto lg:text-lg">
              {ingredientInfo.description}
            </p>
          )}
          <RecipesDisplay meals={meals} />
        </section>
      </MaxWidthWrapper>
    </>
  );
}
