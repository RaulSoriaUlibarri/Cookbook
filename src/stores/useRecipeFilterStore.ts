"use client";

import { create } from "zustand";

type FilterType = "category" | "ingredient" | "country";

type RecipeFilterTypes = {
  filterType: FilterType;
  filterValue: string;
  setFilter: (type: FilterType, value: string) => void;
};

const useRecipeFilterStore = create<RecipeFilterTypes>((set) => ({
  filterType: "category",
  filterValue: "dessert",
  setFilter: (filterType, filterValue) => set({ filterType, filterValue }),
}));

export default useRecipeFilterStore;
