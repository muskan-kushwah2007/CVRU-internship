
const reports = [
  { title: "Monthly Revenue", description: "Revenue summary for this month", date: "Oct 10, 2026", type: "Finance" },
  { title: "User Activity", description: "Overview of user engagement", date: "Oct 09, 2026", type: "Analytics" },
  { title: "Orders Summary", description: "Summary of sample orders", date: "Oct 08, 2026", type: "Sales" },
];

export default function Reports() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Reports Overview
      </h2>
      <p className="mt-1 text-gray-500 dark:text-gray-400">
        View the available sample reports.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
        {reports.map((report) => (
          <div key={report.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {report.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {report.description}
                </p>
              </div>
              <span className="rounded-lg bg-blue-100 px-3 py-2 text-xs font-semibold text-blue-700">
                {report.type}
              </span>
            </div>

            <div className="mt-6 border-t border-gray-100 pt-4 text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">
              Created: {report.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
