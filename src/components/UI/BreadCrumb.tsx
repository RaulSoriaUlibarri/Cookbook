import Link from "next/link";
import { Fragment } from "react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav aria-label="breadcrumb" className="text-sm text-gray-600 my-5 mb-4">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <Fragment key={item.label}>
              <li>
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="hover:underline text-emerald-800 dark:text-emerald-600"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className="font-semibold text-gray-900 dark:text-white"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                )}
              </li>
              {!isLast && <span className="text-gray-400">{">"}</span>}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
