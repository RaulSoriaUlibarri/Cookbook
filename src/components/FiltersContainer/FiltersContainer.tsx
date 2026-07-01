"use client";

import { CategoryFilter, CountryFilter } from "./index";

const FiltersContainer = () => {
  return (
    <>
      <div className="flex justify-center">
        <CategoryFilter />
        <CountryFilter />
      </div>
    </>
  );
};

export default FiltersContainer;
