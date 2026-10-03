// Day 3 Task 1: Create a Simple Counter App (Increment/Decrement)

import { useState} from "react";

function CounterApp() {
    const [count, setCount] = useState(0);

    return(
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
            <h1>Counter App</h1>
            <p>Count: {count}</p>
            <div>
                <button onClick={() => setCount(count + 1)} style={{ margin: "5px" }}>Increment</button>
                <button onClick={() => setCount(count - 1)} style={{ margin: "5px" }}>Decrement</button>
                <button onClick={() => setCount(0)} style={{ margin: "5px" }}>Reset</button>
            </div>
        </div>
    );
}

export default CounterApp;