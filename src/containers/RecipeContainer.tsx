"use client";

import { fetchMeal } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";

type RecipeContainerProps = {
  id: string;
};

const RecipeContainer = ({ id }: RecipeContainerProps) => {
  const { data, error, isLoading } = useQuery({
    queryFn: () => fetchMeal(id),
    queryKey: ["meal"],
    staleTime: 1000 * 60 * 30,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div></div>
    </>
  );
};

export default RecipeContainer;
