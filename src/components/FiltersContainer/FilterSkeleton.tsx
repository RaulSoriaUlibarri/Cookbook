import Link from "next/link";

type FilterSkeletonProps = {
  label: string;
  arialLabel: string;
  href: string;
};

const FilterSkeleton = ({ label, arialLabel, href }: FilterSkeletonProps) => {
  return (
    <div className="inline-block px-5 py-2 ">
      <Link
        href={href}
        aria-label={arialLabel}
        className="cursor-pointer py-2 rounded font-bold text-md hover:underline"
      >
        {label.toUpperCase()}
      </Link>
    </div>
  );
};

export default FilterSkeleton;
