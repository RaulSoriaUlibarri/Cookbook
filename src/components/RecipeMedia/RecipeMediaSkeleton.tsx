type RecipeMediaSkeletonProps = {
  withVideo?: boolean;
};

const RecipeMediaSkeleton = ({
  withVideo = true,
}: RecipeMediaSkeletonProps) => {
  return (
    <div
      aria-hidden="true"
      className={`mx-auto my-10 grid animate-pulse items-center gap-6 ${
        withVideo ? "max-w-5xl md:grid-cols-2" : "max-w-[600px]"
      }`}
    >
      <div className="aspect-[4/3] w-full rounded-2xl bg-gray-200 shadow-lg ring-1 ring-black/5 dark:bg-white/10 dark:ring-white/10" />

      {withVideo && (
        <div className="space-y-3">
          <div className="h-6 w-3/4 rounded-md bg-gray-200 dark:bg-white/10" />
          <div className="aspect-video w-full rounded-2xl bg-gray-200 shadow-lg ring-1 ring-black/5 dark:bg-white/10 dark:ring-white/10" />
        </div>
      )}
    </div>
  );
};

export default RecipeMediaSkeleton;
