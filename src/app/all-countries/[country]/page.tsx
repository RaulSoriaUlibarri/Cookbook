"use client";

import { use } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { fetchByCountry } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";

type PageProps = {
  params: Promise<{ country: string }>;
};

type Meal = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string | null;
  strArea: string | null;
  strCountry: string | null;
};

export default function AreaRecipesPage({ params }: PageProps) {
  const { country } = use(params);
  const decodedCountry = decodeURIComponent(country);

  const { data, error, isLoading } = useQuery<Meal[]>({
    queryFn: () => fetchByCountry(decodedCountry),
    queryKey: ["fetchByCountry", decodedCountry],
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 15,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data);

  return (
    <>
      <MaxWidthWrapper>Hello there {decodedCountry}</MaxWidthWrapper>
    </>
  );
}
