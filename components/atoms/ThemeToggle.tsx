"use client";

import { useTheme } from "@/lib/theme-context";
import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
      suppressHydrationWarning
      className="relative inline-flex h-6 w-11 items-center rounded-full bg-neutral-300 transition-colors dark:bg-neutral-700"
    >
      <span
        suppressHydrationWarning
        className={`flex h-4 w-4 transform items-center justify-center rounded-full bg-white text-neutral-700 transition-transform ${
          isDark ? "translate-x-6" : "translate-x-1"
        }`}
      >
        {isDark ? <IoMdMoon size={15} /> : <MdSunny size={15} />}
      </span>
    </button>
  );
}
