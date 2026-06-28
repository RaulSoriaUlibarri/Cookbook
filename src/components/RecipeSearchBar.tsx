"use client";
import { Search } from "lucide-react";
import { useState } from "react";

const mealsArr = ["Pizza", "Meatballs", "Hamburguer", "Rabbit"];

const RecipeSearchBar = () => {
  const [results, setResults] = useState<string[]>([]);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (value.length === 0) {
      return setResults([]);
    }
    const filerMeals = mealsArr.filter((item) =>
      item.toLocaleLowerCase().startsWith(value.toLocaleLowerCase()),
    );
    setResults(filerMeals);
  }

  return (
    <div className="flex p-2">
      <input
        type="search"
        placeholder="Search your next creation!"
        onChange={(e) => handleSearch(e)}
        className="px-2"
      />
      <Search className="mx-2" />
      <ul>
        {results.length > 0 &&
          results.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
};

export default RecipeSearchBar;
