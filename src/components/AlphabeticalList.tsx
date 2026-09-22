type AlphabeticalListProps = {
  letter: string;
  countries: string[];
};

const countriesArr = ["Algeria", "Alemania", "Argentina", "Afganistan"];

const AlphabeticalList = ({ letter, countries }: AlphabeticalListProps) => {
  return (
    <div>
      <h2>A</h2>
      <ul className="flex ">
        {countriesArr.map((c) => (
          <li>{c}</li>
        ))}
      </ul>
    </div>
  );
};

export default AlphabeticalList;
