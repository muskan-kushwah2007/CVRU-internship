
import { useTheme } from "../Context/ThemeContext";

export default function Settings() {
  const { dark, toggleTheme } = useTheme();

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Application Settings
      </h2>
      <p className="mt-1 text-gray-500 dark:text-gray-400">
        Customize your dashboard appearance.
      </p>

      <section className="mt-6 max-w-2xl rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          Appearance
        </h3>

        <div className="mt-5 flex items-center justify-between gap-4">
          <div>
            <p className="font-medium text-gray-800 dark:text-gray-200">
              Dark Mode
            </p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Switch between light and dark themes.
            </p>
          </div>

          <button
            onClick={toggleTheme}
            aria-pressed={dark}
            className="rounded-xl bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700"
          >
            {dark ? "Turn Off" : "Turn On"}
          </button>
        </div>

        <div className="mt-6 rounded-xl border border-gray-200 p-4 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Current theme: <strong>{dark ? "Dark" : "Light"}</strong>
          </p>
        </div>
      </section>
    </div>
  );
}
