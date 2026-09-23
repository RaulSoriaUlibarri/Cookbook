"use client";

import { use } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

type PageProps = {
  params: Promise<{ country: string }>;
};

export default function AreaRecipesPage({ params }: PageProps) {
  const { country } = use(params);
  const decodedCountry = decodeURIComponent(country);

  return (
    <>
      <MaxWidthWrapper>Hello there {decodedCountry}</MaxWidthWrapper>
    </>
  );
}
