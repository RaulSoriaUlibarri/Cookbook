"use client";

import MealHero from "@/components/MealHero";
import Footer from "@/components/UI/Footer";
import { RecipesContainer } from "../../containers";

export default function directory() {
  return (
    <>
      <MealHero />
      <div className="mt-14 mb-28 p-1 h-auto ">
        <RecipesContainer />
      </div>
      <Footer />
    </>
  );
}
