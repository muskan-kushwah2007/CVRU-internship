// Day 5 Task 2: Display Welcome Message Conditionally

import { useState } from "react";

function LoginMessage() {
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

            {isLoggedIn && <h2>Welcome, {username}!</h2>}
        </div>
    );
}


export default LoginMessage;