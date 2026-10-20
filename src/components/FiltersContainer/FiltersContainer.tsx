"use client";

import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import {
  fetchCategoriesList,
  fetchCountriesList,
  fetchIngredientsList,
} from "@/server/actions";
import type { Category, Country, Ingredient } from "@/types";
import FilterMegaMenu from "./FilterMegaMenu";

// 5 columnas x 6 filas: lo que cabe en el panel sin hacer scroll
const MAX_FILTER_OPTIONS = 30;

const listQueryOptions = {
  staleTime: 1000 * 60 * 30,
  gcTime: 1000 * 60 * 15,
};

const FiltersContainer = () => {
  const router = useRouter();

  const { data: categories = [] } = useQuery<Category[]>({
    queryFn: fetchCategoriesList,
    queryKey: ["categoriesList"],
    ...listQueryOptions,
  });

  const { data: countries = [] } = useQuery<Country[]>({
    queryFn: fetchCountriesList,
    queryKey: ["countriesList"],
    ...listQueryOptions,
  });

  const { data: ingredients = [] } = useQuery<Ingredient[]>({
    queryFn: fetchIngredientsList,
    queryKey: ["ingredientsList"],
    ...listQueryOptions,
  });

  const goTo = (base: string) => (value: string) =>
    router.push(`${base}/${encodeURIComponent(value)}`);

  return (
    <div className=" hidden sm:flex sm:justify-center">
      <FilterMegaMenu
        items={[
          {
            label: "Categories",
            arialLabel: "Browse categories",
            href: "/categories",
            options: categories.map((category) => category.strCategory),
            handleChange: goTo("/categories"),
          },
          {
            label: "Countries",
            arialLabel: "Browse countries",
            href: "/all-countries",
            options: countries.map((country) => country.strArea),
            maxOptions: MAX_FILTER_OPTIONS,
            handleChange: goTo("/countries"),
          },
          {
            label: "Ingredients",
            arialLabel: "Browse ingredients",
            href: "/all-ingredients",
            options: ingredients.map((ingredient) => ingredient.strIngredient),
            maxOptions: MAX_FILTER_OPTIONS,
            handleChange: goTo("/ingredients"),
          },
        ]}
      />
    </div>
  );
};

export default FiltersContainer;
