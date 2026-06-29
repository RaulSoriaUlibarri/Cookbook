"use client";

type FilterSelectType = [idCategory: string, label: string, options: string[]];

const FilterSelect = ({ options, handleFunction, label }) => {
  function handleItemClick(item) {}

  if (options) {
    return (
      <>
        <select className="">
          {options?.map((item) => (
            <option
              className=""
              key={item.idItem}
              value={item.strItem}
              onClick={() => handleItemClick(item.strItem)}
            >
              {item.strItem}
            </option>
          ))}
        </select>
      </>
    );
  }
};

export default FilterSelect;
