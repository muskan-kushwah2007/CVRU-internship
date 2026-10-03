import { useState } from "react";

function LoginFormTask() {
    const [username, setUsername] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);    

    const handleLogin = (e) => {
        e.preventDefault();

        if (username.trim() !== "") {
            setIsLoggedIn(true);
        }
    };

    return (
        <div>
            {isLoggedIn ? (
                <form onSubmit={handleLogin}>
                    <h2>Login Form</h2>

                    <input
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <br />
                    <br />
                    <button type="submit">Login</button>
                </form>
            ) : (
                <h2>Welcome, {username}!</h2>
            )}
        </div>
    );
}


export default LoginFormTask;