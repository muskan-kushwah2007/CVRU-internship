// Day 5 Task 1: Create a Simple Login Form UI

import { useState } from "react";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim() !== "") {
            setIsLoggedIn(true);
        }
    };

    return (
        <div>
            {!isLoggedIn && (
            <form onSubmit={handleSubmit}>
            <h2>Login Form</h2>

            <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />

            <br /><br />

            <button type="submit">Login</button>
            </form>
            )}
        </div>
    );
}


export default LoginForm;