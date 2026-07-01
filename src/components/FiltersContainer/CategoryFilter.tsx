import FilterDropdown from "./FilterDropdown";
import { fetchCategoriesList } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

const CategoryFilter = () => {
  type Categoria = {
    strCategory: string;
  };

  const { data, error, isLoading } = useQuery<Categoria[]>({
    queryFn: fetchCategoriesList,
    queryKey: ["categoriesList"],
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 15,
  });

  const categoriesArray: string[] = [];

  if (data) {
    for (let i = 0; i < data.length; i++) {
      const cat = data[i].strCategory;
      categoriesArray.push(cat);
    }
  }

  //   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  //   function handleCategoryClick(category: string) {
  //     setSelectedCategory(category);
  //   }

  function dummyFunction(categorieSelected: string) {
    console.log(categorieSelected, "This is your categorie selected");
  }

  return (
    <FilterDropdown
      label="Categories"
      options={categoriesArray}
      handleChange={dummyFunction}
    />
  );
};

export default CategoryFilter;
