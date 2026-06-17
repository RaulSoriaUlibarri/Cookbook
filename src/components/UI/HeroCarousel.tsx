"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export default function HeroCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: true, delay: 4000 }),
  ]);

  return (
    <div className="flex justify-center">
      <div
        className="overflow-hidden h-80 w-80 mx-7 my-3 rounded-xl md:w-60 lg:h-112 lg:w-92 shadow-md"
        ref={emblaRef}
      >
        <div className="flex h-full">
          <img
            alt=""
            className="embla__slide w-full h-full object-fill  "
            src="/images/hero1.jpg"
          />
          <img
            alt=""
            className="embla__slide w-full h-full object-fill "
            src="/images/hero2.jpg"
          />
          <img
            alt=""
            className="embla__slide w-full h-full object-fill "
            src="/images/hero3.jpg"
          />
        </div>
      </div>
    </div>
  );
}
