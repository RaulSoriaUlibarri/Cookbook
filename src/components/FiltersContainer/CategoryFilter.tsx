import FilterDropdown from "./FilterDropdown";
import { fetchCategoriesList } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";
import { useRecipeFilterStore } from "@/stores/index";
import FilterSkeleton from "./FilterSkeleton";

const CategoryFilter = () => {
  const setFilter = useRecipeFilterStore((state) => state.setFilter);

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

  if (isLoading)
    return (
      <FilterSkeleton
        label="Category"
        arialLabel="Link to all Categories"
        href="/"
      />
    );
  if (error) return <p>Error: {error.message}</p>;

  function handleCategoryChange(categorieSelected: string) {
    setFilter("category", categorieSelected.toLocaleLowerCase());
  }

  return (
    <FilterDropdown
      href="all-countries"
      label="Category"
      arialLabel="Link to All Categories"
      options={categoriesArray}
      handleChange={handleCategoryChange}
    />
  );
};

export default CategoryFilter;
