const AlphabeticalListSkeleton = () => {
  const letters: string[] = ["A", "B", "C", "D", "E", "F"];

  return (
    <ul>
      {letters.map((l: string) => (
        <li className="animate-pulse my-5" key={l}>
          <p className="w-fit px-2 font-bold text-2xl text-emerald-950 border-2 border-emerald-950 dark:border-white dark:text-white">
            {l}
          </p>
          <div className="mt-10 mx-auto space-y-3">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default AlphabeticalListSkeleton;
