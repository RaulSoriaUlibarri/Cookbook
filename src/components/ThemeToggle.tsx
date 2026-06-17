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
          ? "mx-3 hover:bg-gray-300 p-2 rounded-full"
          : "mx-3 hover:bg-gray-600 p-2 rounded-full"
      }
    >
      {toogleTheme ? (
        <Moon className=" h-7 w-7" color="white" />
      ) : (
        <Sun className=" h-7 w-7" color="gray" />
      )}
    </button>
  );
}
