import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
  
  const [theme, setTheme] = useState("light");   // State to manage theme (light/dark)

  // Function to handle theme change
  const handleThemeChange = (newTheme) => {
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    handleThemeChange(savedTheme);
  }, []);

  return (
    <div
      className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
    >
      <Header theme={theme} onThemeChange={handleThemeChange} />
      <Home />
      {/* <Home theme={theme} onThemeChange={handleThemeChange} /> */}
    </div>
  );
};

export default App;

    