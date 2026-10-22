
import { memo, useCallback, useMemo, useState, useEffect } from "react";
import "./App.css";

// Child component optimized with React.memo
const Score = memo(function Score({ value }) {
  console.log("Score component rendered!");

  return (
    <div className="score-box">
      <span className="small-label">Memoized child</span>
      <h3>Score: {value}</h3>
      <p>This component only renders again when its props change.</p>
    </div>
  );
});

// A memoized child that receives a function
const ActionButton = memo(function ActionButton({ onAction }) {
  console.log("ActionButton rendered!");

  return (
    <button className="primary-btn" onClick={onAction}>
      Increase count
    </button>
  );
});

// Simulates an expensive calculation
function calculateTotal(number) {
  console.log("Calculating total...");

  let total = 0;
  for (let i = 1; i <= number * 100000; i++) {
    total += i;
  }

  return total;
}

export default function OptimizationDemo() {
  const [time, setTime] = useState(0);
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(10);
  const [theme, setTheme] = useState(false);

  // Updates the timer every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((previousTime) => previousTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // useCallback keeps the function reference stable
  const increaseCount = useCallback(() => {
    setCount((previousCount) => previousCount + 1);
  }, []);

  // useMemo recalculates only when number changes
  const total = useMemo(() => calculateTotal(number), [number]);

  console.log("OptimizationDemo parent rendered!");

  return (
    <main className={theme ? "app dark" : "app"}>
      <header className="hero">
        <span className="eyebrow">WEEK 4 · DAY 5</span>
        <h1>React Performance Lab</h1>
        <p>
          Explore rendering, memoization, and performance
          optimization through interactive examples.
        </p>
        <button
          className="secondary-btn"
          onClick={() => setTheme((previous) => !previous)}
        >
          Switch {theme ? "Light" : "Dark"} Theme
        </button>
      </header>

      <section className="dashboard">
        <article className="card">
          <span className="card-number">01</span>
          <h2>Rendering Behavior</h2>
          <p>Parent state updates every second.</p>
          <div className="metric">{time}s</div>
          <p className="hint">
            Watch the terminal console to see parent renders.
          </p>
        </article>

        <article className="card">
          <span className="card-number">02</span>
          <h2>React.memo</h2>
          <p>The child receives a constant score prop.</p>
          <Score value={100} />
          <p className="hint">
            The timer updates, but Score does not need to render again.
          </p>
        </article>

        <article className="card">
          <span className="card-number">03</span>
          <h2>useCallback</h2>
          <p>Keep a function reference stable between renders.</p>
          <div className="metric">{count}</div>
          <ActionButton onAction={increaseCount} />
          <p className="hint">
            The button's memoized child can skip unrelated parent renders.
          </p>
        </article>

        <article className="card">
          <span className="card-number">04</span>
          <h2>useMemo</h2>
          <p>Change the input to recalculate the total.</p>
          <label htmlFor="number">Choose a number (1–100)</label>
          <input
            id="number"
            type="number"
            min="1"
            max="100"
            value={number}
            onChange={(event) => {
              const value = Number(event.target.value);
              if (value >= 1 && value <= 100) {
                setNumber(value);
              }
            }}
          />
          <div className="result">
            <span>Calculated total</span>
            <strong>{total.toLocaleString()}</strong>
          </div>
          <p className="hint">
            Check the console: the calculation runs when number changes,
            not on every timer update.
          </p>
        </article>
      </section>
    </main>
  );
}
