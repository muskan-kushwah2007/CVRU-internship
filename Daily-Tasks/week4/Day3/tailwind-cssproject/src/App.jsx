
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const courses = [
    {
      title: "React Development",
      description: "Build interactive websites using reusable React components.",
      color: "text-blue-600",
    },
    {
      title: "Tailwind CSS",
      description: "Design modern and responsive websites with utility classes.",
      color: "text-green-600",
    },
    {
      title: "JavaScript",
      description: "Learn programming and create dynamic web applications.",
      color: "text-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-gray-900 px-6 py-4 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <h1 className="text-2xl font-bold">MySite</h1>

          <ul className="hidden gap-6 md:flex">
            <li><a href="#home" className="hover:text-blue-400">Home</a></li>
            <li><a href="#courses" className="hover:text-blue-400">Courses</a></li>
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
          </ul>

          <button
            className="text-3xl md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <ul className="mt-4 space-y-3 md:hidden">
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#courses" onClick={() => setMenuOpen(false)}>Courses</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          </ul>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">
          Welcome to MySite
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-gray-600">
          Learn React, JavaScript and Tailwind CSS to build modern websites.
        </p>

        <button
          onClick={() => alert("Welcome to MySite!")}
          className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Get Started
        </button>
      </section>

      {/* Course Cards */}
      <section id="courses" className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
          Our Courses
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.title}
              className="rounded-xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <h3 className={`text-xl font-bold ${course.color}`}>
                {course.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {course.description}
              </p>

              <button
                onClick={() => alert(`You selected ${course.title}`)}
                className="mt-5 rounded-lg bg-gray-900 px-4 py-2 text-white hover:bg-gray-700"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="bg-gray-900 py-6 text-center text-white">
        <p>React + Tailwind CSS</p>
        <p className="mt-2 text-sm text-gray-400">
          Week-4 Day-3 | MERN Full Stack Internship
        </p>
      </footer>
    </div>
  );
}

export default App;
