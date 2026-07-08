import FilterDropdown from "./FilterDropdown";
import { fetchIngredientsList } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";

const IngredientFilter = () => {
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

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  function dummyFunction(Country: string) {
    console.log(Country, "This is your Country selected");
  }
  return (
    <FilterDropdown
      label="Ingredient"
      handleChange={dummyFunction}
      options={ingredientsArray}
    />
  );
};

export default IngredientFilter;
