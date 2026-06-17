"use client";

import {
  Beef,
  Drumstick,
  Egg,
  CakeSlice,
  Ham,
  Popcorn,
  Fish,
  Utensils,
  Soup,
  Vegan,
  Salad,
  PiggyBank,
  UtensilsCrossed,
} from "lucide-react";

type Category = {
  category: string;
};

const iconMap: { [key: string]: JSX.Element } = {
  Beef: <Beef className="mr-2" />,
  Chicken: <Drumstick className="mr-2" />,
  Dessert: <CakeSlice className="mr-2" />,
  Lamb: <Ham className="mr-2" />,
  Miscellaneous: <Popcorn className="mr-2" />,
  Pasta: <UtensilsCrossed className="mr-2" />,
  Pork: <PiggyBank className="mr-2" />,
  Seafood: <Fish className="mr-2" />,
  Side: <Utensils className="mr-2" />,
  Starter: <Soup className="mr-2" />,
  Vegan: <Vegan className="mr-2" />,
  Vegetarian: <Salad className="mr-2" />,
  Breakfast: <Egg className="mr-2" />,
  Goat: <Beef className="mr-2" />,
};

const IconSelector = ({ category }: { category: string }) => {
  return iconMap[category] || null;
};

export default IconSelector;
