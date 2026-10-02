import { FiltersContainer, RecipesDisplay } from "../components/index";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useRecipeFilterStore } from "@/stores";
import { useQuery } from "@tanstack/react-query";
import {
  fetchCategoryMeals,
  fetchByCountry,
  fetchByIngredients,
} from "@/server/actions";

const recipeFetchConfig = {
  ingredient: {
    queryKeyBase: "ingredientMeals",
    queryFn: fetchByIngredients,
  },
  category: {
    queryKeyBase: "categoryMeals",
    queryFn: fetchCategoryMeals,
  },
  country: {
    queryKeyBase: "countryMeals",
    queryFn: fetchByCountry,
  },
};

const RecipesContainer = () => {
  const filterType = useRecipeFilterStore((state) => state.filterType);
  const filterValue = useRecipeFilterStore((state) => state.filterValue);

  const { queryKeyBase, queryFn } = recipeFetchConfig[filterType];

  const { data, error, isLoading } = useQuery({
    queryFn: () => queryFn(filterValue),
    queryKey: [queryKeyBase, filterValue],
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 15,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section>
      <MaxWidthWrapper>
        <FiltersContainer />
        <RecipesDisplay meals={data} />
      </MaxWidthWrapper>
    </section>
  );
};

export default RecipesContainer;
