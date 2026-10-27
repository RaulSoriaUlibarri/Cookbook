"use client";

import MealHero from "@/components/MealHero";
import Footer from "@/components/UI/Footer";
import { RecipesContainer } from "../../containers";
import { CollectionHeader, CollectionHeaderSkeleton } from "@/components";
import { fetchCategories } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";
import { useRecipeFilterStore } from "@/stores";

export default function Categories() {
  const filterValue = useRecipeFilterStore((state) => state.filterValue);

  const {
    data = [],
    error,
    isLoading,
  } = useQuery({
    queryFn: fetchCategories,
    queryKey: ["fetchCategory"],
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 15,
  });

  const category = data.find((cat) => cat.strCategory === filterValue);
  console.log(category);
  return (
    <>
      <MealHero />
      {/* <CollectionHeader /> */}
      <div className="mt-14 mb-28 p-1 h-auto ">
        <RecipesContainer />
      </div>
      <Footer />
    </>
  );
}
