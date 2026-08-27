"use client";

import MealCard from "./MealCard/MealCard";

const MealCarousel = () => {
  return (
    <div>
      <ul
        className={
          listLayout === "grid"
            ? "grid grid-cols-1 gap-8 mb-10 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-3 lg:gap-8"
            : "flex flex-col gap-4"
        }
      >
        {paginatedData.map((meal: any) => (
          <MealCard
            key={meal.idMeal}
            id={meal.idMeal}
            name={meal.strMeal}
            img={meal.strMealThumb}
            country={meal.strCountry}
            category={category}
            variant={listLayout} // aquí decides grid o list
          />
        ))}
      </ul>
    </div>
  );
};

export default MealCarousel;
