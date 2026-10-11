
import { NavLink } from "react-router-dom";

const links = [
  { name: "Dashboard", path: "/", icon: "▦" },
  { name: "Users", path: "/users", icon: "♙" },
  { name: "Reports", path: "/reports", icon: "▤" },
  { name: "Settings", path: "/settings", icon: "⚙" },
];

export default function Sidebar({ mobileOpen, onClose }) {
  return (
    <aside
      className={`${
        mobileOpen ? "block" : "hidden"
      } absolute inset-y-0 left-0 z-30 w-64 bg-slate-950 p-5 text-white shadow-xl md:relative md:block md:shrink-0 md:shadow-none`}
    >
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          <span className="text-blue-400">Admin</span>Panel
        </h2>

        <button
          onClick={onClose}
          className="text-2xl md:hidden"
          aria-label="Close menu"
        >
          ×
        </button>
      </div>

      <p className="mb-3 text-xs uppercase tracking-widest text-slate-500">
        Main Menu
      </p>

      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === "/"}
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-950/30"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            <span className="text-lg">{link.icon}</span>
            {link.name}
          </NavLink>
        ))}
      </nav>

      <div className="mt-12 rounded-xl border border-slate-700 bg-slate-900 p-4">
        <p className="font-semibold">MERN Internship</p>
        <p className="mt-1 text-sm text-slate-400">
          Week 4 · Day 6–7
        </p>
      </div>
    </aside>
  );
}

