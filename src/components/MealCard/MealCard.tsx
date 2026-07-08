"use client";

import { Bookmark, BookmarkPlus, LayoutList } from "lucide-react";
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
    <li
      id={id}
      className=" relative flex flex-col rounded-lg shadow-md border border-gray-200 dark:border-slate-500 cursor-pointer"
    >
      <div className="max-h-[250px] ">
        <img
          className="rounded-tl-lg rounded-tr-lg w-full h-full object-fill"
          src={img}
          alt={name}
        />
      </div>
      <div className="p-2">
        <p className="mt-1 text-lg text-gray-700 font-bold  ">{name}</p>
        <p className="mb-2 text-sm font-semibold text-slate-500">{category}</p>
        <button className="absolute top-3 right-3 flex h-10 justify-between cursor-pointer">
          <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            {!open ? (
              <span className=" ">
                <Bookmark
                  fill="white"
                  strokeWidth={0.8}
                  color={"#6D31EDFF"}
                  onClick={() => saveRecipe()}
                  className="w-12 h-12"
                />
              </span>
            ) : (
              <span className="">
                <BookmarkPlus
                  strokeWidth={0.8}
                  color={"#6D31EDFF"}
                  onClick={() => saveRecipe()}
                  className="w-12 h-12"
                />
              </span>
            )}
          </div>
        </button>
      </div>
    </li>
  );
};

export default MealCard;
