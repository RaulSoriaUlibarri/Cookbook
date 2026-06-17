import { fetchCategories } from "@/server/actions";
import MaxWidthWrapper from "../components/MaxWidthWrapper";

import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import NavBar from "@/components/UI/NavBar";
import HeroCarousel from "@/components/UI/HeroCarousel";
import Footer from "@/components/UI/Footer";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  return (
    <>
      <NavBar />
      <div className="h-[720px]">
        <img
          className="relative h-full w-full object-fill"
          src="/images/mainHero2.jpg"
          alt="hero"
        />
        <div className="absolute top-1/4 md:top-[300px] md:left-1/4 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold p-2 my-5">
            Find Your Favorite Recipes
          </h2>
          <p className="text-xl md:text-2xl ">
            Discover, save, and share delicious recipes from around the world.
          </p>
        </div>
      </div>
      <MaxWidthWrapper className="mb-12 mt-5 flex flex-col items-center justify-center text-center">
        {/* <HydrationBoundary state={dehydrate(queryClient)}></HydrationBoundary> */}
        <div className="md:flex md:justify-center md:items-center lg:px-20 lg:mt-10">
          <div>
            <h2 className="my-3 px-5 font-bold text-xl text-gray-900 md:hidden lg:text-3xl">
              Discover and Cook your Favorite Recipes
            </h2>
            <HeroCarousel />
          </div>
          {/* <div
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
          </div> */}
          <div className="mx-7 my-5 h-full md:ml-5 md:mr-0">
            <h2 className="hidden mb-5 text-2xl font-bold text-gray-900 md:block md:text-left lg:mb-20">
              Discover and Cook your Favorite Recipes
            </h2>
            <p className="text-gray-700 md:text-left lg:text-lg">
              Explore a wide variety of carefully selected recipes selected for
              every occasion. Whether you're a beginner or experienced chef,
              you'll find inspiration for every meal. meal. Save your favorites,
              share with friends, and turn each dish into a masterpiece. each
              dish into a masterpiece.
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
      <Footer />
    </>
  );
}
