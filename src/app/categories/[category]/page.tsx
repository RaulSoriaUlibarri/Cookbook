"use client";

import { use } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { fetchCategories } from "@/server/actions";
import {
  Breadcrumb,
  RecipesDisplay,
  RecipesDisplaySkeleton,
} from "@/components";
import { Meal } from "@/types";

type PageProps = {
  params: Promise<{ category: string }>;
};

export default function CategoryRecipesPage({ params }: PageProps) {
  const { category } = use(params);
  const decodedCategory = decodeURIComponent(category);

  return (
    <>
      <MaxWidthWrapper className="px-5 md:p-none">
        <h1>{decodedCategory}</h1>
      </MaxWidthWrapper>
    </>
  );
}
