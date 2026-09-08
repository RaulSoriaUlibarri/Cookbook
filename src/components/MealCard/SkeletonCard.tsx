type SkeletonCardProps = {
  className?: string;
};

const SkeletonCard = ({ className = "" }: SkeletonCardProps) => {
  return (
    <li
      className={`relative rounded-lg shadow-md border border-gray-200 dark:border-slate-500 overflow-hidden animate-pulse flex flex-col ${className}`}
    >
      <div className="max-h-[250px] h-[180px] w-full bg-gray-200 dark:bg-slate-700" />
      <div className="p-2 my-auto space-y-2">
        <div className="min-h-[3.5rem] space-y-1.5">
          <div className="h-5 w-3/4 rounded bg-gray-200 dark:bg-slate-700" />
          <div className="h-5 w-1/2 rounded bg-gray-200 dark:bg-slate-700" />
        </div>
        <div className="h-4 w-1/2 rounded bg-gray-200 dark:bg-slate-700" />
      </div>
    </li>
  );
};

export default SkeletonCard;
