import { NavLink } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
    return (
        <nav className="nav">
            <NavLink to="/" className="nav-link">
                Home
            </NavLink>

            <NavLink to="/about" className="nav-link">
                About
            </NavLink>

            <NavLink to="/contact" className="nav-link">
                Contact
            </NavLink>

            <NavLink to="/dashboard" className="nav-link">
                Dashboard
            </NavLink>
        </nav>
    );
}

export default Navbar;