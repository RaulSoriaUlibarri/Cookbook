type AlphabeticalListProps = {
  letter: string;
  countries: string[];
  onSelect: (country: string) => void;
};

const AlphabeticalList = ({
  letter,
  countries,
  onSelect,
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
            <a
              className="block pr-5 py-3 hover:underline dark:text-white"
              onClick={() => onSelect(i)}
            >
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlphabeticalList;
