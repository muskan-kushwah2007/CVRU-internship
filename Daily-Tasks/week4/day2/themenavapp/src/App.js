import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

import './App.css';

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className = {`App ${theme}`}>
        <Navbar/>
        <Home/>
      </div>
    </ThemeContext.Provider>
    
  );
}

export default App;
