
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "./Context/ThemeContext";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";

import Dashboard from "./Pages/Dashboard";
import Users from "./Pages/Users";
import Reports from "./Pages/Reports";
import Settings from "./Pages/Settings";

function DashboardLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      {mobileOpen && (
        <button
          aria-label="Close navigation menu"
          className="fixed inset-0 z-20 bg-black/40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <Sidebar
        mobileOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      <div className="min-w-0 flex-1">
        <Navbar
          onMenuClick={() => setMobileOpen((previous) => !previous)}
        />

        <main className="p-4 sm:p-6 lg:p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>

        <footer className="border-t border-gray-200 px-6 py-5 text-center text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">
          AdminPanel · Week 4 Day 6–7 · React + Tailwind CSS
        </footer>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <DashboardLayout />
      </BrowserRouter>
    </ThemeProvider>
  );
}
