"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [toogleTheme, setToogleTheme] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  function changeTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
    setToogleTheme((prevTheme) => !prevTheme);
  }

  return (
    <button
      title={toogleTheme ? "Light Theme" : "Night Theme"}
      onClick={() => changeTheme()}
      className={
        toogleTheme
          ? "mx-3 p-2 rounded-full hover:cursor-pointer"
          : "mx-3 p-2 rounded-full hover:cursor-pointer"
      }
    >
      {toogleTheme ? (
        <Sun className="h-7 w-7 text-orange-500 hover:text-orange-700" />
      ) : (
        <Moon className="h-7 w-7 text-emerald-700 hover:text-emerald-950" />
      )}
    </button>
  );
}
