"use client";

import { AlphabeticalList } from "@/components";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { fetchCountriesList } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";

type Country = {
  strArea: string;
  strCountry: string;
};

const AllCountriesContainer = () => {
  const { data, error, isLoading } = useQuery<Country[]>({
    queryFn: fetchCountriesList,
    queryKey: ["countriesList"],
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 15,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const grouped: Record<string, string[]> = {};

  if (data) {
    for (let i = 0; i < data.length; i++) {
      const country = data[i].strCountry;
      const firstLetter = country[0];

      if (!grouped[firstLetter]) {
        grouped[firstLetter] = [];
      }
      grouped[firstLetter].push(country);
    }
  }

  const alphabet = Object.keys(grouped).sort();

  return (
    <section className="pt-10">
      <MaxWidthWrapper className="px-10 md:p-none">
        <h2 className="font-roboto-slab text-emerald-950 w-fit mx-auto text-3xl font-bold md:text-4xl md:my-10 dark:text-white">
          All Countries
        </h2>
        {alphabet.map((letter) => (
          <AlphabeticalList
            key={letter}
            letter={letter}
            countries={grouped[letter]}
            route="all-countries"
          />
        ))}
      </MaxWidthWrapper>
    </section>
  );
};

export default AllCountriesContainer;
