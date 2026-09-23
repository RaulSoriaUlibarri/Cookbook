import Link from "next/link";

type AlphabeticalListProps = {
  letter: string;
  countries: string[];
  route: string;
};

const AlphabeticalList = ({
  letter,
  countries,
  route,
}: AlphabeticalListProps) => {
  return (
    <div className="my-5">
      <p className="w-fit px-2 font-bold text-2xl text-emerald-950 border-2  border-emerald-950 dark:border-white dark:text-white">
        {letter}
      </p>
      <ul className="flex flex-wrap mt-2 mb-10">
        {countries.map((i) => (
          <li
            key={i}
            className="text-emerald-800 hover:text-emerald-950 hover:cursor-pointer "
          >
            <Link
              className="block pr-5 py-3 hover:underline dark:text-white"
              href={`/${route}/${encodeURIComponent(i)}`}
            >
              {i}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlphabeticalList;
