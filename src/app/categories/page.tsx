"use client";

import Footer from "@/components/UI/Footer";
import { RecipesContainer } from "../../containers";
import CategoriesList from "@/components/CategoriesList/CategoriesList";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Categories() {
  return (
    <>
      <div className="mt-14 mb-28 p-1 h-auto ">
        <MaxWidthWrapper>
          <CategoriesList />
          <RecipesContainer />
        </MaxWidthWrapper>
      </div>
      <Footer />
    </>
  );
}
