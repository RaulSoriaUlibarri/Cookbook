import FilterDropdown from "./FilterDropdown";
import { fetchIngredientsList } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";
import { useRecipeFilterStore } from "@/stores/index";
import FilterSkeleton from "./FilterSkeleton";

const IngredientFilter = () => {
  const setFilter = useRecipeFilterStore((state) => state.setFilter);

  type Ingredient = {
    idIngredient: string;
    strIngredient: string;
    strDescription: string | null;
    strThumb: string | null;
    strType: string | null;
  };

  const { data, error, isLoading } = useQuery<Ingredient[]>({
    queryFn: fetchIngredientsList,
    queryKey: ["ingredientsList"],
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 15,
  });

  const ingredientsArray: string[] = [];

  if (data) {
    for (let i = 0; i < data.length; i++) {
      const ingredient = data[i].strIngredient;
      ingredientsArray.push(ingredient);
    }
  }

  if (isLoading)
    return (
      <FilterSkeleton
        label="ingredient"
        arialLabel="Link to All Ingredients"
        href="all-ingredients"
      />
    );
  if (error) return <p>Error: {error.message}</p>;

  function handleIngredientChange(categorieSelected: string) {
    setFilter("ingredient", categorieSelected.toLowerCase());
  }

  return (
    <FilterDropdown
      href="all-ingredients"
      label="Ingredient"
      arialLabel="Link to All Ingredients"
      handleChange={handleIngredientChange}
      options={ingredientsArray.slice(0, 20)}
    />
  );
};

export default IngredientFilter;
