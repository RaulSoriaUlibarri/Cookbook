"use client";

import { useState } from "react";

type IngredientsListProps = {
  ingredients: Array<string>;
  measures: Array<string>;
};

const IngredientsList = ({ ingredients, measures }: IngredientsListProps) => {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    new Array(ingredients.length).fill(false)
  );

  const handleCheck = (index: number) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);
  };

  return (
    <section className=" mb-3">
      <h4 className="w-full text-center pl-5 py-6 text-2xl text-gray-700 font-semibold lg:pt-0">
        Ingredients
      </h4>
      <ul className="text-md w-fit mx-auto text-gray-800 md:grid md:grid-cols-2  ">
        {ingredients.map((ingredient, index) =>
          ingredient && measures[index] ? (
            <li className="list-none w-fit py-1 flex items-center" key={index}>
              <label className="flex items-center cursor-pointer px-5">
                <input
                  type="checkbox"
                  onChange={() => handleCheck(index)}
                  checked={checkedItems[index]}
                  className="rounded-full mr-5"
                />
                <span
                  className={`mr-2 text-slate-700 hover:text-slate-500 ${
                    checkedItems[index] ? "line-through" : ""
                  }`}
                >
                  {ingredient} {measures[index] === " " ? "" : "-"}{" "}
                  {measures[index]}
                </span>
              </label>
            </li>
          ) : null
        )}
      </ul>
    </section>
  );
};

export default IngredientsList;
