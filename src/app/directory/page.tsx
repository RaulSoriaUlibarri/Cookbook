"use client";

import { useState } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import MealHero from "@/components/MealHero";
import NavBar from "@/components/UI/NavBar";
import MealsList from "@/components/UI/MealsList";
import CategorySelect from "@/components/UI/CategorySelect";
import Footer from "@/components/UI/Footer";

export default function directory() {
  return (
    <>
      <MealHero />
      <div className="mt-14 mb-28 p-1 h-auto ">
        <CategorySelect />
      </div>
      <Footer />
    </>
  );
}
