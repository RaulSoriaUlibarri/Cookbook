import MaxWidthWrapper from "../components/MaxWidthWrapper";
import HeroCarousel from "@/components/UI/HeroCarousel";
import Footer from "@/components/UI/Footer";
import { MealCarousel } from "@/components";

export default async function Home() {
  return (
    //bg-[#ACE1AF] provisional.
    <section className="bg-[#f8f8f8] dark:bg-emerald-950">
      <MaxWidthWrapper className=" flex flex-col items-stretch text-center max-w-[1266px]">
        {" "}
        <div className="flex w-full items-center justify-end h-[400px] bg-[url(/images/landing_page_hero1.png)] bg-cover bg-center bg-no-repeat">
          <div className="w-1/2 text-center text-black">
            <h2 className="font-roboto-slab text-4xl md:text-6xl font-bold p-2 my-5">
              Find Your Favorite Recipes
            </h2>
            <p className="text-x md:text-2xl">
              Discover, save, and share delicious recipes from around the world.
            </p>
          </div>
        </div>
        <div className="py-5 flex justify-center bg-green-700 text-xl text-white ">
          <strong>
            Explore thousands of international recipes — thanks to TheMealDB
            API.
          </strong>
        </div>
        <div className="w-full">
          <MealCarousel featured title="Vegan favorites" category="vegan" />
          <MealCarousel title="Where tradition meets taste" category="beef" />
          <MealCarousel
            title="Greens that fuel your day"
            category="Vegetarian"
          />
          <MealCarousel title="Chicken-based favorites" ingredient="chicken" />
          <HeroCarousel />
          <MealCarousel
            featured
            title="Sweet moments, endless smiles"
            category="dessert"
          />
          <MealCarousel
            title="Spice Lovers! Global chili favorites"
            ingredient="chilli"
          />

          <MealCarousel
            title="Milk Lovers: Creamy classics worldwide"
            ingredient="milk"
          />
        </div>
      </MaxWidthWrapper>
      <Footer />
    </section>
  );
}
