"use client";

import { use } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

type PageProps = {
  params: Promise<{ ingredient: string }>;
};

export default function IngredientRecipesPage({ params }: PageProps) {
  const { ingredient } = use(params);
  const decodedIngredient = decodeURIComponent(ingredient);

  return (
    <section>
      <MaxWidthWrapper>Welcome to the Ingredient page</MaxWidthWrapper>
    </section>
  );
}
