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
      <h3 className="mb-10 border-b border-yellow-800/30 pb-5 text-2xl font-bold text-yellow-800 dark:border-slate-700 dark:text-orange-500">
        Ingredients
      </h3>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
        {ingredients.map(({ ing, measure }, i) => (
          <li
            key={i}
            className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 bg-white p-3 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800"
          >
            <img
              src={`https://www.themealdb.com/images/ingredients/${encodeURIComponent(ing)}-Small.png`}
              alt={ing}
              loading="lazy"
              className="size-16 md:size-20 xl:size-30 object-contain"
            />
            <div className="flex flex-wrap justify-center gap-x-1.5">
              <span className="font-medium text-gray-800 dark:text-white">
                {ing}
              </span>
              <span className="font-semibold text-emerald-700 dark:text-orange-400">
                {measure}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default IngredientsSection;
