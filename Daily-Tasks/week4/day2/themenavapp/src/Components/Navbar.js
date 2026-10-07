import { useContext } from "react";
import { ThemeContext} from "../ThemeContext";

function Navbar() {
    const { theme, setTheme } = useContext(ThemeContext);

    return(
        <nav className = {`navbar ${theme}`}>
            <h2>Theme Navigator</h2>

            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                {theme === "light" ? "switch to dark mode" : "switch to light mode"}
            </button>
        </nav>
    );
}


export default Navbar;