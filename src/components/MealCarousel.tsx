"use client";

import MealCard from "./MealCard/MealCard";

const MealCarousel = () => {
  return (
    <div>
      <ul className="grid grid-cols-1 gap-8 mb-10 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-3 lg:gap-8">
        {meals.map((meal: any) => (
          <MealCard
            key={meal.idMeal}
            id={meal.idMeal}
            name={meal.strMeal}
            img={meal.strMealThumb}
            country={meal.strCountry}
          />
        ))}
      </ul>
    </div>
  );
};

export default MealCarousel;
