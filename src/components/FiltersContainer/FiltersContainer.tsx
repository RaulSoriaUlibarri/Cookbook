"use client";

import { CategoryFilter, CountryFilter, IngredientFilter } from "./index";

const FiltersContainer = () => {
  return (
    <>
      <div className="flex justify-center">
        <CategoryFilter />
        <CountryFilter />
        <IngredientFilter />
      </div>
    </>
  );
};

export default FiltersContainer;
