"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { fetchCategoriesList } from "@/server/actions";
import CategoriesListSkeleton from "./CategoriesListSkeleton";

const CategoriesList = () => {
  const {
    data: categories = [],
    error,
    isLoading,
  } = useQuery({
    queryFn: fetchCategoriesList,
    queryKey: ["categoriesList"],
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 15,
  });

  if (isLoading) return <CategoriesListSkeleton />;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {categories.map((category) => (
        <Link
          key={category.strCategory}
          href={`/category/${encodeURIComponent(category.strCategory)}`}
          className="flex items-center justify-center rounded-xl bg-white px-4 py-6 text-center font-semibold text-emerald-950 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:bg-emerald-50 hover:text-emerald-700 hover:shadow-md dark:bg-black dark:text-gray-200 dark:ring-white/10 dark:hover:bg-white/10 dark:hover:text-orange-400"
        >
          {category.strCategory}
        </Link>
      ))}
    </div>
  );
};

export default CategoriesList;
