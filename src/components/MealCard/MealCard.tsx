"use client";

import {
  Bookmark,
  BookmarkPlus,
  BookmarkCheck,
  BookmarkMinus,
} from "lucide-react";
import { useState } from "react";

type MealCardProps = {
  id: string;
  img: string;
  name: string;
  category: string | null;
};

const MealCard = ({ id, img, name, category }: MealCardProps) => {
  const [open, setOpen] = useState(false);

  function saveRecipe() {
    //In progress
  }

  return (
    <li className="flex flex-col rounded-lg shadow-md p-3.5 border border-gray-200 dark:border-slate-500 ">
      <div className="max-h-[300px] sm:max-h-[170px]">
        <img
          className="rounded-xl w-full h-full object-fill"
          src={img}
          alt={name}
        />
      </div>

      <p className="mt-1 text-lg text-gray-700 font-bold  ">{name}</p>
      <p className="mb-2 text-sm font-semibold text-slate-500">{category}</p>
      <div className="mt-auto flex h-10 justify-between ">
        {/* <RecipeDialog id={id} /> */}
        <button className="w-full rounded-xl border border-black hover:text-customPurple hover:border-customPurple dark:border-slate-600">
          Read Recipe
        </button>
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="cursor-pointer"
        >
          {!open ? (
            <span className=" ">
              <Bookmark
                strokeWidth={0.5}
                color="black"
                onClick={() => saveRecipe()}
                className="w-12 h-12"
              />
            </span>
          ) : (
            <span className="">
              <BookmarkPlus
                strokeWidth={0.5}
                color={"#6D31EDFF"}
                onClick={() => saveRecipe()}
                className="w-12 h-12"
              />
            </span>
          )}
        </div>
      </div>
    </li>
  );
};

export default MealCard;
