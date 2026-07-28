import MaxWidthWrapper from "../components/MaxWidthWrapper";

import HeroCarousel from "@/components/UI/HeroCarousel";
import Footer from "@/components/UI/Footer";

export default async function Home() {
  return (
    //bg-[#ACE1AF] provisional.
    <section className="bg-[#f8f8f8]">
      <MaxWidthWrapper className="mb-12 mt-5 flex flex-col items-center justify-center text-center">
        <div className="flex w-full items-center justify-end h-[400px] bg-[url(/images/landing_page_hero.png)] bg-cover bg-center bg-no-repeat">
          <div className="w-1/2 text-center text-black">
            <h2 className="font-roboto-slab text-4xl md:text-6xl font-bold p-2 my-5">
              Find Your Favorite Recipes
            </h2>
            <p className="text-xl md:text-2xl">
              Discover, save, and share delicious recipes from around the world.
            </p>
          </div>
        </div>
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
    </section>
  );
}
