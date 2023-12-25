import { useState, useEffect } from 'react';
import { FaRegSun, FaRegMoon } from "react-icons/fa";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

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
      className={`bg-gray-800 text-white ${darkMode ? 'bg-opacity-50' : 'bg-opacity-100'}`}
      onClick={toggleDarkMode}
    >
      {darkMode ? <FaRegMoon/> : <FaRegSun/>}
    </button>
  );
};

export default DarkModeToggle;