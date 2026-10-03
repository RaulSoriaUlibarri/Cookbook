import FilterDropdown from "./FilterDropdown";
import { fetchCountriesList } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";
import { useRecipeFilterStore } from "@/stores/index";

const CountryFilter = () => {
  const setFilter = useRecipeFilterStore((state) => state.setFilter);

  type Country = {
    strArea: string;
    strCountry: string;
  };

  const { data, error, isLoading } = useQuery<Country[]>({
    queryFn: fetchCountriesList,
    queryKey: ["countriesList"],
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 15,
  });

  const countriesArray: string[] = [];

  if (data) {
    for (let i = 0; i < data.length; i++) {
      const country = data[i].strCountry;
      countriesArray.push(country);
    }
  }

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  function handleCountryChange(categorieSelected: string) {
    setFilter("country", categorieSelected.toLowerCase());
  }

  return (
    <FilterDropdown
      href="all-countries"
      options={countriesArray.slice(0, 20)}
      label="Country"
      handleChange={handleCountryChange}
    />
  );
};

export default CountryFilter;
