"use client";

import { use } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { fetchCategories, fetchCategoryMeals } from "@/server/actions";
import {
  Breadcrumb,
  CollectionHeader,
  CollectionHeaderSkeleton,
  RecipesDisplay,
  RecipesDisplaySkeleton,
} from "@/components";
import Footer from "@/components/UI/Footer";
import { useQuery } from "@tanstack/react-query";

type PageProps = {
  params: Promise<{ category: string }>;
};

export default function CategoryRecipesPage({ params }: PageProps) {
  const { category } = use(params);
  const decodedCategory = decodeURIComponent(category);

  const { data = [], isLoading: loadingCategories } = useQuery({
    queryFn: fetchCategories,
    queryKey: ["fetchCategory"],
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 15,
  });

  const { data: mealsByCategory, isLoading: loadingMealsByCategory } = useQuery(
    {
      queryFn: () => fetchCategoryMeals(decodedCategory),
      queryKey: ["fetchByCategory"],
      staleTime: 1000 * 60 * 30,
    },
  );

  if (loadingCategories || loadingMealsByCategory)
    return (
      <MaxWidthWrapper>
        <CollectionHeaderSkeleton />
        <RecipesDisplaySkeleton title="Loading Recipes..." />
      </MaxWidthWrapper>
    );

  const categorySelected = data.find(
    (cat) => cat.strCategory === decodedCategory,
  );

  return (
    <>
      <MaxWidthWrapper className="px-5 md:p-none">
        <section className="w-full">
          <Breadcrumb
            items={[
              { label: "All Categories", href: "/categories" },
              { label: decodedCategory },
            ]}
          />
          <CollectionHeader
            name={categorySelected.strCategory}
            description={categorySelected.strCategoryDescription}
            image={categorySelected.strCategoryThumb}
          />
          <div className="mt-14 mb-28 p-1 h-auto ">
            <RecipesDisplay meals={mealsByCategory} />
          </div>
        </section>
      </MaxWidthWrapper>
      <Footer />
    </>
  );
}
