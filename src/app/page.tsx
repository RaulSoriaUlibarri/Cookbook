import MaxWidthWrapper from "../components/MaxWidthWrapper";

import HeroCarousel from "@/components/UI/HeroCarousel";
import Footer from "@/components/UI/Footer";

export default async function Home() {
  return (
    <>
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
