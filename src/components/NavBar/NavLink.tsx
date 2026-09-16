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
      className={`h-full px-3  flex items-center leading-6 hover:border-b-2 hover:border-emerald-600 hover:text-emerald-600  ${
        pathname === route
          ? "text-emerald-600 font-bold  border-b-2 border-emerald-600"
          : "font-semibold"
      } `}
    >
      {icon}
      {label}
    </Link>
  );
};

export default NavLink;
