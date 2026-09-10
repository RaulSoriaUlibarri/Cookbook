"use client";

const MealHero = () => {
  return (
    <div className="relative w-full h-[200px] mb-10 md:h-[450px] bg-[url('/images/meals_hero.png')] bg-cover bg-bottom md:bg-bottom">
      <div className="absolute inset-0 flex flex-col justify-start items-center px-5 pt-10 text-center text-white md:pt-16">
        <h3 className="mb-3 text-2xl text-emerald-950 font-roboto-slab font-semibold drop-shadow-md md:text-6xl md:font-extrabold md:mb-6 dark:text-white">
          Your Recipe Playground
        </h3>
        <p className=" text-sm text-emerald-950  drop-shadow-md md:max-w-xl md:text-2xl mx-auto dark:text-white">
          Mix, match and cook whatever you love.
        </p>
      </div>
    </div>
  );
};

export default MealHero;
