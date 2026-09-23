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
      <p className="font-bold text-2xl">{letter}</p>
      <ul className="flex flex-wrap">
        {countries.map((i) => (
          <li
            key={i}
            className="text-emerald-800 hover:text-emerald-950 hover:cursor-pointer "
          >
            <a
              className="block pr-5 py-3 hover:underline"
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
