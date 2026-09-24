"use client";

import { use } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { decode } from "punycode";

type PageProps = {
  params: Promise<{ ingredient: string }>;
};

export default function IngredientRecipesPage({ params }: PageProps) {
  const { ingredient } = use(params);
  const decodedIngredient = decodeURIComponent(ingredient);

  return (
    <>
      <MaxWidthWrapper>
        Welcome to the page of {decodedIngredient}
      </MaxWidthWrapper>
    </>
  );
}
