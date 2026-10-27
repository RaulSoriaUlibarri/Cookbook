"use client";

import Footer from "@/components/UI/Footer";
import { RecipesContainer } from "../../containers";
import { CollectionHeader, CollectionHeaderSkeleton } from "@/components";
import { fetchCategories } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";
import { useRecipeFilterStore } from "@/stores";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Categories() {
  const filterValue = useRecipeFilterStore((state) => state.filterValue);

  const { data = [], isLoading } = useQuery({
    queryFn: fetchCategories,
    queryKey: ["fetchCategory"],
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 15,
  });

  if (isLoading)
    return (
      <MaxWidthWrapper>
        <CollectionHeaderSkeleton />
      </MaxWidthWrapper>
    );

  const category = data.find((cat) => cat.strCategory === filterValue);

  return (
    <>
      <CollectionHeader
        name={category.strCategory}
        description={category.strCategoryDescription}
        image={category.strCategoryThumb}
      />
      <div className="mt-14 mb-28 p-1 h-auto ">
        <RecipesContainer />
      </div>
      <Footer />
    </>
  );
}
