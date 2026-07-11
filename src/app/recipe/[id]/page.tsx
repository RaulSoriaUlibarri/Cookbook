"use client";

import { useParams } from "next/navigation";
import Footer from "@/components/UI/Footer";
import { RecipeContainer } from "@/containers";

export default function RecipePage() {
  const params = useParams();
  const recipeId = params.id as string;

  return (
    <div className="p-6">
      <RecipeContainer id={recipeId} />
      <Footer />
    </div>
  );
}
