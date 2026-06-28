"use client";

import { fetchCategories } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import IconSelector from "../UI/IconSelector";
import MealsList from "../UI/MealsList";
import MaxWidthWrapper from "../MaxWidthWrapper";

type Categoria = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

const CategoryFilter = () => {
  const { data, error, isLoading } = useQuery<Categoria[]>({
    queryFn: fetchCategories,
    queryKey: ["categories"],
    staleTime: 1000 * 60 * 30,
  });

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const defaultCategory = "Beef";
    setSelectedCategory(defaultCategory);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  function handleCategoryClick(category: string) {
    setSelectedCategory(category);
  }

  if (data) {
    return (
      <>
        <div className=" bg-white top-14 flex flex-wrap h-auto max-w-full py-5 justify-center items-center border-b-2 border-gray-400 text-gray-600 font-semibold dark:text-slate-300 dark:bg-black">
          {data?.map((category) => (
            <button
              className={`p-5 leading-6 flex items-center ${
                selectedCategory === category.strCategory
                  ? "text-customPurple font-bold"
                  : "hover:text-customPurple hover:font-bold"
              }`}
              key={category.idCategory}
              value={category.strCategory}
              onClick={() => handleCategoryClick(category.strCategory)}
            >
              <IconSelector category={category.strCategory} />
              {category.strCategory}
            </button>
          ))}
        </div>
        <MaxWidthWrapper>
          <MealsList category={selectedCategory} />
        </MaxWidthWrapper>
      </>
    );
  }
};

export default CategoryFilter;
