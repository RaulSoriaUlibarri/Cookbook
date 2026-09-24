"use client";

import { use } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { fetchByCountry } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";
import { RecipesDisplay } from "@/components";
import { Meal } from "@/types/meals";

type PageProps = {
  params: Promise<{ country: string }>;
};

export default function CountryRecipesPage({ params }: PageProps) {
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
  if (!data) return null;

  return (
    <>
      <MaxWidthWrapper>
        <section>
          <h2 className="font-roboto-slab text-emerald-950 w-fit mx-auto text-3xl font-bold md:text-5xl md:my-10 dark:text-white">
            {decodedCountry}
          </h2>
          <RecipesDisplay meals={data} />
        </section>
      </MaxWidthWrapper>
    </>
  );
}
