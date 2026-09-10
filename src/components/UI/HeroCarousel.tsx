"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export default function HeroCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: true, delay: 4000 }),
  ]);

  return (
    <div className="md:flex md:justify-center md:items-center lg:px-20 lg:mt-10">
      <h2 className="my-3 px-5 font-bold text-2xl text-gray-900 md:hidden lg:text-3xl dark:text-white">
        Discover and Cook your Favorite Recipes
      </h2>
      <div className="flex justify-center">
        <div
          className="overflow-hidden h-80 w-80 mx-7 my-3 rounded-xl md:h-96 md:w-96 lg:h-[28rem] lg:w-[26rem] shadow-md"
          ref={emblaRef}
        >
          <div className="flex h-full">
            <img
              alt="Recipe preview 1"
              className="embla__slide w-full h-full object-cover flex-shrink-0"
              src="/images/hero1.jpg"
            />
            <img
              alt="Recipe preview 2"
              className="embla__slide w-full h-full object-cover flex-shrink-0"
              src="/images/hero2.jpg"
            />
            <img
              alt="Recipe preview 3"
              className="embla__slide w-full h-full object-cover flex-shrink-0"
              src="/images/hero3.jpg"
            />
          </div>
        </div>
      </div>
      <div className="mx-7 my-5 h-full md:ml-8 md:mr-0 md:max-w-md">
        <h2 className="hidden mb-5 text-3xl font-bold text-gray-900 md:block md:text-left lg:text-4xl lg:mb-8 dark:text-white">
          Discover and Cook your Favorite Recipes
        </h2>
        <p className="text-gray-700 leading-relaxed text-justify md:text-left lg:text-lg lg:leading-loose dark:text-white">
          Explore a wide variety of carefully selected recipes for every
          occasion. Whether you're a beginner or an experienced chef, you'll
          find inspiration for every meal. Save your favorites, share with
          friends, and turn each dish into a masterpiece.
        </p>
      </div>
    </div>
  );
}
