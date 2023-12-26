import { useState, useEffect } from 'react';
import { FaRegSun, FaRegMoon } from "react-icons/fa";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      className={`flex items-center justify-center ${darkMode ? 'bg-opacity-50' : 'bg-opacity-100'}`}
      onClick={toggleDarkMode}
    >
                {darkMode ? <FaRegMoon/> : <FaRegSun/>}
    </button>
  );
};

export default DarkModeToggle;