"use client";

import { AlphabeticalList } from "@/components";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { fetchIngredientsList } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";

const AllIngredientsContainer = () => {
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

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const grouped: Record<string, string[]> = {};

  if (data) {
    for (let i = 0; i < data.length; i++) {
      const ingredient = data[i].strIngredient;
      const firstLetter = ingredient[0];

      if (!grouped[firstLetter]) {
        grouped[firstLetter] = [];
      }
      grouped[firstLetter].push(ingredient);
    }
  }

  const alphabet = Object.keys(grouped).sort();

  function searchByIngredient(ingredient: string) {
    console.log(ingredient);
  }

  return (
    <section className="pt-10">
      <MaxWidthWrapper className="px-10 md:p-none">
        <h2 className="font-roboto-slab text-emerald-950 w-fit mx-auto text-3xl font-bold md:text-4xl md:my-10 dark:text-white">
          All Ingredients
        </h2>
        {alphabet.map((letter) => (
          <AlphabeticalList
            key={letter}
            letter={letter}
            countries={grouped[letter]}
            onSelect={searchByIngredient}
          />
        ))}
      </MaxWidthWrapper>
    </section>
  );
};

export default AllIngredientsContainer;
