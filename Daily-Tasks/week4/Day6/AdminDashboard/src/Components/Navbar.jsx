
import { useLocation } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";

const titles = {
  "/": "Dashboard",
  "/users": "Users Management",
  "/reports": "Reports Overview",
  "/settings": "Application Settings",
};

export default function Navbar({ onMenuClick }) {
  const { dark, toggleTheme } = useTheme();
  const location = useLocation();
  const title = titles[location.pathname] || "Dashboard";

  return (
    <header className="flex items-center justify-between gap-3 border-b border-gray-200 bg-white px-4 py-4 dark:border-gray-700 dark:bg-gray-800 sm:px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="rounded-lg border border-gray-200 px-3 py-2 dark:border-gray-600 md:hidden"
          aria-label="Open navigation"
        >
          ☰
        </button>

        <div>
          <h1 className="text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
            {title}
          </h1>
          <p className="hidden text-xs text-gray-500 dark:text-gray-400 sm:block">
            Welcome back! Here's what's happening today.
          </p>
        </div>
      </div>

      <button
        onClick={toggleTheme}
        className="rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 sm:px-4"
      >
        {dark ? "☀️ Light" : "🌙 Dark"}
      </button>
    </header>
  );
}
