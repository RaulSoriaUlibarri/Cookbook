"use client";

import { Dialog, Flex, TextField } from "@radix-ui/themes";
import { fetchMeal } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";
import IngredientsList from "./IngredientsList";
import { CircleX, Flag } from "lucide-react";

type RecipeDialogProps = {
  id: string;
};

const RecipeDialog = ({ id }: RecipeDialogProps) => {
  const { data, error, isLoading } = useQuery({
    queryFn: () => fetchMeal(id),
    queryKey: ["meal", id],
    enabled: !!id,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const meal = data && data[0];

  if (!meal) return <p>No meal data available</p>;

  const ingredients = [
    meal.strIngredient1,
    meal.strIngredient2,
    meal.strIngredient3,
    meal.strIngredient4,
    meal.strIngredient5,
    meal.strIngredient6,
    meal.strIngredient7,
    meal.strIngredient8,
    meal.strIngredient9,
    meal.strIngredient10,
    meal.strIngredient11,
    meal.strIngredient12,
    meal.strIngredient13,
    meal.strIngredient14,
    meal.strIngredient15,
    meal.strIngredient16,
    meal.strIngredient17,
    meal.strIngredient18,
    meal.strIngredient19,
    meal.strIngredient20,
  ];

  const measures = [
    meal.strMeasure1,
    meal.strMeasure2,
    meal.strMeasure3,
    meal.strMeasure4,
    meal.strMeasure5,
    meal.strMeasure6,
    meal.strMeasure7,
    meal.strMeasure8,
    meal.strMeasure9,
    meal.strMeasure10,
    meal.strMeasure11,
    meal.strMeasure12,
    meal.strMeasure13,
    meal.strMeasure14,
    meal.strMeasure15,
    meal.strMeasure16,
    meal.strMeasure17,
    meal.strMeasure18,
    meal.strMeasure19,
    meal.strMeasure20,
  ];

  const tagsString = meal.strTags;
  const tagsArray = tagsString?.split(",");

  const mealInstructions = meal.strInstructions;
  const cleanInstructions = mealInstructions?.split(".");

  const videoId = meal.strYoutube
    ? new URL(meal.strYoutube).searchParams.get("v")
    : null;

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <button
          onClick={() => fetchMeal}
          className="w-full rounded-xl border border-black hover:text-customPurple hover:border-customPurple dark:border-slate-600"
        >
          Read Recipe
        </button>
      </Dialog.Trigger>
      <Dialog.Content maxWidth="1200px">
        <div>
          <section className="flex justify-between ">
            <div>
              <Dialog.Description className="flex flex-wrap gap-2"></Dialog.Description>
            </div>
            <Dialog.Close>
              <CircleX size={40} className="hover:cursor-pointer" />
            </Dialog.Close>
          </section>
          <section className="lg:flex  mt-10 mx-auto lg:px-20 pb-10">
            <div className="my-auto lg:mr-10">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="mx-auto w-[450px] h-[300px] rounded-md"
              />
            </div>
            <div className="px-10 mt-10">
              <h1 className="flex text-3xl font-bold my-2 text-slate-700">
                {meal.strMeal}
              </h1>
              <p className="flex items-center  font-semibold text-xl text-gray-700">
                Region: {meal.strArea}
              </p>
              <p className="flex items-center font-semibold text-xl text-gray-700">
                Category: {meal.strCategory}
              </p>
              {tagsArray ? (
                <p className="font-semibold text-xl ">
                  Tags:{" "}
                  {tagsArray?.map((tag: string, indx: number) => (
                    <span
                      key={indx}
                      className="text-white text-sm bg-customPurple rounded-full px-2 py-1 mx-1"
                    >
                      {tag}
                    </span>
                  ))}
                </p>
              ) : null}
            </div>
          </section>
          <div className="border-b border-gray-600 mb-3 w-full my-5 "></div>
          <section className="my-10">
            <IngredientsList measures={measures} ingredients={ingredients} />
          </section>
          <div className="border-b border-gray-600 mb-3 w-full my-5"></div>
          <section className=" mb-10 py-3">
            <h4 className="w-full text-center py-10 text-2xl text-gray-700 font-semibold">
              How to Make It
            </h4>
            <div className="text-lg px-20 text-justify">
              <ul>
                {cleanInstructions
                  .filter((step: string) => step.length > 3)
                  .map((step: string, index: number) => {
                  return (
                    <li key={index} className="py-1 list-decimal">
                      {step}
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -tranlate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
            />
          </div>
          <Flex gap="4" justify="end" mt="4">
            <Dialog.Close>
              <button className="py-2 px-6 rounded-md border text-sm border-gray-400 hover:border-customPurple hover:text-customPurple">
                Close
              </button>
            </Dialog.Close>
            <Dialog.Close>
              <button className="py-2 px-6 rounded-md border text-sm border-gray-400 hover:border-customPurple hover:text-customPurple">
                Save Recipe
              </button>
            </Dialog.Close>
          </Flex>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default RecipeDialog;
