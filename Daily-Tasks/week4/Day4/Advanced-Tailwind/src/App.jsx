
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleReadMore() {
    if (!email.trim()) {
      setMessage("Please enter your email first!");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Please enter a valid email address.");
    } else {
      setMessage("Thank you! Your email has been submitted.");
    }
  }

  return (
    <div className="min-h-screen bg-[#F4F6F7] p-6">
      {/* Header */}
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-[#4B7BEC] md:text-4xl">
          Advanced Tailwind CSS
        </h1>
        <p className="mt-3 text-gray-600">
          Week-4 Day-4 | MERN Full Stack Internship
        </p>
      </header>

      {/* Task 1: Interactive Card */}
      <section className="mx-auto max-w-4xl">
        <h2 className="mb-5 text-2xl font-bold text-gray-800">
          Task 1: Interactive Card
        </h2>

        <div className="max-w-sm rounded-xl border border-gray-100 bg-white p-5 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#4B7BEC] text-xl font-bold text-white">
            R
          </div>

          <h3 className="text-xl font-semibold text-gray-800">
            React Training
          </h3>

          <p className="mt-2 leading-6 text-gray-600">
            Learn React with hands-on examples and real projects.
          </p>

          <input
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setMessage("");
            }}
            placeholder="Enter your email"
            className="mt-4 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-[#4B7BEC] focus:ring-2 focus:ring-blue-300"
          />

          <button
            onClick={handleReadMore}
            className="mt-4 rounded-lg bg-[#4B7BEC] px-5 py-2 font-semibold text-white transition hover:bg-blue-600 active:scale-95"
          >
            Read More
          </button>

          {message && (
            <p aria-live="polite" className="mt-3 text-sm text-gray-700">
              {message}
            </p>
          )}
        </div>
      </section>

      {/* Task 2: Custom Color Palette */}
      <section className="mx-auto mt-12 max-w-4xl">
        <h2 className="mb-5 text-2xl font-bold text-gray-800">
          Task 2: Custom Color Palette
        </h2>

        <div className="rounded-2xl bg-white p-6 shadow-md">
          <h3 className="text-3xl font-bold text-[#4B7BEC]">
            Welcome
          </h3>

          <p className="mt-3 text-gray-600">
            Explore our custom color palette using Tailwind CSS.
          </p>

          <button className="mt-5 rounded-lg bg-[#A55EEA] px-5 py-3 font-semibold text-white transition hover:bg-purple-700 hover:shadow-lg">
            Explore
          </button>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-[#4B7BEC] p-4 text-center text-white transition hover:scale-105">
              <p className="font-bold">Primary</p>
              <p className="mt-1 text-sm">#4B7BEC</p>
            </div>

            <div className="rounded-xl bg-[#A55EEA] p-4 text-center text-white transition hover:scale-105">
              <p className="font-bold">Secondary</p>
              <p className="mt-1 text-sm">#A55EEA</p>
            </div>

            <div className="rounded-xl bg-[#20BF6B] p-4 text-center text-white transition hover:scale-105">
              <p className="font-bold">Accent</p>
              <p className="mt-1 text-sm">#20BF6B</p>
            </div>

            <div className="rounded-xl border border-gray-300 bg-[#F4F6F7] p-4 text-center text-gray-800 transition hover:scale-105">
              <p className="font-bold">Background</p>
              <p className="mt-1 text-sm">#F4F6F7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        <p>Week-4 Day-4 | Advanced Tailwind CSS & Component Design</p>
        <p className="mt-1">MERN Full Stack Internship Program</p>
      </footer>
    </div>
  );
}

export default App;
