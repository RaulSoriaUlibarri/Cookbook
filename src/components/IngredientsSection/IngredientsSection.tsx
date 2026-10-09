type IngredientProps = {
  ing: string;
  measure: string;
};

type IngredientsSectionProps = {
  ingredients: IngredientProps[];
};

const IngredientsSection = ({ ingredients }: IngredientsSectionProps) => {
  return (
    <section>
      <h3 className="text-2xl font-bold text-yellow-800 mb-4 border-b pb-5 mb-10  dark:text-orange-500">
        Ingredients
      </h3>
      <ul className="space-y-3">
        {ingredients.map(({ ing, measure }, i) => (
          <li key={i} className="flex items-center gap-3 rounded-md p-2">
            <img
              src={`https://www.themealdb.com/images/ingredients/${ing}-Small.png`}
              alt={ing}
              className="object-contain w-10 h-10 "
            />
            <span className="font-medium text-gray-800  dark:text-white">
              {ing}
            </span>
            <span className="text-gray-600 dark:text-white font-semibold">
              {measure}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default IngredientsSection;
