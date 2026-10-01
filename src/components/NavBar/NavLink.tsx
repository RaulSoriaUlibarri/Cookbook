import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  route: string;
  icon: React.ReactNode;
  label: string;
};

const NavLink = ({ route = "/", icon, label }: NavLinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={route}
      className={`h-full px-3  flex items-center leading-6 border-b-2 border-transparent hover:border-emerald-600 hover:text-emerald-600 dark:text-orange-400 dark:hover:text-orange-500 dark:hover:border-orange-500 ${
        pathname === route
          ? "text-emerald-600 font-bold  border-b-2 border-emerald-600 dark:text-orange-400"
          : "font-semibold"
      } `}
    >
      {icon}
      {label}
    </Link>
  );
};

export default NavLink;
