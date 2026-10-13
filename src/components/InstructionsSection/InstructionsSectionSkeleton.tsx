const InstructionsSectionSkeleton = () => {
  return (
    <section
      className="mt-10"
      aria-busy="true"
      aria-label="Loading instructions"
    >
      <h3 className="mb-10 border-b border-yellow-800/30 pb-5 text-2xl font-bold text-yellow-800 dark:border-slate-700 dark:text-orange-500">
        Instructions
      </h3>
      <ol aria-hidden="true" className="space-y-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <li
            key={i}
            className="flex animate-pulse items-start gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800"
          >
            <div className="size-8 shrink-0 rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="flex-1 space-y-3 pt-1">
              <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
              <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
              <div className="h-4 w-2/3 rounded bg-gray-200 dark:bg-gray-700" />
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default InstructionsSectionSkeleton;
