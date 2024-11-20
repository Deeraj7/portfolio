// src/components/ThemeToggle.jsx
import React from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ isDark, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className={`fixed bottom-8 left-8 p-4 rounded-full shadow-lg
        transform hover:scale-110 transition-all duration-500
        ${isDark 
          ? 'bg-dark-lighter border border-purple-500/20 hover:border-purple-500/40' 
          : 'bg-white border border-gray-200 hover:border-purple-500/40'}`}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-6 h-6 text-yellow-400 transition-transform duration-500 hover:rotate-90" />
      ) : (
        <Moon className="w-6 h-6 text-purple-600 transition-transform duration-500 hover:rotate-90" />
      )}
    </button>
  );
};

export default ThemeToggle;