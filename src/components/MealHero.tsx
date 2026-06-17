"use client";

const MealHero = () => {
  return (
    <>
      <div className="w-full h-[350px] mb-10 b-y-2 b-gray-500 md:h-[500px] md:flex md:justify-center">
        <img
          src="/images/categoryHero3.jpg"
          alt="categoryHero2"
          className="relative h-full w-full object-fill"
        />
        <div className="absolute top-[150px] right-0 px-5 text-white mb-10 flex-1 max-w-120 mx-auto md:max-w-max md:top-[280px] md:right-[130px] md:my-auto md:mx-5">
          <h3 className="mb-5 text-2xl px-3 font-lexend font-semibold md:text-6xl md:font-extrabold md:text-left md:mb-10">
            Healthy Recipes
          </h3>
          <p className="text-justify text-sm md:text-2xl md:px-3">
            Discover healty meals for a healtier lifestyle
          </p>
        </div>
      </div>
    </>
  );
};

export default MealHero;
