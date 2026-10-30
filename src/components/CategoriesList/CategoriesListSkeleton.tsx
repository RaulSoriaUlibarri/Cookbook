type CategoriesListSkeletonProps = {
  count?: number;
};

const CategoriesListSkeleton = ({
  count = 12,
}: CategoriesListSkeletonProps) => {
  return (
    <div
      aria-hidden="true"
      className="grid animate-pulse grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
    >
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          className="h-[4.5rem] rounded-xl bg-gray-200 shadow-sm ring-1 ring-black/5 dark:bg-white/10 dark:ring-white/10"
        />
      ))}
    </div>
  );
};

export default CategoriesListSkeleton;
