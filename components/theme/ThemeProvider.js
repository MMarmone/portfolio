// ThemeProvider.js
import React, { useEffect, useState } from 'react';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  
  useEffect(() => {
    // Vérifie si le navigateur prend en charge le thème sombre
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    localStorage.setItem('color-theme', 'dark');
    // Si le navigateur prend en charge le thème sombre, utilisez-le comme thème par défaut
    if (prefersDarkMode) {
      setTheme('dark');
      
    }
  }, []);

  return <div className={`theme-${theme} theme-light dark:bg-gray-800`}>{children}</div>;
};

export default ThemeProvider;