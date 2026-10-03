//  Day 3 Task 2: Build a Form That Displays Input Data Dynamically

import { useState } from "react";

function UserForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div>
        <h2>Registration Form</h2>
        <form>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
        </form>

        <h3>Live Preview:</h3>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        </div>
    );
}

export default UserForm;