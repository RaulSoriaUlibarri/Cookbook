const RecipeHeaderSkeleton = () => {
  return (
    <header aria-hidden="true" className="mb-10 mt-4 animate-pulse text-center">
      <div className="mx-auto h-8 w-24 rounded-full bg-gray-200 dark:bg-white/10" />
      <div className="mx-auto mb-2 mt-4 h-9 w-3/4 max-w-md rounded-md bg-gray-200 sm:h-10 md:h-12 dark:bg-white/10" />
      <div className="my-6 flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300 dark:to-white/20" />
        <div className="h-7 w-36 rounded-md bg-gray-200 dark:bg-white/10" />
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300 dark:to-white/20" />
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-3">
        <div className="h-7 w-20 rounded-full bg-gray-200 dark:bg-white/10" />
        <div className="h-7 w-24 rounded-full bg-gray-200 dark:bg-white/10" />
        <div className="h-7 w-16 rounded-full bg-gray-200 dark:bg-white/10" />
      </div>
    </header>
  );
};

export default RecipeHeaderSkeleton;
