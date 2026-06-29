"use client";

import { FilterDropdown } from "./index";
import { fetchCategories } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

const FiltersContainer = () => {
  //   type Categoria = {
  //     idCategory: string;
  //     strCategory: string;
  //     strCategoryThumb: string;
  //     strCategoryDescription: string;
  //   };

  //   const { data, error, isLoading } = useQuery<Categoria[]>({
  //     queryFn: fetchCategories,
  //     queryKey: ["categories"],
  //     staleTime: 1000 * 60 * 30,
  //   });

  //   console.log(data);

  //   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  //   useEffect(() => {
  //     const defaultCategory = "Beef";
  //     setSelectedCategory(defaultCategory);
  //   }, []);

  //   if (isLoading) return <p>Loading...</p>;
  //   if (error) return <p>Error: {error.message}</p>;

  //   function handleCategoryClick(category: string) {
  //     setSelectedCategory(category);
  //   }

  const dummyArray = ["Beef", "Dessert", "Pizza", "Good food", "Bad food"];

  function dummyFunction(categorieSelected: string) {
    console.log(categorieSelected, "This is your categorie selected");
  }

  return (
    <>
      <div className="flex justify-center">
        <FilterDropdown
          label="Categorie"
          options={dummyArray}
          handleChange={dummyFunction}
        />
      </div>
    </>
  );
};

export default FiltersContainer;
