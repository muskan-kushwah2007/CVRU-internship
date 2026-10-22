
import { lazy, Suspense, useState } from "react";
import OptimizationDemo from "./OptimizationDemo";
import "./App.css";

const About = lazy(() => import("./About"));

export default function App() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <>
      <OptimizationDemo />

      <section className="about-section">
        <button
          className="primary-btn"
          onClick={() => setShowAbout((previous) => !previous)}
        >
          {showAbout ? "Hide About Page" : "Load About Page"}
        </button>

        {showAbout && (
          <Suspense fallback={<p>Loading About page...</p>}>
            <About />
          </Suspense>
        )}
      </section>
    </>
  );
}
