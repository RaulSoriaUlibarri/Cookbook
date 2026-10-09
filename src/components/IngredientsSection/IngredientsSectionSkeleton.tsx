const IngredientsSectionSkeleton = () => {
  return (
    <section aria-busy="true" aria-label="Loading ingredients">
      <h3 className="mb-10 border-b border-yellow-800/30 pb-5 text-2xl font-bold text-yellow-800 dark:border-slate-700 dark:text-orange-500">
        Ingredients
      </h3>
      <ul
        aria-hidden="true"
        className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4"
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <li
            key={i}
            className="flex animate-pulse flex-col items-center gap-2 rounded-lg border border-gray-200 bg-white p-3 shadow-sm dark:border-slate-700 dark:bg-slate-800"
          >
            <div className="size-16 rounded-md bg-gray-200 md:size-20 xl:size-30 dark:bg-gray-700" />
            <div className="flex justify-center gap-x-1.5">
              <div className="h-4 w-20 rounded bg-gray-200 dark:bg-gray-700" />
              <div className="h-4 w-12 rounded bg-gray-200 dark:bg-gray-700" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default IngredientsSectionSkeleton;
