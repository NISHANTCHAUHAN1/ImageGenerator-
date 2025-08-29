import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";

const Header = ({ theme, onThemeChange }) => {
  // State to check if the component is mounted (to avoid hydration mismatch issues)
  const [mounted, setMounted] = useState(false);

  // Set mounted to true when component is first rendered
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <header
      className={`w-full p-5 shadow-lg transition-colors duration-300
        ${theme === "light" ? "bg-white text-gray-900" : "bg-black text-white"}
      `}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold">Creative & Fun</h1>
          <p
            className={`${
              theme === "light" ? "text-gray-700" : "text-gray-300"
            } text-sm`}
          >
            Discover, Generate, Inspire
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              const newTheme = theme === "light" ? "dark" : "light";
              onThemeChange(newTheme);
            }}
            className={`p-2 rounded-full transition
              ${
                theme === "light"
                  ? "bg-gray-200 text-gray-900 hover:bg-gray-300"
                  : "bg-gray-700 text-white hover:bg-gray-600"
              }`}
          >
            {theme === "light" ? (
              <MoonIcon className="w-5 h-5" />
            ) : (
              <SunIcon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
