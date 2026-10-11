
import Card from "../Components/Card";

const stats = [
  {
    title: "Total Users",
    value: "1,250",
    icon: "♙",
    color: "bg-blue-100 text-blue-700",
    change: "+12% from last month",
  },
  {
    title: "Orders Today",
    value: "78",
    icon: "▣",
    color: "bg-purple-100 text-purple-700",
    change: "+8% from yesterday",
  },
  {
    title: "Revenue",
    value: "₹8,900",
    icon: "₹",
    color: "bg-emerald-100 text-emerald-700",
    change: "+15% from last month",
  },
  {
    title: "Pending Reports",
    value: "14",
    icon: "▤",
    color: "bg-orange-100 text-orange-700",
    change: "5 need attention",
  },
];

const bars = [45, 70, 55, 90, 65, 80, 50];

export default function Dashboard() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Analytics Overview
        </h2>
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          Here's a summary of your business performance.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <section className="rounded-2xl bg-white p-5 shadow-sm dark:bg-gray-800 xl:col-span-2">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            Weekly Activity
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Sample chart · Illustrative data
          </p>

          <div className="mt-6 flex h-56 items-end justify-around gap-3 border-b border-l border-gray-200 px-3 dark:border-gray-600">
            {bars.map((height, index) => (
              <div
                key={index}
                className="flex h-full flex-1 items-end"
              >
                <div
                  style={{ height: `${height}%` }}
                  className="w-full rounded-t-lg bg-gradient-to-t from-blue-600 to-sky-400 transition hover:opacity-70"
                  title={`Activity ${height}%`}
                />
              </div>
            ))}
          </div>

          <div className="mt-2 flex justify-around text-xs text-gray-500 dark:text-gray-400">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
              (day) => <span key={day}>{day}</span>
            )}
          </div>
        </section>

        <section className="rounded-2xl bg-white p-5 shadow-sm dark:bg-gray-800">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            Recent Activity
          </h3>

          <div className="mt-5 space-y-5">
            {[
              ["New user registered", "2 minutes ago", "bg-blue-500"],
              ["Report generated", "25 minutes ago", "bg-purple-500"],
              ["Payment received", "1 hour ago", "bg-emerald-500"],
              ["Settings updated", "3 hours ago", "bg-orange-500"],
            ].map(([title, time, color]) => (
              <div key={title} className="flex gap-3">
                <span className={`mt-1 h-3 w-3 shrink-0 rounded-full ${color}`} />
                <div>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    {title}
                  </p>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    {time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
