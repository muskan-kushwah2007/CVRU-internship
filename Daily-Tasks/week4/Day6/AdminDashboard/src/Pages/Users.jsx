
import { useState } from "react";

const initialUsers = [
  { id: 1, name: "Aarav Sharma", email: "aarav@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Priya Patel", email: "priya@example.com", role: "Editor", status: "Active" },
  { id: 3, name: "Rohan Verma", email: "rohan@example.com", role: "User", status: "Pending" },
  { id: 4, name: "Ananya Singh", email: "ananya@example.com", role: "User", status: "Active" },
  { id: 5, name: "Kabir Mehta", email: "kabir@example.com", role: "Editor", status: "Inactive" },
];

export default function Users() {
  const [search, setSearch] = useState("");

  const filteredUsers = initialUsers.filter((user) =>
    `${user.name} ${user.email} ${user.role}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Users Management
      </h2>
      <p className="mt-1 text-gray-500 dark:text-gray-400">
        Search and view registered users.
      </p>

      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search by name, email or role..."
        className="mt-6 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:ring-2 focus:ring-blue-400 dark:border-gray-600 dark:bg-gray-800 dark:text-white sm:max-w-md"
      />

      <div className="mt-6 overflow-x-auto rounded-2xl bg-white shadow-sm dark:bg-gray-800">
        <table className="w-full min-w-[600px] text-left text-sm">
          <thead className="bg-gray-50 text-gray-600 dark:bg-gray-700 dark:text-gray-200">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Role</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="border-t border-gray-100 dark:border-gray-700">
                <td className="p-4 font-medium text-gray-900 dark:text-white">{user.name}</td>
                <td className="p-4 text-gray-600 dark:text-gray-300">{user.email}</td>
                <td className="p-4 text-gray-600 dark:text-gray-300">{user.role}</td>
                <td className="p-4">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    user.status === "Active"
                      ? "bg-emerald-100 text-emerald-700"
                      : user.status === "Pending"
                      ? "bg-orange-100 text-orange-700"
                      : "bg-gray-200 text-gray-700"
                  }`}>
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan="4" className="p-6 text-center text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
        Showing {filteredUsers.length} of {initialUsers.length} sample users.
      </p>
    </div>
  );
}
