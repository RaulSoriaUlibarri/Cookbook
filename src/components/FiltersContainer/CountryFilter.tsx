"use client";

import FilterDropdown from "./FilterDropdown";
import { fetchCountriesList } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";

const CountryFilter = () => {
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

  if (data) {
    console.log(data[0], "countries");
  }

  const countriesArray: string[] = [];

  if (data) {
    for (let i = 0; i < data.length; i++) {
      const country = data[i].strCountry;
      countriesArray.push(country);
    }
  }

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  function dummyFunction(Country: string) {
    console.log(Country, "This is your Country selected");
  }

  return (
    <FilterDropdown
      options={countriesArray}
      label="Country"
      handleChange={dummyFunction}
    />
  );
};

export default CountryFilter;
