import Link from "next/link";
import { MapPin, UtensilsCrossed } from "lucide-react";

type RecipeHeaderProps = {
  title: string;
  category?: string | null;
  area?: string | null;
  country?: string | null;
  tags?: string | null;
};

const RecipeHeader = ({
  title,
  category,
  area,
  country,
  tags,
}: RecipeHeaderProps) => {
  const location = [area, country].filter(Boolean).join(" · ");
  const tagList = tags
    ? tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean)
    : [];

  return (
    <header className="mb-10 mt-4 text-center">
      {category && (
        <Link
          href={`/categories/${category}`}
          className="inline-block rounded-full bg-emerald-600 px-4 py-1.5 text-sm font-medium text-white transition hover:bg-emerald-700 dark:bg-orange-500 dark:hover:bg-orange-600"
        >
          {category}
        </Link>
      )}

      <h1 className="quintessential mb-2 mt-4 text-balance text-3xl font-bold tracking-tight text-orange-600 sm:text-4xl md:text-5xl dark:text-orange-500">
        {title}
      </h1>

      <div className="my-6 flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300 dark:to-white/20" />
        <span className="inline-flex items-center gap-2 text-lg font-semibold text-gray-700 dark:text-white">
          {location ? (
            <>
              <MapPin className="size-5 text-emerald-600 dark:text-orange-500" />
              {location}
            </>
          ) : (
            <UtensilsCrossed className="size-5 text-emerald-600 dark:text-orange-500" />
          )}
        </span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300 dark:to-white/20" />
      </div>

      {tagList.length > 0 && (
        <ul className="mt-4 flex flex-wrap justify-center gap-3">
          {tagList.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700 shadow-sm dark:bg-emerald-900/50 dark:text-emerald-200"
            >
              #{tag}
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default RecipeHeader;
