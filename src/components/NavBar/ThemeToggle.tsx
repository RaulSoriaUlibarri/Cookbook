"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  function changeTheme() {
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <button
      title={isDark ? "Light Theme" : "Night Theme"}
      onClick={changeTheme}
      className="mx-3 p-2 rounded-full hover:cursor-pointer"
    >
      {isDark ? (
        <Sun className="h-fit w-fit text-orange-600 hover:text-orange-500" />
      ) : (
        <Moon className="h-fit w-fit text-emerald-600 hover:text-emerald-700" />
      )}
    </button>
  );
}
