import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex">
      <input type="search" placeholder="Search your next creation!" />
      <Search />
    </div>
  );
};

export default SearchBar;
