const IngredientDetailsSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="h-7 md:h-8 lg:h-10 w-48 md:w-64 lg:w-80 bg-gray-200 dark:bg-gray-700 rounded my-5 lg:my-10 mx-auto" />

      <div className="max-w-[250px] h-[250px] lg:max-w-[450px] lg:h-[450px] bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto" />

      <div className="mt-10 max-w-[550px] md:max-w-3/4 mx-auto space-y-3">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
      </div>
    </div>
  );
};

export default IngredientDetailsSkeleton;
