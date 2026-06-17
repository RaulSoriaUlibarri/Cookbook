"use client";

import {
  Bookmark,
  BookmarkPlus,
  BookmarkCheck,
  BookmarkMinus,
} from "lucide-react";
import { useState } from "react";
import RecipeDialog from "./RecipeDialog/RecipeDialog";

type MealCardProps = {
  id: string;
  img: string;
  name: string;
  category: string | null;
};

const MealCard = ({ id, img, name, category }: MealCardProps) => {
  const [bookRecipe, setBookRecipe] = useState<boolean>(false);

  function saveRecipe() {
    setBookRecipe((prevState) => !prevState);
  }

  return (
    <li className="flex flex-col rounded-lg shadow-md p-3.5 border-[1px] border-gray-200 dark:border-slate-500 ">
      <div className="max-h-[300px] sm:max-h-[170px]">
        <img
          className="rounded-xl w-full h-full object-fill"
          src={img}
          alt={name}
        />
      </div>

      <p className="mt-1 text-lg text-gray-700 font-bold  ">{name}</p>
      <p className="mb-2 text-sm font-semibold text-slate-500">{category}</p>
      <div className="mt-auto flex justify-between ">
        <RecipeDialog id={id} />
        {bookRecipe === false ? (
          <div className="pl-3 group cursor-pointer">
            <span className=" md:group-hover:hidden">
              <Bookmark
                strokeWidth={0.5}
                color="white"
                onClick={() => saveRecipe()}
                className="w-12 h-12 md:h-10 md:w-10"
              />
            </span>
            <span className="hidden md:group-hover:block">
              <BookmarkPlus
                strokeWidth={0.5}
                color={"#6D31EDFF"}
                onClick={() => saveRecipe()}
                className="w-12 h-12 md:h-10 md:w-10"
              />
            </span>
          </div>
        ) : (
          <div className="pl-3 group cursor-pointer">
            <span className=" md:group-hover:hidden">
              <BookmarkCheck
                strokeWidth={1}
                color={"#6D31EDFF"}
                onClick={() => saveRecipe()}
                className="w-12 h-12 md:h-10 md:w-10"
              />
            </span>
            <span className="hidden md:group-hover:block">
              <BookmarkMinus
                strokeWidth={1}
                color={"#6D31EDFF"}
                onClick={() => saveRecipe()}
                className="w-12 h-12 md:h-10 md:w-10"
              />
            </span>
          </div>
        )}
      </div>
    </li>
  );
};

export default MealCard;
