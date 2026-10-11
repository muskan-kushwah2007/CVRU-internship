
export default function Card({ title, value, icon, color, change }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {title}
        </p>

        <span
          className={`rounded-xl p-3 text-xl ${color}`}
        >
          {icon}
        </span>
      </div>

      <h3 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
        {value}
      </h3>

      <p className="mt-2 text-sm text-emerald-600">
        {change}
      </p>
    </div>
  );
}
